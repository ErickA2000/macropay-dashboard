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

interface Props {
  title: string;
  id: string;
  contentSubCard: boolean;
  subCard?: React.ReactNode;
}

function CardService({ title, id, contentSubCard, subCard }: Props) {
  const [openSubCard, setOpenSubCard] = useState(false);
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
