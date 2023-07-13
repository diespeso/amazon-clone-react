import { Container, Card, CardContent, Form, Button, Dropdown } from "semantic-ui-react";
import { MainLayout } from "../../layouts/MainLayot";
import { ChipSelector } from "../../components/common/ChipSelector";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "../../store/categories/categories.thunk";

export const NewProductView = () => {

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories)
  

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);


  // const categoriesClean = categories.data.list.map((category) => ({ value: category.id, text: category.name}));

  const categoriesClean = categories.data.list.map((category) => ({ key: category.id, text: category.name, value: category.id }));

  const handleOnClick = () => {
  }


  return (
    <MainLayout>
      <Container style={{width: '90%'}}>
        <Card className="centered" style={{width: '100%'}}>
          <CardContent>
            <Form>
              <Form.Field>
                <label>Product Name</label>
                <input></input>
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <textarea></textarea>
              </Form.Field>
              <Form.Field>
                <label>Price</label>
                <input></input>
              </Form.Field>
              <Form.Field>
                <label>Categories</label>
                <Dropdown fluid multiple selection options={categoriesClean}></Dropdown>
              </Form.Field>
              <Button type="submit" onClick={handleOnClick}>Save</Button>
            </Form>
          </CardContent>
        </Card>
      </Container>
    </MainLayout>
  )
};