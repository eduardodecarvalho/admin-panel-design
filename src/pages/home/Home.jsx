import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featureinfo/FeatureInfo";
import "./home.css";
import { userData } from "../../dummyData"

export default function Home() {
  return (
    <div className="home">
      <FeatureInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
    </div>
  );
}