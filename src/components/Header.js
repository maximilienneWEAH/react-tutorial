import react from "react";
import SearchBox from "./SearchBox";


const Header = () =>{
    
    return(
        <div className=" header">
            <div className="first">
            <h1> Riverside Flamez</h1>
            <p> Tuesday, 2 Feb 2021</p>
            </div>
            <div className="menu">
            <ul>
                <li> Hot Dishes</li>
                <li> cold Dishes</li>
                <li>Soup</li>
                <li>Grill</li>
                <li>Appetizer</li>
                <li>Dessert</li>
            </ul>
            </div>
            <SearchBox />
        </div>
    )

}
export default Header;