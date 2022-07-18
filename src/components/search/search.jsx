import {useState} from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({onSearchChange}) => {

        const [search, setSearch] = useState(null);

        const handleSearchChange = (searchData) => {
            setSearch(searchData);
            onSearchChange(searchData);
        }

    return (
        <AsyncPaginate
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={handleSearchChange}
        />
    );
}

export default Search;