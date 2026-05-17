import Item from "../../../components/(service_Item)/Item";
import ItemList from "../../../components/(service_Item)/ItemList";

const Service = () => {
    return (
        <div>
            
            <ItemList>
                <Item name="Service 1" />
                <Item name="Service 2" />
                <Item name="Service 3" />
            </ItemList>
            this is service page
        </div>
    );
};

export default Service;