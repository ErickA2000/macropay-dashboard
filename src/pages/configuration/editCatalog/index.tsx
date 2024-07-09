import { HomeOutlined, ImportOutlined, SaveOutlined } from "@ant-design/icons";
import { Breadcrumb, Flex } from "antd";
import "./styles.css";
import CardService from "@Components/card-service";
import { useCategories } from "@Hooks/useCategories";
import OpenModal from "@Components/open-modal";
import { useEffect } from "react";
import Emitter from "@Utils/emitter";
import { RemoveElement } from "@Interfaces/category-services";

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

  const removeItem = (
    idParent?: string,
    idChildren?: string
  ) => {
    if (idParent && idChildren && idParent !== idChildren) {
      categoryHook.removeSubCategory(idParent, idChildren);
    } else if(idParent){
      categoryHook.remove(idParent);
    }
  };

  useEffect(() => {
    Emitter<RemoveElement>().on("remove-card", (data) => {
      removeItem(data.idParent, data.idChildren);
    });

    // return () => {
    //   Emitter<RemoveElement>().off("remove-card", (data) => {
    //     removeItem(data.indexParent, data.idParent, data.idChildren);
    //   });
    // };
  });

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
            <OpenModal />

            <Flex vertical>
              {categoryHook.items.map((category) => (
                <CardService
                  key={category.id}
                  title={category.title}
                  id={category.id}
                  contentSubCard
                  idParent={category.id}
                  subCard={category.subCategory.map((subCategory) => (
                    <CardService
                      title={subCategory.title}
                      id={subCategory.id}
                      contentSubCard={false}
                      idParent={category.id}
                      key={subCategory.id}
                    />
                  ))}
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
