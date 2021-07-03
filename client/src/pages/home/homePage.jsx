import './home.css'

import Topbar from "../../components/topbar/Topbar";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";

const Home = () => {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <SideBar/>
        <Feed/>
        <RightBar/>
      </div>
    </>
  )
}


export default Home