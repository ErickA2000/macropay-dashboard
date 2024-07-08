import {
  HomeOutlined,
  ImportOutlined,
  PlusOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Flex } from "antd";
import "./styles.css";
import CardService from "@Components/card-service";

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
    <Flex vertical className="edit-container">
      <Breadcrumb items={breadcrumbItems}></Breadcrumb>

      <section className="edit-content">
        <Flex justify="space-between">
          <h3>EDICIÓN DE CATÁLOGO</h3>
          <Flex gap="small" className="header-icons">
            <ImportOutlined className="icon" />
            <SaveOutlined className="icon" />
          </Flex>
        </Flex>

        <Flex gap="small" vertical className="catalog">
          <section className="container-title">
            <h4>Catálogo de Servicios</h4>
          </section>

          <section className="container-services">
            <Button type="link" icon={<PlusOutlined />} className="btn">
              Agregar categoría / servicio
            </Button>

            <Flex vertical gap="middle">
              <CardService
                title="Nombre servicios"
                id="1"
                contentSubCard
                subCard={
                  <CardService title="sub card" id="1" contentSubCard={false} />
                }
              />

              <CardService
                title="Nombre servicios 2"
                id="1"
                contentSubCard
                subCard={
                  <CardService title="sub card" id="1" contentSubCard={false} />
                }
              />
            </Flex>
          </section>
        </Flex>
      </section>
    </Flex>
  );
}

export default EditCatalog;
