import React from 'react'
import { PaginationContainer, PageButton } from '../styles/UserListStyles'

const Pagination = ({ totalUsers, usersPerPage, paginate, currentPage }) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<PaginationContainer>
			{pageNumbers.map(number => (
				<PageButton
					key={number}
					onClick={() => paginate(number)}
					disabled={currentPage === number}
				>
					{number}
				</PageButton>
			))}
		</PaginationContainer>
	)
}

export default Pagination
