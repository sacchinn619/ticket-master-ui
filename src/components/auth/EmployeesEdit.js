import React from 'react'
import {connect} from 'react-redux'
import {startEditEmployee} from '../../actions/employeeAction'
class EmployeesEdit extends React.Component{
   constructor(props){
       super(props)
       this.state={
        name:this.props.employee && this.props.employee.name,
        email:this.props.employee && this.props.employee.email,
        mobile:this.props.employee && this.props.employee.mobile,
        department:this.props.employee && this.props.employee.department.name
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
           mobile:this.state.mobile,
           department:this.state.department
           
       }
      const redirect=()=>{
           this.props.history.push('/employees')
       }
    //    console.log(formData)
       this.props.dispatch(startEditEmployee(formData,this.props.match.params.id))
       redirect()

   }
   
   
   
   
   
    render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>
                <label>Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><br/>
                <label>Mobile</label>
                <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} /><br/>
                <label>Department</label>
                <select value={this.state.department} name="department" onChange={this.handleChange}>
                    <option value="">--select--</option>
                    {this.props.department.map((ele)=>{
                        return<option value={ele._id}>{ele.name}</option>
                    })}
                </select>
                <input type="submit" value="update"/><br/>
        </form>
    )
   } 
}
const mapStateToProps=(state,props)=>{
    console.log(props)
return{
    employee:state.employee.find((ele)=>{
        return ele._id==props.match.params.id   //returns {employee1 details} 
    }),
    department:state.department
    
}
}
export default  connect(mapStateToProps)(EmployeesEdit)