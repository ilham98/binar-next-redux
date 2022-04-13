import { Container } from "reactstrap";
import Navbar from "../components/navbar/Navbar";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser, deleteUser } from "../redux/slices/usersSlice";
import Link from "next/link";

function Index() {
  const users = useSelector((state) => state.users);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dispatch = useDispatch();

  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
  });

  const onChange = (field, event) => {
    setFields((prevFields) => {
      return {
        ...prevFields,
        [field]: event.target.value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isUpdating) {
      dispatch(addUser(fields));
    } else {
      dispatch(
        updateUser({
          selectedIndex,
          fields,
        })
      );
      setIsUpdating(false);
    }
    setFields({
      firstName: "",
      lastName: "",
    });
  };

  const onUpdateClick = (userIndex) => {
    setSelectedIndex(userIndex);
    setIsUpdating(true);
    const { firstName, lastName } = users[userIndex];
    setFields({ firstName, lastName });
  };

  const onDeleteClick = (userIndex) => {
    dispatch(deleteUser(userIndex));
  };

  const onCancelUpdateClick = () => {
    setFields({
      firstName: "",
      lastName: "",
    });
    setIsUpdating(false);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Link href="users">Users</Link>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              placeholder="with a placeholder"
              onChange={(event) => onChange("firstName", event)}
              value={fields.firstName}
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              placeholder="with a placeholder"
              onChange={(event) => onChange("lastName", event)}
              value={fields.lastName}
            />
          </FormGroup>
          <Button color="primary">{isUpdating ? "Update" : "Submit"}</Button>
          {isUpdating && (
            <Button onClick={onCancelUpdateClick}>Cancel Update</Button>
          )}
        </Form>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, userIndex) => {
              return (
                <tr key={userIndex}>
                  <th scope="row">{userIndex + 1}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>
                    <Button
                      onClick={() => onUpdateClick(userIndex)}
                      color="primary"
                    >
                      Update
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => onDeleteClick(userIndex)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Index;
