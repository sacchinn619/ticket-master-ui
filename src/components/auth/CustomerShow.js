import React from 'react'
import {connect} from 'react-redux'


function CustomerShow(props){

  
    
    return(
    <div>
        {props.customer && (
            <div>
            <h2> Name:{props.customer.name}<br/>Email:{props.customer.email}<br/>Mobile:{props.customer.mobile}</h2>
            </div>
        )}
         
    </div> 
    )
       
       
    
  }


const mapStateToProps = (state, props) => {
   return {
    customer: state.customer.find((ele)=>{
        return ele._id==props.match.params.id
    })
   
  }
}

export default connect(mapStateToProps)(CustomerShow)