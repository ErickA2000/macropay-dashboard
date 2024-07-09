import { useCategories } from "@Hooks/useCategories";
import { Flex } from "antd";

interface Props {
    parentId?: string;
    childrenId?: string;
}

function ViewDataCategory({ parentId, childrenId }: Props){
    const category = useCategories();
    
    const dataCategory = category.find(parentId, childrenId);

    return (
        <Flex vertical >
            <h3>Titulo</h3>
            <p style={{margin: '0'}}>{dataCategory.title}</p>

            <h3>Descripción</h3>
            <p style={{margin: '0'}}>{dataCategory.description}</p>
        </Flex>
    );
}

export default ViewDataCategory;