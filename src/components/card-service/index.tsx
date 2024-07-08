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
  const categoryHook = useCategories();

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

      {contentSubCard && openSubCard && (
        <section className="sub-card">
          <Button type="link" icon={<PlusOutlined />} className="btn">
            Agregar categoría / servicio
          </Button>
          {subCard}
        </section>
      )}
    </>
  );
}

export default CardService;
