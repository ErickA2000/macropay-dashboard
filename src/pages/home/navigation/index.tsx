import { Menu, MenuProps } from "antd";
import './styles.css';
import { HomeOutlined, SettingOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "dashboard",
    label: "DASHBOARD",
    icon: <HomeOutlined/>
  },
  {
    key: "tickets",
    label: "TICKETS",
    icon: <UnorderedListOutlined/>
  },
  {
    key: "users",
    label: "USUARIOS",
    icon: <UserOutlined/>
  },
  {
    key: "config",
    label: "CONFIGURACIÓN",
    icon: <SettingOutlined/>
  }
];

function Navigation() {
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    if(e.key === "dashboard") {
      navigate("/");
    }

    navigate(e.key);
  };

  return (
    <Menu items={items} onClick={onClick} className="nav"/>
  );
}

export default Navigation;