import React from 'react'
import { Form, Input, Button } from '../styles/UserListStyles'

const UserForm = ({ handleSubmit, handleChange, newUser, editingUser }) => (
	<Form onSubmit={handleSubmit}>
		<Input
			type="text"
			name="name"
			placeholder="Name"
			value={newUser.name}
			onChange={handleChange}
			required
		/>
		<Input
			type="email"
			name="email"
			placeholder="Email"
			value={newUser.email}
			onChange={handleChange}
			required
		/>
		<Input
			type="tel"
			name="phone"
			placeholder="Phone"
			value={newUser.phone}
			onChange={handleChange}
			required
		/>
		<Button type="submit">
			{editingUser ? 'Update User' : 'Add User'}
		</Button>
	</Form>
)

export default UserForm
