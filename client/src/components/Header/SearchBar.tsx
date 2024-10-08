import { useState, ChangeEvent } from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { searchStyles, searchIconWrapperStyles, inputBaseStyles } from './appBarStyles'

const Search = styled('div')(searchStyles)
const SearchIconWrapper = styled('div')(searchIconWrapperStyles)
const StyledInputBase = styled(InputBase)(inputBaseStyles)

export const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleSearch()
		}
	}
	const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	const handleSearch = async () => {
		// TODO: Add search functionality
	}

	return (
		<Search color='primary'>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				color='primary'
				placeholder='Търсене...'
				inputProps={{ 'aria-label': 'search' }}
				onChange={handleSearchInputChange}
				onKeyDown={handleKeyPress}
			/>
		</Search>
	)
}
