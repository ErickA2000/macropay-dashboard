import Header from '@Components/header'
import './App.css'
import { ConfigProvider } from 'antd'
import { ROUTES } from '@Routes/routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(ROUTES);

function App() {

  return (
    <ConfigProvider 
      theme={
        {
          components: {
            Menu: {
              itemHoverBg: "#EDF2F7",
              itemSelectedBg: "#0047BA",
              itemSelectedColor: "#FFDD00"       
            }
          }
        }
      }
    >
      <Header/>
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  )
}

export default App
