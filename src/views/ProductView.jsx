import { Container, Form, Card, Grid, Button, Label, Loader, Dropdown } from "semantic-ui-react";
import { MainLayout } from "../layouts/MainLayot";
import { ProductImageGallery } from "../components/product/ProductImageGallery";
import { ProductReviewContainer } from "../components/product/ProductReviewContainer";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, getCategoriesByProductId } from "../store/product/product.thunks";
import { getReviewListFromProduct } from "../store/product/reviewList.thunks";
import { getImagesByProductId } from "../store/product/images/image.thunks";

import { useEffect, useState } from "react";

import './productView.css';

export const ProductView = () => {

    const dispatch = useDispatch();
    const { product_id } = useParams();
    const product = useSelector((state) => state.product);

    const reviewsList = useSelector((state) => state.reviewList);

		const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        Promise.all(
            [
                dispatch(getReviewListFromProduct(product_id)),
                dispatch(getProductById(product_id)),
                dispatch(getCategoriesByProductId(product_id)),
                dispatch(getImagesByProductId(product_id)),
            ]
        );
        //dispatch(getProductById(product_id)); //testing
		//dispatch(getCategoriesByProductId(product_id));
    }, [product_id, dispatch]);

		const { loading } = product;

		const categoriesRender = () => {
			return product.data?.categories?.map(category => {
				return (
					<Label key={category.id}>{category.name}</Label>
				)
			})
		};

		const quantityOptions = [...Array(20).keys()].map(quantity => {
			return {
				key: quantity,
				text: quantity,
				value: quantity,
			}
		}).slice(1);

		const handleQuantityChange = (_event, self) => {
			setQuantity(self.value);
		}

		const handleAddToCart = (_event, self) => {
			console.log(self);
		};

    return (
        <MainLayout>
            <Container>
                <Card fluid columns="equal">
                    <Card.Header><h3>{product.data.name}</h3></Card.Header>
                    <Card.Content>
                        <Grid divided="vertically">
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <ProductImageGallery></ProductImageGallery>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <ProductReviewContainer
                                        className={'product-review-container'}
                                        ></ProductReviewContainer>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={6}>
																	{ loading ? <Loader active/> : categoriesRender()}
                                </Grid.Column>
                            </Grid.Row>
														<Grid.Row>
															<Grid.Column width={4}>
																	<Form.Field>
																		<Dropdown fluid selection options={quantityOptions}
																			value={quantity} onChange={handleQuantityChange}
																		/>
																	</Form.Field>
																</Grid.Column>
                                <Grid.Column>
                                    <Button.Group>
                                        <Button onClick={handleAddToCart}>Add to Cart</Button>
                                        <Button>Add to Wishlist</Button>
                                    </Button.Group>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                        <div>$ {product.data.price} M.N</div>
                                        <br/>
                                        <div>
                                                {product.data.description}
                                        </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                </Card>
            </Container>
        </MainLayout>
    )
}