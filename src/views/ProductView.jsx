import { Container, Header, Card, Grid } from "semantic-ui-react";
import { MainLayout } from "../layouts/MainLayot";
import { ProductImageGallery } from "../components/product/ProductImageGallery";

export const ProductView = () => {

    const mock = {
        images: ['https://placebear.com/200/200', 'https://placebear.com/300/300']
    }
    
    return (
        <MainLayout>
            <Container>
                <Card fluid columns="equal">
                    <Card.Header>Product Name</Card.Header>
                    <Card.Content>
                        <Grid divided="vertically">
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <ProductImageGallery images={mock.images}></ProductImageGallery>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Container style={{backgroundColor: 'red', height: '40vh'}}>
                                        test
                                    </Container>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column width={10}>$65.00 M.N.</Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                </Card>
            </Container>
        </MainLayout>
    )
}