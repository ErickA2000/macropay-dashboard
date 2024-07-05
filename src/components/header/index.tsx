import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex } from "antd";
import logo from "@Assets/img/macropay-logo-v2.png";
import "./styles.css";

function Header() {
  return (
    <header>
      <Flex gap="small" align="center">
        <Button type="text" icon={<MenuOutlined />}></Button>
        <div className="container-img">
          <img src={logo} alt="Macropay logo" />
        </div>
      </Flex>

      <Flex gap="small" align="center">
        <Flex vertical align="end">
          <h4 className="user">Macropayer Pedro Solar</h4>
          <p className="id-user">CORP4-AVMEJIA</p>
        </Flex>

        <Avatar icon={<UserOutlined />} />
      </Flex>
    </header>
  );
}

export default Header;
