 import RightSidebar from "./RightSidebar";
import SearchBox from "./SearchBox";
import Container from "./container";


const Header = () => {

  return (
    <div className=" header">

      <div className="first">
        <h1> Riverside Flamez</h1>
        <p> Tuesday, 2 Feb 2021</p>
        </div>
        <div className='containers'>
          <Container>
            <img src='/images/image 4.png' alt='img1' width={100} />
            <h1>Hello World</h1>
            <p>This content is inside a container.</p>

          </Container>
          <Container >
          <img src='./images/images(1).png' alt='img1' width={100} />
            <h1> Spicy seasoned seafood noodles</h1>
            <h2> $2.29</h2>
            <p> 20 Bowls available</p>
          </Container>
          <Container>
            <img src='/images/image 4.png' alt='img1' width={100} />
            <h1>Hello World</h1>
            <p>This content is inside a container.</p>

          </Container> <Container>
            <img src='/images/image 4.png' alt='img1' width={100} />
            <h1>Hello World</h1>
            <p>This content is inside a container.</p>

          </Container>
        </div>
     <div className="search">
      <SearchBox />
      </div>
    </div>
  )

}
export default Header;