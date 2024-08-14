// SearchBar.tsx
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { searchStyles, searchIconWrapperStyles, inputBaseStyles } from './appBarStyles'

const Search = styled('div')(searchStyles)
const SearchIconWrapper = styled('div')(searchIconWrapperStyles)
const StyledInputBase = styled(InputBase)(inputBaseStyles)

const SearchBar = ({ handleSearchInputChange }) => {
	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder='Търсене...'
				inputProps={{ 'aria-label': 'search' }}
				onChange={handleSearchInputChange}
			/>
		</Search>
	)
}

export default SearchBar
