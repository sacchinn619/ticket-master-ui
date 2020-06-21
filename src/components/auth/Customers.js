import React from 'react'
import {connect} from 'react-redux'
import {startGetCustomer, startRemoveCustomer} from '../../actions/customerAction'


 class Customer extends React.Component{
     constructor(props){
         super(props)
         console.log(this.props.customer,'here')
         this.state={
             name:'',
             email:'',
             mobile:''
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
         this.setState({
             name:'',
             email:'',
             mobile:''

         })
          this.props.dispatch(startGetCustomer(formData))
          }
          handleShow=(id)=>{
              this.props.history.push(`/customer/${id}`)
          }
          handleRemove=(id)=>{
             const confirm= window.confirm('Are you sure?')
          if(confirm){
            // alert(id)
            this.props.dispatch(startRemoveCustomer(id))
          } 
        }
        handleEdit=(id)=>{
            this.props.history.push(`customer/edit/${id}`)
        }
        
          
        render(){
         return(<div>
             <h2>Add Customer</h2>
             {Object.keys(this.props.customer).length!==0 &&
             <table border="1">
                 <thead>
                     <tr>
                         <td>name</td>
                         <td>email</td>
                         <td>mobile</td>
                         <td>button</td>
                     </tr>
                 </thead>
                 <tbody>
                     
                     
                 
                     {this.props.customer.map((ele)=>{
                         return (
                            <tr>
                         <td>{ele.name}</td>
                         <td>{ele.email}</td>
                         <td>{ele.mobile}</td>
                          <button onClick={()=>{
                             this.handleShow(ele._id)
                          }}>show</button>||
                          <button onClick={()=>{
                              this.handleRemove(ele._id)
                          }}>remove</button>
                          <button onClick={()=>{
                              this.handleEdit(ele._id)
                          }}>Edit</button>
                         </tr>
                         )
                        
                           })}
                
                 
                </tbody>
             </table> }
             <form onSubmit={this.handleSubmit}>
                 <label>Name</label>
                 <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                 <label>Email</label>
                 <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                 <lable>Mobile</lable>
                 <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange}/><br/>
                 <input type="submit" value="Submit"/>

             </form>
         </div>)
     }
 }
 
 


 const mapStateToProps=(state,props)=>{
     console.log('props',props)
return{
    customer:state.customer,
    
    
 }
}

 export default connect(mapStateToProps)(Customer)