import { PlusOutlined } from "@ant-design/icons";
import ModalCategory from "@Components/modal-category";
import { useOpenModalCategory } from "@Hooks/useOpenModalCategory";
import { Button } from "antd";

interface Props {
    mainCategoryId?: string;
}

function OpenModal({ mainCategoryId }: Props) {
    const modal = useOpenModalCategory();
    
  return (
    <>
      <Button
        type="link"
        icon={<PlusOutlined />}
        style={{
            marginTop: ".5rem",
            marginBottom: ".5rem",
            color: "#31C462"
        }}
        onClick={modal.open}>
        Agregar categoría / servicio
      </Button>

      <ModalCategory
        state={modal.state}
        close={modal.close}
        mainCategoryId={mainCategoryId}
        title="Agregar categoría - Servicio"
      />
    </>
  );
}

export default OpenModal;
