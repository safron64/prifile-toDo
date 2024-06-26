import React from 'react'
import { useUsers } from '../hooks/useUsers'
import UserCard from './UserCard'
import UserForm from './UserForm'
import Pagination from './Pagination'
import { Container, ErrorMessage } from '../styles/UserListStyles'

const UserList = () => {
	const {
		users,
		error,
		currentPage,
		handleChange,
		usersPerPage,
		handleDelete,
		handleSubmit,
		handleEdit,
		paginate,
		newUser,
		editingUser,
	} = useUsers()

	const indexOfLastUser = currentPage * usersPerPage
	const indexOfFirstUser = indexOfLastUser - usersPerPage
	const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

	return (
		<Container>
			<h1>User List</h1>
			{error && <ErrorMessage>{error}</ErrorMessage>}
			<UserForm
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				newUser={newUser}
				editingUser={editingUser}
			/>
			{currentUsers.map(user => (
				<UserCard
					key={user.id}
					user={user}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
				/>
			))}
			<Pagination
				totalUsers={users.length}
				usersPerPage={usersPerPage}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</Container>
	)
}

export default UserList
