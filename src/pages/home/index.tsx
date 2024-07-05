import Navigation from "./navigation";
import { Flex } from "antd";
import "./styles.css";
import { Outlet } from "react-router-dom";

function Home() {

  return (
    <Flex className="home-container">
        <Navigation/>
        <Outlet/>
    </Flex>
  );
}

export default Home;