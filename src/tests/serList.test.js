import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UserList from '../components/UserList'

describe('UserList Component', () => {
	test('renders UserList component', async () => {
		render(<UserList />)
		expect(screen.getByText('User List')).toBeInTheDocument()
	})

	test('adds a new user', async () => {
		render(<UserList />)

		fireEvent.change(screen.getByPlaceholderText('Name'), {
			target: { value: 'John Doe' },
		})
		fireEvent.change(screen.getByPlaceholderText('Email'), {
			target: { value: 'john@example.com' },
		})
		fireEvent.change(screen.getByPlaceholderText('Phone'), {
			target: { value: '1234567890' },
		})
		fireEvent.click(screen.getByText('Add User'))

		expect(screen.getByText('John Doe')).toBeInTheDocument()
		expect(screen.getByText('john@example.com')).toBeInTheDocument()
		expect(screen.getByText('1234567890')).toBeInTheDocument()
	})

	test('deletes a user', async () => {
		render(<UserList />)

		fireEvent.change(screen.getByPlaceholderText('Name'), {
			target: { value: 'John Doe' },
		})
		fireEvent.change(screen.getByPlaceholderText('Email'), {
			target: { value: 'john@example.com' },
		})
		fireEvent.change(screen.getByPlaceholderText('Phone'), {
			target: { value: '1234567890' },
		})
		fireEvent.click(screen.getByText('Add User'))

		expect(screen.getByText('John Doe')).toBeInTheDocument()

		fireEvent.click(screen.getByText('Delete'))

		expect(screen.queryByText('John Doe')).not.toBeInTheDocument()
	})
})
