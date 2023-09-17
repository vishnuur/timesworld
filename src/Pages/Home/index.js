import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "../../store/reducers/homeReducer";
import Cards from "../../Components/Card/index";
import "./index.scss";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";
import Loader from "../../Components/Loader";

const Index = () => {
  const dispatch = useDispatch();
  const { mapData, currentFilter, isLoading } = useSelector(
    (state) => state.homeReducer
  );
  useEffect(() => {
    dispatch(fetchHomeData(null));
  }, [dispatch]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Navbar />
      <div className="home_wrap">
        <div className="cards_wrap_outer">
          {mapData
            .filter((x) => x.region?.toLowerCase().includes(currentFilter))
            .map((res) => (
              <Cards name={res?.name} flag={res.flag} region={res.region} />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
