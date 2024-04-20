import React, { useState } from 'react'
import Turnstone from 'turnstone'
import styles from '../css/Search.module.css'
import { supabase } from '../../helpers/supabaseClient'
import search_icon from '../../img/search-icon.svg'

function Search({ handleSearch }) {
    const [value, setValue] = useState('');
    const [listbox, setListbox] = useState({});

    async function handleChange(query) {
        if (query === value) return;
        
        setValue(query);
        const { data } = await supabase.from('car_parts').select().ilike('name', `%${query}%`);
        const listbox = {
            displayField: 'name',
            data: data,
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
                listboxIsImmutable={true}
                matchText={true}
                maxItems={10}
                name="search"
                placeholder="Enter part name or number"
                typeahead={false}
                onChange={(query) => handleChange(query)}
                onSelect={(selectedItem) => handleSearch(selectedItem)}
                onEnter={(query) => handleSearch(query)}
            />
            <img src={search_icon} className={styles.icon} alt="search icon" />
        </div>
    )
}

export default Search;