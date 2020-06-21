import React from 'react'
import {connect} from 'react-redux'
import {startEditCustomer} from '../../actions/customerAction'

class CustomerEdit extends React.Component{
constructor(props)
{
        super(props)
        this.state={
            name:  this.props.customer.name,
            email: this.props.customer.email,
            mobile: this.props.customer.mobile
        }
    }
    handleChange=(e)=>{
     this.setState({
         [e.target.name]:e.target.value
     })
    }
    handleSubmit=(e)=>{
       e.preventDefault()
       const formData={
           name:this.state.name,
           email:this.state.email,
           mobile:this.state.mobile
    }
    const redirect=()=>{
        this.props.history.push('/customers')
    }
    this.props.dispatch(startEditCustomer(formData,this.props.customer._id))
    redirect()
    console.log('hi',this.props.customer)
    
    
   }
    render(){
        return(
            <div>
                
                
                <form onSubmit={this.handleSubmit}>
                    <lable>name</lable>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                    <lable>email</lable>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                    <lable>mobile</lable>
                    <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange}/><br/>
                    <input type="submit" value="Update"/>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state, props)=>{
    // console.log(props)
return{
    customer:state.customer.find((ele)=>{
        return ele._id==props.match.params.id  
//*Will return the customer object witin the customers array that matches the ID from the find function//*
        
    })
    
    }
    
}

  
export default connect(mapStateToProps)(CustomerEdit)