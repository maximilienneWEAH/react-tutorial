import './App.css';


const menu = () => {

    const items = [
        'Hot Dishes',
        'cold Dishes',
        'Soup',
        'Grill',
        'Appetizer',
        'Dessert',
    ];
    return (
        <div className="menu">
            <ul className= "List-group">
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            
        </div>
    )
}
export default menu;