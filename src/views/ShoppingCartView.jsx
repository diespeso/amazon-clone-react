import { Container, Card } from "semantic-ui-react"
import { MainLayout } from "../layouts/MainLayot"


export const ShoppingCartView = () => {

    return (
        <MainLayout>
            <Container>
                <Card>
                    <Card>Test 1</Card>
                    <Card>Test 2</Card>
                </Card>
            </Container>
        </MainLayout>
    )
}