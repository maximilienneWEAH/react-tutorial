import React from 'react';
import Container from './components/container';
import Sidebar from './sidebar';
import SearchBox from './components/SearchBox';
import './App.css';

function App() {
  return (
    <> <div style={{
      paddingTop: 100,
      display: 'flex',

    }}>

    </div>
    <SearchBox />
    <Sidebar/>
      <Container>
      <img src='/images/image 4.png' alt='img1' width={100}/>
        <h1 style={{ fontSize: '20px',}}>Hello World</h1>
        <p>This content is inside a container.</p>
        
      </Container>

      <Container style={{
        maxWidth: '180px',
        maxHeight: 273,
        margin: '0 auto',
        paddingTop: '120px',
        backgroundColor: 'darkblue',

      }}>
        <h1 style={{
          fontSize: '20px',
        }}> Spicy seasoned seafood noodles</h1>
        <h2> $2.29</h2>
        <p> 20 Bowls available</p>
      </Container>
      <Container style={{
        maxWidth: '180px',
        maxHeight: 273,
        margin: '0 auto',
        paddingTop: '120px',
        backgroundColor: 'darkblue',

      }}>
        <h1 style={{
          fontSize: '15px',
          alignItems: 'center',
        }}> Spicy seasoned seafood noodles</h1>
        <h2> $2.29</h2>
        <p> 20 Bowls available</p>

      </Container>
      <Container style={{
        maxWidth: '180px',
        maxHeight: 273,
        margin: '0 auto',
        paddingTop: '120px',
        backgroundColor: 'darkblue',

      }}>
        <h1 style={{
          fontSize: '15px',
        }}> Spicy seasoned seafood noodles</h1>
        <h2> $2.29</h2>
        <p> 20 Bowls available</p>

      </Container>
      <Container style={{
        maxWidth: '180px',
        maxHeight: 273,
        margin: '0 auto',
        paddingTop: '120px',
        backgroundColor: 'darkblue',

      }}>
        <h1 style={{
          fontSize: '15px',
        }}> Spicy seasoned seafood noodles</h1>
        <h2> $2.29</h2>
        <p> 20 Bowls available</p>

      </Container>
      <Container style={{
        maxWidth: '180px',
        maxHeight: 273,
        margin: '0 auto',
        paddingTop: '120px',
        backgroundColor: 'darkblue',

      }}>
        <h1 style={{
          fontSize: '15px',
        }}> Spicy seasoned seafood noodles</h1>
        <h2> $2.29</h2>
        <p> 20 Bowls available</p>

      </Container>
      <Container style={{
        maxWidth: '180px',
        maxHeight: 273,
        margin: '0 auto',
        paddingTop: '120px',
        backgroundColor: 'darkblue',

      }}>
        <h1 style={{
          fontSize: '15px',
        }}> Spicy seasoned seafood noodles</h1>
        <h2> $2.29</h2>
        <p> 20 Bowls available</p>

      </Container>
      <Container style={{
        maxWidth: '180px',
        maxHeight: 273,
        margin: '0 auto',
        paddingTop: '120px',
        backgroundColor: 'darkblue',

      }}>
        <h1 style={{
          fontSize: '15px',
        }}> Spicy seasoned seafood noodles</h1>
        <h2> $2.29</h2>
        <p> 20 Bowls available</p>

      </Container>
      


    </>
  );
}
export default App;