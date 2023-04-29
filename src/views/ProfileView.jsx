import { Card, CardContent, Container } from "semantic-ui-react"
import { useSelector } from "react-redux"

export const ProfileView = () => {

    const userState = useSelector((state) => state.user);

    console.log(userState);
    
    return (
        <div>
            <Container>
                <Card className="centered">
                    <CardContent>This is the user</CardContent>
                </Card>
            </Container>
        </div>
    )
}