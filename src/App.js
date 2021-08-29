/*eslint-disabled*/


import React, {useContext, useState} from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart.js';

export let infocontext = React.createContext();
// 같은 변수값을 사용할 범위를 생성해줌.


function App() {

  let[shoes, changeShoes] = useState(Data);
  let[info, info변경] = useState([10,8,20]);

  return (
    <div className="App">
      
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">VOGUE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as ={Link }to="/detail">Detail</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


<Switch>
{/* exact는 정확하게 맞으면 보여주세요 이런의미. */}
<Route exact path="/">

<div className="imagesize">
<div className="background">
  <Button variant ="primary" className=
  "learnMore">Learn More</Button>
  </div>
</div>


<div className="container">
{/* 범위를 context로 여기로 한정하겠습니다 감싼다. props를 마니 사용 ㄴㄴ 하고 */}
  <infocontext.Provider value={info}>
  <div className="row">
    {
      shoes.map((a, i)=>{
        return <Product shoes={shoes[i]} i={i} key={i}  />
      })
    }
  </div>
  </infocontext.Provider>

<button className="btn btn-primary" onClick={()=>{
  axios.get('https://codingapple1.github.io/shop/data2.json')
  .then((result)=>{
    changeShoes( [...shoes,...result.data] )
  })

  .catch(()=>{
    console.log('실패')
  })
}}>More</button> 
</div>
</Route>

<Route path="/detail/:id">
<infocontext.Provider value={info}>
<Detail shoes={shoes} info={info} info변경={info변경}/>
</infocontext.Provider>

</Route>

<Route path='/cart'>
  <Cart></Cart>
</Route>

</Switch>  
{/* switch는 중복출연을 막음, 맨 위에것만 보여준다고 생각하면댐*/}
</div>
  );
}



function Product(props) {
  let info = useContext(infocontext);
  let history=useHistory();
  return(
    <div className="col-md-4" onClick={()=>{ history.push('/detail/'+ props.shoes.id)}}>
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width="100%"/>
    <h4>{ props.shoes.title }</h4>
    <p>{ props.shoes.content } & { props.shoes.price } </p>
    <Stockinfo></Stockinfo>
    </div>
  )
}

function Stockinfo() {
  let info = useContext(infocontext);
  return <p> stock : {info[0]} </p>
}


export default App;
