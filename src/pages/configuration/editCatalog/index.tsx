import {
  HomeOutlined,
  ImportOutlined,
  PlusOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Flex } from "antd";
import "./styles.css";
import CardService from "@Components/card-service";
import { useCategories } from "@Hooks/useCategories";

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
  const categoryHook = useCategories();

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
              {categoryHook.categories.map((category, index) => (
                <CardService
                  key={category.id}
                  title={category.title}
                  id={category.id}
                  contentSubCard
                  index={index}
                  isSubCard={false}
                  subCard={categoryHook.categories.map((subCategory, index) => (
                    <CardService
                      index={index}
                      title={subCategory.title}
                      id={subCategory.id}
                      contentSubCard={false}
                      isSubCard
                      idParent={category.id}
                      key={subCategory.id}
                    />
                  ))}
                />
              ))}

              {/* <CardService
                title="Nombre servicios 2"
                index={1}
                id="1"
                contentSubCard
                subCard={
                  <CardService
                    index={1}
                    title="sub card"
                    id="1"
                    contentSubCard={false}
                  />
                }
              /> */}
            </Flex>
          </section>
        </Flex>
      </section>
    </Flex>
  );
}

export default EditCatalog;
