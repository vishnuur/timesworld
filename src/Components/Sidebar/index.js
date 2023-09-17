import React from "react";
import "./index.scss";
import { buttonvalues } from "../Navbar";
import { setCurrentFilter } from "../../store/reducers/homeReducer";
import { useDispatch, useSelector } from "react-redux";

const Index = ({ toggle }) => {
  const dispatch = useDispatch();
  const { currentFilter } = useSelector((state) => state.homeReducer);
  const setFilterValue = (value) => {
    dispatch(setCurrentFilter(value));
  };
  return (
    <div className="sidebar-wrap">
      {buttonvalues.map((res) => (
        <button
          style={{
            borderBottom:
              currentFilter === res.value ? "3px solid black" : "none",
          }}
          onClick={() => {
            setFilterValue(res.value);
            toggle(false);
          }}
        >
          {res?.name}
        </button>
      ))}
    </div>
  );
};

export default Index;
