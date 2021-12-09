import React from "react";
import Chart from "../../components/chart/chart";
import FeaturedInfo from "../../components/featuredInfo/featuredInfo";
import "./Home.css";
import { userData } from "../../dummyData";
import WidgetSm from '../../components/widgetsm/WidgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';


const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homewidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
};

export default Home;
