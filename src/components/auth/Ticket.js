import React from 'react'
import {connect} from 'react-redux'
import {startGetTicket,startRemoveTicket} from '../../actions/ticketAction'

class Ticket extends React.Component{
    constructor(props)
    
    {
        super(props)
     this.state={
            code:'',
            customer:'',
            department:'',
            employees:{},
            message:'',
            priority:''
        }
        }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            code:this.state.code,
            customer:this.state.customer,
            department:this.state.department,
            employees:[{employee:this.state.employees}],
            message:this.state.message,
            priority:this.state.priority
        }
        // console.log(formData)
          this.props.dispatch(startGetTicket(formData))
        this.setState({
            code:'',
            customer:'',
            department:'',
            employees:'',
            message:'',
            priority:''
        })

    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
   handlePriorityChange=(priority)=>{
       this.setState({priority})
   }
   handleRemove=(id)=>{
       const confirm=window.confirm("Are You Sure?")
       if(confirm){
        this.props.dispatch(startRemoveTicket(id))
       }
       
   }
   handleShow=(message)=>{
       alert(message)
   }
    
    render(){
        return(
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <td>Code</td>
                            <td>Customer</td>
                            <td>Department</td>
                            <td>Employees</td>
                            <td>Message</td>
                            <td>Priority</td>
                            <td>Actions</td>
                            <td>Remove</td>
                        </tr>
                    </thead>
                    <tbody>
                        
        {this.props.ticket.map((ele)=>{
            return(
            <tr>
            <td>{ele.code}</td>
            <td>{this.props.customer.map((cust)=>{
                return (ele.customer==cust._id)&&cust.name
            })}</td>
               
        <td>{this.props.department.map((dep)=>{
            return(ele.department==dep._id)&&dep.name
        })}</td>
            {ele.employees.map((jes)=>{
                return (
                    <td> {this.props.employee.map((emply)=>{
                        return (emply._id===jes._id)&& emply.name
                    })}</td>
                    )
            })}
            
            <td>{ele.message}</td>
            <td>{ele.priority}</td>
            <td><button onClick={()=>{
                this.handleShow(ele.message)
            }}>Show</button></td>
            <td><button onClick={()=>{
                this.handleRemove(ele._id)
                }}>Remove</button></td>
            </tr> 
           ) 
        })}
        
        
                    
          </tbody>

                </table>
                <h2>Create Ticket</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Code</label>
                <input type="text" name="code" value={this.state.code} onChange={this.handleChange}/><br/>
                <lable>Customer</lable>
                <select value={this.state.customer} name="customer" onChange={this.handleChange}><br/>
                    <option>select</option>
                    {this.props.customer.map((ele)=>{
                       return <option value={ele._id}>{ele.name}</option>
                    })}
                    
                </select><br/>
                <label>Department</label>
                <select value={this.state.department}name="department" onChange={this.handleChange}><br/>
                    <option value="select">Select</option>
                    {this.props.department.map((ele)=>{
                        return <option value={ele._id}>{ele.name}</option>
                    })}
                </select><br/>
                <lable>Employees</lable>
                <select value={this.state.employees} name="employees" onChange={this.handleChange}>
                  <option value="select">Select</option>
                  {this.props.employee.map((ele)=>{
                    return<option value={ele._id}>{ele.name}</option>

                  })}
                </select><br/>
                <textarea value={this.state.message} name="message" onChange={this.handleChange} ></textarea><br/>
                <label>Priority</label><br/>
                <input type="radio" name="priority" onChange={()=>{this.handlePriorityChange("high")}}/>High<br/>
                <input type="radio" name="priority" onChange={()=>{this.handlePriorityChange("medium")}}/>medium<br/>
                <input type="radio" name="priority" onChange={()=>{this.handlePriorityChange("low")}}/>Low<br/>


                <input type="submit"value="submit"/>

            </form>
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    console.log('j',props)
    return{
        customer:state.customer,
        department:state.department,
        employee:state.employee,
        ticket:state.ticket

    }
}
export default connect(mapStateToProps)(Ticket)