import {useState} from "react";

const Search = ({onSearchChange}) => {
        const [search, setSearch] = useState(null);

        const handleChange = (searchData) => {
            setSearch(searchData);
            onSearchChange(searchData);
        }

    return (
        <AsyncPaginate
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
        />
    );
}

export default Search;