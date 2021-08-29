import React, {useContext, useEffect, useState} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import infocontext from './App.js';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
import { connect} from 'react-redux'


// 위에 보면 import styled-component를 통해서
// box라는 컴포넌트를 만든거임. 근데 css를 입힌거지
let box = styled.div`
 padding: 20px;
`;

let 제목 = styled.h4`
font-size: 24px;
color: ${ props => props.color }
`;

function Detail(props) {

  let [alert, chalert] =useState(true);
  let [inputData, chinputData] = useState();
  let info = useContext(infocontext);
  let [tab,changetab] = useState(0);
  let [animation,chanimation] = useState(false);


useEffect(()=>{
   let 타이머=
  //2초후에 alert창 없애는 코드, 몇 초후에 코드실행은 setTimeout
 setTimeout(()=>{chalert(false)
},2000);
return ()=> { clearTimeout(타이머)}
// return function 실행(){실행할코드}  return을 이용하면 저게 없어질때 실행한다는거임.
// 여기서 clearTimeout을 쓰는건 setTimeout에서 2초전에 내가 화면을 옮겨버리면 나중에 문제발생할 수 있어서 그거를 방지하고자 
// 내가 return시 없어질때 혹은 화면을 나갈때 타임아웃을 clear해주세요 라고 하는 거다.
},[]);
//마지막[]는 조건인데 저기의 조건에 맞을때 실행이된다
//그리고 저기에 []만 놓게되면 Detail이 딱 등장할때한번만 실행이 된다는 의미 일종의 트릭느낌

useEffect(()=>{
  var arr = localStorage.getItem('watched');
  if(arr==null) { arr=[]} else {arr = JSON.parse(arr)}
  
  arr.push(id);
  arr = new Set(arr);
  arr = [...arr];

  localStorage.setItem('watched',JSON.stringify(arr));
},[]);



let {id} = useParams();
let history = useHistory();
let findProduct = props.shoes.find(function(products){
    return products.id==id
});


    return(
      <div className="container">
          <box>
            <제목 className="red"> Detail </제목>
          </box>


          {inputData}
          <input onChange={(e)=>{ chinputData(e.target.value) }}/>


          {
            alert === true 
            ?  (<div className="my-alert2" id="remove">
               <p>Low in stock</p>
               </div>)
            :  null
          }

         

        <div className="row">
          <div className="col-md-6">
            <img src= 'https://codingapple1.github.io/shop/shoes1.jpg'  width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{findProduct.title}</h4>
            <p>{findProduct.content}</p>
            <p>{findProduct.price}</p>
            <Info info={props.info} info변경={props.info변경}></Info>

            <button className="btn btn-danger" onClick={()=>{
              let stockShoes = [...props.info]
              stockShoes = [props.info[0]-1,8,20]
              props.info변경(stockShoes);
              props.dispatch({type:'항목추가', payload: {id:findProduct.id, name:findProduct.title , quan:5}});
              history.push('/cart');
            }}>Order</button> 
            &nbsp;
            <button className="btn btn-danger" onClick={()=>{
                history.goBack(); 
            }}>Back</button> 
          </div>
        </div>

<Nav  className="mt-5" variant="tabs" defaultActiveKey="link-0">
  <Nav.Item>
    <Nav.Link eventKey="link-0" onClick={()=>{ chanimation(false);
      changetab(0)
    }}>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" onClick={()=>{ chanimation(false);
      changetab(1)
    }}>Option 2</Nav.Link>
  </Nav.Item>
</Nav>

<CSSTransition in={animation} classNames="wow" timeout={500}>
<TabContent tab={tab} chanimation={chanimation}/>
</CSSTransition>

  </div> 
    )
  }

  function TabContent(props) {

    useEffect(()=>{
      props.chanimation(true)
    })

   if(props.tab===0) { 
   return <div>0</div>
   } else if (props.tab===1) {
     return <div>1</div>
    } else if(props.tab===2) {
      return <div>2</div>
      }

  }

  function Info(props) {
    return(
    <p>재고: {props.info[0]} </p>
    )
  }

function state를prop화(state){
  return{
    state : state.reducer,
     alert : state.reducer2
  }
}

  export default connect (state를prop화)(Detail)