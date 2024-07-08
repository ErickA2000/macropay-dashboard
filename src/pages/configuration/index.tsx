import { ArrayStateProvider } from "@Hooks/useCategories";
import { Flex } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";

function Configuration() {
  const location = useLocation();
  const route = location.pathname.split("/");
  const isEditCatalog = route.includes("edit-catalog");

  return (
    <Flex vertical style={{ width: "100%" }}>
      {!isEditCatalog && <Link to="edit-catalog">Editar catálogo</Link>}

      <ArrayStateProvider>
        <Outlet />
      </ArrayStateProvider>
    </Flex>
  );
}

export default Configuration;
