import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Flex } from "antd";

function EditCatalog() {
  const breadcrumbItems = [
    {
      href: "/",
      title: <HomeOutlined />,
    },
    {
      href: "/config",
      title: "Configuración",
    },
    {
      title: "Catálogo de Servicios",
    },
    {
      title: "Edición de catálogo",
    },
  ];
  
  return (
    <Flex>
      <Breadcrumb items={breadcrumbItems}></Breadcrumb>
    </Flex>
  );
}

export default EditCatalog;
