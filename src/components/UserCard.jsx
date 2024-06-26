import React from 'react'
import {
	UserCardContainer,
	UserDetails,
	Button,
	FlexBtn,
} from '../styles/UserListStyles'

const UserCard = ({ user, handleDelete, handleEdit }) => (
	<UserCardContainer>
		<UserDetails>
			<h3>{user.name}</h3>
			<p>{user.email}</p>
			<p>{user.phone}</p>
		</UserDetails>
		<FlexBtn>
			<Button onClick={() => handleEdit(user)}>Edit</Button>
			<Button onClick={() => handleDelete(user.id)}>Delete</Button>
		</FlexBtn>
	</UserCardContainer>
)

export default UserCard
