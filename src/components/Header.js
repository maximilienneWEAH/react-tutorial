 import SearchBox from "./SearchBox";
import Container from "./container";


const Header = () => {

  return (
    <div>
    <div className=" header">

      <div className="first">
        <h1> Riverside Flamez</h1>
        <p> Tuesday, 2 Feb 2021</p>
        <nav>
          <ul>
            <li>Hot Dishes</li>
            <li>cold Dishes</li>
            <li>Soup</li>
            <li>Grill</li>
            <li>Appetizer</li>
            <li>Dessert</li>
          </ul>
          </nav>
          </div>
          <div className="search">
      <SearchBox />
      </div>
    </div>
    <div className="tittle">
    <h1> choose Dishes</h1>
    </div>
      
        <div className='containers'>
          
      <Container>
            <img src='/images/image 4.png' alt='img1' width={100} />
            <h1> Spicy seasoned seafood noodles</h1>
            <h2>$2.29</h2>
            <p>20 Bowls available.</p>

          </Container>
          <Container >
          <img src='./images/images(1).png' alt='img1' width={100} />
            <h1> Salted Pasta with mushroom sauce</h1>
            <h2> $2.29</h2>
            <p> 11 Bowls available</p>
          </Container>
          <Container>
            <img src='/images/image 4.png' alt='img1' width={100} />
            <h1>Beef dumpling in hot and sour soup</h1>
            <h2>$ 2.99</h2>
            <p>16 Bowls available.</p>
          </Container> 
          <Container>
            <img src='/images/image 4.png' alt='img1' width={100} />
            <h1>Beef dumpling in hot and sour soup</h1>
            <h2>$ 2.99</h2>
            <p>16 Bowls available.</p>
          </Container>
          <Container>
            <img src='/images/image 4.png' alt='img1' width={100} />
            <h1>Healthy noodle with spinach leaf</h1>
            <h2>$ 3.29</h2>
            <p>22 Bowls available.</p>
          </Container>
          <Container>
            <img src='/images/image 4.png' alt='img1' width={100} />
            <h1>Hot spicy fried rice with omelet</h1>
            <h2>$ 3.49</h2>
            <p>13 Bowls available.</p>
          </Container>
          <Container>
            <img src='/images/image 4.png' alt='img1' width={100} />
            <h1>Spicy instant noodle with special omelette</h1>
            <h2>$ 3.59</h2>
            <p>17 Bowls available.</p>
          </Container>
          <Container>
            <img src='/images/image 4.png' alt='img1' width={100} />
            <h1>Spicy instant noodle with special omelette</h1>
            <h2>$ 3.59</h2>
            <p>17 Bowls available.</p>
          </Container>
        </div>
        </div>
  )

}
export default Header;