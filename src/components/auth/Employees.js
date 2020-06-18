import React from'react'
import {connect} from 'react-redux'
import {startGetEmployee,startRemoveEmployee} from '../../actions/employeeAction'
class Employee extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
        
        this.state={
            name:'',
            email:'',
            mobile:'',
            department:''
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
            this.props.dispatch(startGetEmployee(formData))
            
            this.setState({
            name:'',
            email:'',
            mobile:'',
            department:''
            })
            
        }
        
        handleShow=(name)=>{
          alert(name)
        }
        handleRemove=(id)=>{
            const confirm= window.confirm("Are you sure?")
            if(confirm){
                this.props.dispatch(startRemoveEmployee(id))
            }
            
            
        }
    render(){
        return(<div>
            <table border="1">
                <thead>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>mobile</td>
                        <td>department</td>
                        <td>Button-Handler</td>
                        
                    </tr>
                </thead>
                <tbody>
                    
                        {this.props.employee.map((ele)=>{
                            return(
                                <tr>
                                <td> {ele.name}</td>
                                <td> {ele.email}</td>
                                <td> {ele.mobile}</td>
                                <td>{this.props.department.map(dep => {
                      return(
                        (dep._id == ele.department._id) && dep.name
                      )
                    })}</td>

                                <button onClick={()=>{
                             this.handleShow(ele.name)
                          }}>show</button>||
                          <button onClick={()=>{
                              this.handleRemove(ele._id)
                          }}>remove</button>
                           
                                </tr>)
                        })}
                         
                    
                </tbody>
            </table>
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>
                <label>Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><br/>
                <label>Mobile</label>
                <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} /><br/>
                <label>Department</label>
                <select value={this.state.department} name="department" onChange={this.handleChange} > 
                    <option value="">---Select---</option>
                    <option>select</option>
                                        {
                                            this.props.department.map(dept=>{
                                                return (
                                                    <option key={dept._id} value={dept._id}>{dept.name}</option>
                                                )
                                            })
                                        }
                    
                    </select><br/>
                <input type="submit" value="Submit"/>
              
            </form>
        </div>)
    }
}
const mapStateToProps=(state)=>{
    console.log( 'from',state)
    return{
        department:state.department,
        employee:state.employee
    }
}

export default  connect(mapStateToProps)(Employee)