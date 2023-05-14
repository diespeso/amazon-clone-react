import { Container, Header, Card, Grid, Button } from "semantic-ui-react";
import { MainLayout } from "../layouts/MainLayot";
import { ProductImageGallery } from "../components/product/ProductImageGallery";
import { ProductReviewContainer } from "../components/product/ProductReviewContainer";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../store/product/product.thunks";
import { useEffect } from "react";

import './productView.css';

export const ProductView = () => {

    const dispatch = useDispatch();
    const { product_id } = useParams();
    const product = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProductById(product_id)); //testing
    }, []);
    
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
                                    <ProductReviewContainer className={'product-review-container'}></ProductReviewContainer>
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
                            <Grid.Row>
                                <Grid.Column>
                                    <Button.Group>
                                        <Button>Add to Cart</Button>
                                        <Button>Add to Wishlist</Button>
                                    </Button.Group>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                </Card>
            </Container>
        </MainLayout>
    )
}