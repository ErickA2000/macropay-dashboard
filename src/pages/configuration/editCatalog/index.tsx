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
import ModalCategory from "@Components/modal-category";
import { useOpenModalCategory } from "@Hooks/useOpenModalCategory";

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
  const modal = useOpenModalCategory();

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
            <Button
              type="link"
              icon={<PlusOutlined />}
              className="btn"
              onClick={modal.open}>
              Agregar categoría / servicio
            </Button>

            <ModalCategory
              state={modal.state}
              close={modal.close}
              isOnlyView={false}
              title="Agregar categoría - Servicio"
            />

            <Flex vertical>
              {categoryHook.items.map((category, categoryIndex) => (
                <CardService
                  key={category.id}
                  title={category.title}
                  id={category.id}
                  contentSubCard
                  index={categoryIndex}
                  isSubCard={false}
                  idParent={category.id}
                  subCard={category.subCategory.map(
                    (subCategory, subCategoryIndex) => (
                      <CardService
                        index={subCategoryIndex}
                        title={subCategory.title}
                        id={subCategory.id}
                        contentSubCard={false}
                        isSubCard
                        idParent={category.id}
                        key={subCategory.id}
                      />
                    )
                  )}
                />
              ))}
            </Flex>
          </section>
        </Flex>
      </section>
    </Flex>
  );
}

export default EditCatalog;
