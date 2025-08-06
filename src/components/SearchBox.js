import React from "react";

 
    const SearchBox = (props) => {
    return (

        <div className = "col col-sm-4">
             <input className="form-control"
              value={props.value} 
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder="🔍  search for food,cofee..."
                style={{color: 'white', width: '300px', height: '40px', fontSize: '16px', background: '#1d1c27', borderRadius: '10px', }}
              ></input>
            </div>
            
    );
};


export default SearchBox;