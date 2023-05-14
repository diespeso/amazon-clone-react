import { useDispatch, useSelector } from "react-redux"

import { loginUser } from "../store/user/user.thunks";

import { Container, Card, Button, Form, Grid } from "semantic-ui-react"
import { useState } from "react";
import { MainLayout } from "../layouts/MainLayot";

export const LoginView = () => {

    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({ email: '', password: '' });

    const handleChange = (_e, { name, value}) => {
        setInputs((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = () => {
        dispatch(loginUser(inputs));
    };

    return (
        <MainLayout>
            <Container style={{ margin: "5%" }}>
                <Card className="centered">
                    <Form onSubmit={handleSubmit} style={{ margin: "3%"}}>
                        <Form.Input 
                            label="E-mail"
                            name="email"
                            onChange={handleChange}
                        />
                        <Form.Input
                            label="Password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                        />
                        <Grid>
                            <Grid.Row centered columns={3}>
                                <Grid.Column style={{padding: 0, textAlign: 'center'}}><Button type="submit">Log In</Button></Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form>
                </Card>
            </Container>
        </MainLayout>
    )
}