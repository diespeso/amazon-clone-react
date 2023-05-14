import {
    Card, CardContent, Container,
    Button, Checkbox, Form, List,
	Image,
} from "semantic-ui-react";
import { useSelector } from "react-redux";
import { MainLayout } from "../layouts/MainLayot";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { loginUser } from "../store/user/user.thunks";

export const ProfileView = () => {

	const user = useSelector((state) => state.user);

	return (
		<MainLayout>
			<Container>
				<Card className="centered">
					<CardContent>
						<Image src={user.profilePicture.src} className="profileImageBig"/>
						<List>
							<List.Item>
								<List.Content>E-mail: {user.email}</List.Content>
							</List.Item>
							<List.Item>
								<List.Content>Name: {user.name}</List.Content>
							</List.Item>
						</List>
					</CardContent>
				</Card>
			</Container>
		</MainLayout>
	)
}