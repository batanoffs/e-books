import { useState, ChangeEvent } from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { searchStyles, searchIconWrapperStyles, inputBaseStyles } from './appBarStyles'

const Search = styled('div')(searchStyles)
const SearchIconWrapper = styled('div')(searchIconWrapperStyles)
const StyledInputBase = styled(InputBase)(inputBaseStyles)

const SearchBar = () => {
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
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder='Търсене...'
				inputProps={{ 'aria-label': 'search' }}
				onChange={handleSearchInputChange}
				onKeyPress={handleKeyPress}
			/>
		</Search>
	)
}

export default SearchBar
