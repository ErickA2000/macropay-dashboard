import Header from '@Components/header'
import './App.css'
import { ConfigProvider } from 'antd'
import Home from '@Pages/home'

function App() {

  return (
    <ConfigProvider>
      <Header/>
      <Home/>
    </ConfigProvider>
  )
}

export default App
