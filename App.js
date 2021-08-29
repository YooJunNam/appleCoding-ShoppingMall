
/*eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

let [글제목,글제목변경] = useState(['남자 겉옷 추천','남자 상의 추천','남자 하의 추천']);
let [따봉, 따봉변경] =useState(0);
let [modal, modal변경] = useState(false);
let [subBtn, changesubBtn] = useState(0);
let [inputValue, chinputValue] = useState('');


function 제목변경() {
  var newArray = [...글제목];
  newArray[0] = '여자 코트 추천';
  글제목변경(newArray);

}


  return (
    <div className="App"> 
     <div className="black-nav">
       <div>개발 Blog <button onClick={ 제목변경 }>Woman version</button></div>
     </div>
     
   
   
    { 
    
     글제목.map(function(n,i) {
       return (
       <div className="list" key={i}>
              <h3 onClick = {()=>{changesubBtn(i)}}> { n } <span onClick= {()=>{따봉변경(따봉+1)} }>👍</span> {따봉} </h3>
              <p> 2월 19일 발행</p>
              <hr/>
              </div>
       )
     })
    }

    <div className='publish'>
      <input onChange={ (e)=>{chinputValue(e.target.value)} }/>
      <button onClick ={()=>{
        var copyArray = [...글제목];
        copyArray.unshift(inputValue); 
        글제목변경( copyArray )
      } }>저장</button>
    </div>





{/* 
    {inputValue}
    <input onChange={ (e)=>{ chinputValue(e.target.value) } } /> */}


    <button onClick ={ ()=>{modal변경(!modal)}}>Modal</button>
    
    {
        modal === true
        ? <Modal 글제목={글제목} subBtn={subBtn} ></Modal>
        : null
    }
  
    </div>
  );
  }

  function Modal(props) {
    return(
      
      <div className="modal">
      <h2>{ props.글제목[props.subBtn] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
      
    )
  }

 
export default App;
