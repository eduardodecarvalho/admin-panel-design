import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featureinfo/FeatureInfo";
import "./home.css";
import { userData } from "../../data/dummyData"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import { newJoinMembers } from "../../data/newJoinMembers.js"

export default function Home() {
  return (    
    <div className="home">
      <FeatureInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
      <div className="homeWidgets">
        <WidgetSmall data={newJoinMembers}/>
        <WidgetLarge/>
      </div>
    </div>
  );
}