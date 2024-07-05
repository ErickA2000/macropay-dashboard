import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./navigation";
import { ROUTES } from "@Routes/routes";
import { Flex } from "antd";

const router = createBrowserRouter(ROUTES);

function Home() {

  return (
    <Flex>
        <Navigation/>
        <RouterProvider router={router}></RouterProvider>
    </Flex>
  );
}

export default Home;