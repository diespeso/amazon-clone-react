import { Container, Card, Loader, Dropdown } from "semantic-ui-react"
import { MainLayout } from "../layouts/MainLayot"

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getShoppingCartByUserId, setShoppingCartProductQuantity } from "../store/shoppingCart/shoppingCart.actions";


const MAX_AMOUNT = 30;

export const ShoppingCartView = () => {
    const dispatch = useDispatch();

    const shoppingCart = useSelector((state) => state.shoppingCart);
    const { loading } = shoppingCart;
    const products = shoppingCart.data.list;

    useEffect(() => {
        dispatch(getShoppingCartByUserId(1));
    }, []);

    const handleClickQuantity = (_ev, { value, ['product-id']: productId }) => {
        dispatch(setShoppingCartProductQuantity(productId, value))
    }

    const handleOnSelect = (_ev) => {

    }

    const renderShoppingCartProduct = () => (
        products.map((spProduct, i) => (
            <Card key={i} className={'centered'} style={{ width: '90%' }}>
                <div>Name: {spProduct.product.name}</div>
                <div>Price: {spProduct.product.price}</div>
                <Dropdown
                    text={spProduct.quantity}
                    style={{width: '36px', backgroundColor: 'lightgreen', margin: '10px'}}>
                    <Dropdown.Menu>
                        {[...Array(MAX_AMOUNT)].map((_, _i) => (<Dropdown.Item // TODO: no permitir 0
                            key={_i + 1}
                            text={(_i + 1).toString()}
                            value={_i + 1}
                            onClick={handleClickQuantity}
                            product-id={spProduct.product.id}
                            active
                        ></Dropdown.Item>))}
                    </Dropdown.Menu>
                </Dropdown>
            </Card> 
        ))
    );

    return (
        <MainLayout>
            <Container>
                { loading ? <Loader active /> : renderShoppingCartProduct() }
            </Container>
        </MainLayout>
    )
}