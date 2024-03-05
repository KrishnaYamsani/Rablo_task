import React, { useState } from "react";

function Searchbar({filter}){

    const [search,setSearch] = useState("");

    function handleChange(e){
        let value = e.target.value;
        setSearch(value);
    }

    return (
        <div className="searchbar">
            <div className="input-group input-group-sm flex-nowrap mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    value={search} 
                    placeholder="Enter id.." 
                    aria-label="Enter id" 
                    aria-describedby="basic-addon2" 
                    onChange={handleChange}
                />
                <button 
                    className="input-group-text" 
                    id="basic-addon2" 
                    onClick={() => {
                        filter(search);
                    }}>Search</button>
            </div>
        </div>
    )
}

export default Searchbar;