import { Container, Table, Button } from "reactstrap";
import Navbar from "../../components/navbar/Navbar";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, updateItem } from "../../redux/slices/shopSlice";
import { useEffect, useState } from "react";
import ItemForm from "../../components/itemsForm/ItemForm";

const items = [
  {
    id: 1,
    name: "Book",
    price: 20000,
  },
  {
    id: 2,
    name: "Pen",
    price: 10000,
  },
];

const itemsForReactSelectOptions = items.map((item) => ({
  value: item.id,
  label: item.name,
  price: item.price,
}));

function Shop() {
  const dispatch = useDispatch();
  const shop = useSelector((store) => store.shop);
  const [total, setTotal] = useState(0);

  const onItemAddClick = () => {
    dispatch(addItem());
  };

  const onItemChange = (value, index) => {
    const fields = {
      value: value.value,
      label: value.label,
      price: value.price,
    };
    dispatch(
      updateItem({
        fields,
        selectedIndex: index,
      })
    );
  };

  const onDeleteClick = (index) => {
    dispatch(
      deleteItem({
        selectedIndex: index,
        index,
      })
    );
  };

  useEffect(() => {
    const calculatedTotal = shop.reduce((totalValue, item) => {
      return totalValue + item.price;
    }, 0);
    setTotal(calculatedTotal);
  }, [shop]);

  return (
    <>
      <Navbar />
      <Container>
        <ItemForm />
        <hr />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shop.map((item, itemIndex) => (
              <tr key={itemIndex}>
                <th scope="row">{itemIndex + 1}</th>
                <td>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    name="color"
                    options={itemsForReactSelectOptions}
                    value={item}
                    onChange={(value) => onItemChange(value, itemIndex)}
                  />
                </td>
                <td>{item.price}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => onDeleteClick(itemIndex)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={4} style={{ textAlign: "right" }}>
                <Button onClick={onItemAddClick}>Tambah Item</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <div
          className="d-flex justify-content-end p-3 h4"
          style={{ fontWeight: "bold" }}
        >
          Total Price : {total}
        </div>
      </Container>
    </>
  );
}

export default Shop;
