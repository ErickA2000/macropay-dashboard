import {
  CaretDownFilled,
  CaretUpFilled,
  DashOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Card, Flex } from "antd";
import "./styles.css";
import React, { useState } from "react";
import { useCategories } from "@Hooks/useCategories";
import { useOpenModalCategory } from "@Hooks/useOpenModalCategory";
import ModalCategory from "@Components/modal-category";

interface Props {
  id: string;
  index: number;
  title: string;
  contentSubCard: boolean;
  isSubCard: boolean;
  subCard?: React.ReactNode;
  idParent?: string;
}

function CardService({
  title,
  index,
  contentSubCard,
  subCard,
  isSubCard,
  idParent,
  id,
}: Props) {
  const [openSubCard, setOpenSubCard] = useState(false);
  const [isOpenOnlyViewModal, setIsOpenOnlyViewModal] = useState(false);
  const categoryHook = useCategories();
  const modal = useOpenModalCategory();
    
  const deleteCategory = () => {
    if (isSubCard && idParent) {
      categoryHook.removeSubCategory(idParent, id);
    }

    if (!isSubCard) {
      categoryHook.remove(index);
    }
  };

  return (
    <>
      <Card className="card">
        <Flex justify="space-between" align="center">
          <p>{title}</p>

          <Flex gap="small">
            <Button
              type="link"
              shape="circle"
              icon={<DashOutlined className="icon" />}
            />
            <Button
              type="link"
              shape="circle"
              icon={<EyeOutlined className="icon" />}
              onClick={() => setIsOpenOnlyViewModal(true)}
            />
            <Button
              type="link"
              shape="circle"
              icon={<DeleteOutlined className="icon" />}
              onClick={deleteCategory}
            />
            <Button
              type="link"
              shape="circle"
              icon={
                openSubCard ? (
                  <CaretUpFilled className="icon" />
                ) : (
                  <CaretDownFilled className="icon" />
                )
              }
              onClick={() => setOpenSubCard(!openSubCard)}
            />
          </Flex>
        </Flex>
      </Card>
      <ModalCategory
        state={isOpenOnlyViewModal}
        close={() => setIsOpenOnlyViewModal(false)}
        mainCategoryId={idParent}
        childrenId={id}
        isOnlyView
        title="Categoría"
      />

      {contentSubCard && openSubCard && (
        <section className="sub-card">
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
            mainCategoryId={idParent}
            isOnlyView={false}
            title="Agregar categoría - Servicio"
          />
          {subCard}
        </section>
      )}
    </>
  );
}

export default CardService;
