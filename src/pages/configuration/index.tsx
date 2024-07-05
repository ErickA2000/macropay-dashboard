import { Flex } from "antd";
import { Link } from "react-router-dom";

function Configuration() {
  return (
    <Flex vertical>
      <Link to="edit-catalog">Editar catálogo</Link>
    </Flex>
  );
}

export default Configuration