import React, { useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentFilter } from "../../store/reducers/homeReducer";
import Hamburger from "hamburger-react";
import SideBar from "../Sidebar";

export const buttonvalues = [
  { value: "", name: "All" },
  { value: "asia", name: "Asia" },
  { value: "europe", name: "Europe" },
];

const Index = () => {
  const dispatch = useDispatch();
  const { currentFilter } = useSelector((state) => state.homeReducer);
  const [isOpen, setOpen] = useState(false);
  const setFilterValue = (value) => {
    dispatch(setCurrentFilter(value));
  };

  return (
    <div className="navbar">
      <div className="nav_wrap">
        <h4>Countries</h4>
        <div className="filter_wrap">
          {buttonvalues?.map((res) => (
            <button
              style={{
                borderBottom:
                  currentFilter === res.value ? "3px solid black" : "none",
              }}
              onClick={() => setFilterValue(res.value)}
            >
              {res?.name}
            </button>
          ))}
        </div>
        <div className="hamburger_menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {isOpen && <SideBar toggle={setOpen} />}
    </div>
  );
};

export default Index;
