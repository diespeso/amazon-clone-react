import { useDispatch, useSelector } from "react-redux"

import { loginUser } from "../store/user/user.thunks";

import { Container, Card, Button, Form, Grid } from "semantic-ui-react"
import { useState } from "react";

export const LoginView = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // todo usar el slice

    const dispatch = useDispatch();

    const onSubmitLogin = (_, element) => {
        console.log(email, password);
        dispatch(loginUser({ email, password })).then((res) => console.log(res));
    }

    return (
        <div>
            <Container style={{ margin: "5%" }}>
                <Card className="centered">
                    <Form onSubmit={onSubmitLogin} style={{ margin: "3%"}}>
                        <Form.Input 
                            label="E-mail"
                            onChange={ (_, { value}) => setEmail(value) }
                        />
                        <Form.Input
                            label="Password"
                            onChange={ (_, { value }) => setPassword(value) }
                            type="password"
                        />
                        <Grid>
                            <Grid.Row centered columns={3}>
                                <Grid.Column style={{padding: 0, textAlign: 'center'}}><Button type="submit">Log In</Button></Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form>
                </Card>
            </Container>
        </div>
    )
}