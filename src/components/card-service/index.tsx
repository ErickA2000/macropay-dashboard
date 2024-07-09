import {
  CaretDownFilled,
  CaretUpFilled,
  DashOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Button, Card, Flex, Modal } from "antd";
import "./styles.css";
import React, { useState } from "react";
import ViewDataCategory from "@Components/view-data-category";
import OpenModal from "@Components/open-modal";
import Emitter from "@Utils/emitter";
import { RemoveElement } from "@Interfaces/category-services";

interface Props {
  id: string;
  title: string;
  contentSubCard: boolean;
  subCard?: React.ReactNode;
  idParent?: string;
}

function CardService({
  title,
  contentSubCard,
  subCard,
  idParent,
  id,
}: Props) {
  const [openSubCard, setOpenSubCard] = useState(false);
  const [isOpenOnlyViewModal, setIsOpenOnlyViewModal] = useState(false);

  // console.log("in card");

  const deleteCategory = () => {
    Emitter<RemoveElement>().emit("remove-card", {
      idParent,
      idChildren: id
    })
    // removeItem();
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

      <Modal
        footer
        open={isOpenOnlyViewModal}
        onClose={() => setIsOpenOnlyViewModal(false)}
        onCancel={() => setIsOpenOnlyViewModal(false)}>
        <ViewDataCategory parentId={idParent} childrenId={id} />
      </Modal>

      {contentSubCard && openSubCard && (
        <section className="sub-card">
          <OpenModal mainCategoryId={idParent} />

          {subCard}
        </section>
      )}
    </>
  );
}

export default CardService;
