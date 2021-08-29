import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
    return(
       
            <div>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>상품명</th>
        <th>수량</th>
        <th>변경</th>
      </tr>
    </thead>
    <tbody>
        {
        props.state.map((a,i)=>{
            return(
             <tr key={i}>
             <td>{ a.id }</td>
             <td>{ a.name }</td>
             <td>{ a.quan }</td>
             <td><button onClick={()=>{ props.dispatch({type:'수량증가', payload: a.id }) }}>+</button>
             <button onClick={()=>{ props.dispatch({ type:'수량감소', payload: a.id}) }}>-</button></td>
         </tr>
            )
        })
    }
     
    </tbody>
  </Table>
{ props.alert ===true 
?(
  <div className="my-alert2">
      <p>Don't miss the chance !</p>
      <button onClick={()=>{ props.dispatch({type:'close'}) }}>close</button>
  </div>)
  : null
}
</div>
        
)
}

function state를props화(state){
 return {
     state : state.reducer,
     alert : state.reducer2
 }
}

export default connect(state를props화)(Cart)

// export default Cart;

