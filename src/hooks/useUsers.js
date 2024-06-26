import { useState, useEffect } from 'react'
import axios from 'axios'

export const useUsers = () => {
	const [users, setUsers] = useState([])
	const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' })
	const [error, setError] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [editingUser, setEditingUser] = useState(null)
	const usersPerPage = 5

	useEffect(() => {
		fetchUsers()
	}, [])

	const fetchUsers = async () => {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users'
			)
			setUsers(response.data)
		} catch (error) {
			setError('Failed to fetch users')
		}
	}

	const handleDelete = id => {
		setUsers(users.filter(user => user.id !== id))
	}

	const handleChange = e => {
		const { name, value } = e.target
		setNewUser({ ...newUser, [name]: value })
		if (editingUser) {
			setEditingUser({ ...editingUser, [name]: value })
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (editingUser) {
			const updatedUsers = users.map(user =>
				user.id === editingUser.id ? editingUser : user
			)
			setUsers(updatedUsers)
			setEditingUser(null)
		} else {
			const user = { ...newUser, id: Date.now() }
			setUsers([user, ...users])
		}
		setNewUser({ name: '', email: '', phone: '' })
	}

	const handleEdit = user => {
		setEditingUser(user)
		setNewUser(user)
	}

	const paginate = pageNumber => setCurrentPage(pageNumber)

	return {
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
		setNewUser,
		editingUser,
		setEditingUser,
	}
}
