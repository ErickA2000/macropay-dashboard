import { useCategories } from "@Hooks/useCategories";
import { Button, Flex, Form, FormProps, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import "./styles.css";

interface Props {
  state: boolean;
  mainCategoryId?: string;
  childrenId?: string;
  close: () => void;
  title: string;
}

type FielType = {
  title: string;
  description: string;
};

function ModalCategory({
  state,
  close,
  mainCategoryId,
  title,
}: Props) {
  const category = useCategories();
  const [form] = Form.useForm();
  console.log("modal");
  
  
  const onFinish: FormProps<FielType>["onFinish"] = (values) => {
    if (mainCategoryId) {
      category.addSubCategory(mainCategoryId, {
        id: crypto.randomUUID().toString(),
        ...values,
      });

      form.resetFields();
      close();
    } else {
      category.add({
        id: crypto.randomUUID().toString(),
        ...values,
        subCategory: [],
      });

      form.resetFields();
      close();
    }
  };

  return (
    <Modal
      open={state}
      footer
      title={title}
      className="modal"
      onCancel={() => {
        form.resetFields();
        close();
      }}>
      <Form
        autoComplete="off"
        onFinish={onFinish}
        form={form}
        >
        <h4>Nombre de la categoría*</h4>
        <Form.Item<FielType>
          name="title"
          rules={[
            { required: true, message: "El titulo es requerido" },
            { min: 3, message: "Debe de tener al menos 3 caracteres" },
          ]}>
          <Input placeholder="Ingrese el nombre de la categoría" />
        </Form.Item>

        <h4>Descripción de la categoría*</h4>
        <Form.Item<FielType>
          name="description"
          rules={[{ required: true, message: "La descripción es requerida" }]}>
          <TextArea
            placeholder="Ingrese la descripción de la categoría"
            autoSize={{ minRows: 4, maxRows: 6 }}
          />
        </Form.Item>

          <Flex justify="space-between">
            <Button type="link">Opciones avanzadas</Button>

            <Button htmlType="submit" type="primary">
              Aceptar
            </Button>
          </Flex>
      </Form>
    </Modal>
  );
}

export default ModalCategory;
