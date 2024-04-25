import React, { useState, useEffect } from 'react'
import Turnstone from 'turnstone'
import styles from '../css/Search.module.css'
import { supabase } from '../../helpers/supabaseClient'
import search_icon from '../../img/search-icon.svg'

function Search({ handleSelect, handleEnter }) {
    const [value, setValue] = useState('');
    const [listbox, setListbox] = useState({});
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetchAllData();
    }, []);

    async function fetchAllData() {
        const { data } = await supabase.from('parts').select();
        setAllData(data);
    }

    async function handleChange(query) {
        if (query === value) return;
        if (!query) return;

        setValue(query);
        query = query[0].toUpperCase() + query.slice(1);

        const listbox = {
            displayField: 'name',
            data: allData.filter(item => item.name.includes(query)),
            searchType: 'contains'
        }
        setListbox(listbox);
    }

    return (
        <div className={styles.searchbar}>
            <Turnstone
                debounceWait={10}
                id="search"
                styles={styles}
                listbox={listbox}
                listboxIsImmutable={false}
                matchText={true}
                maxItems={10}
                name="search"
                placeholder="Enter part name or number"
                typeahead={false}
                onChange={(query) => handleChange(query)}
                onSelect={(selectedItem, displayField) => handleSelect(selectedItem, displayField)}
                onEnter={(query, _) => handleEnter(query, _)}
            />
            <img src={search_icon} className={styles.icon} alt="search icon" />
        </div>
    )
}

export default Search;