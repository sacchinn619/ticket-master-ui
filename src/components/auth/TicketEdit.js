import React from 'react'
import {connect} from 'react-redux'
import {startEditTicket} from '../../actions/ticketAction'

class TicketEdit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            code:this.props.ticket ?.code,
            customer:'',
            department: '',
            employees:'',
            message:this.props.ticket?.message,
            priority:this.props.ticket ?.priority

        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handlePriorityChange=(priority)=>{
        this.setState({priority})
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
    const redirect=()=>{
        this.props.history.push('/tickets')
    }
    console.log(formData)
    this.props.dispatch(startEditTicket(formData,this.props.match.params.id))
    redirect()
   
    }
    
    
    render(){
         return(
        <div>
           <form onSubmit={this.handleSubmit}>
               <label>Code</label><br/>
              <input type="text" name="code" value={this.state.code} onChange={this.handleChange}/><br/>
              <lable>Customer</lable><br/>
        <select value={this.state.customer} name="customer" onChange={this.handleChange}><br/>
        <option>select</option>
         {this.props.customer.map((ele)=>{
            return <option value={ele._id}>{ele.name}</option>  
         })}
         </select><br/>
         <lable>Department</lable><br/>
         <select value={this.state.department} name="department" onChange={this.handleChange}>
             <option>select</option>
         {this.props.department.map((ele)=>{
             return <option value={ele._id}>{ele.name}</option>
         })} </select><br/>
         <lable>Employees</lable><br/>
         <select value={this.state.employees} name="employees" onChange={this.handleChange}>
             <option>select</option>
         {this.props.employee.map((ele)=>{
             return<option value={ele._id}>{ele.name}</option> 
         })}
         </select><br/>

         <lable>Message</lable><br/>
              <textarea value={this.state.message} name="message" onChange={this.handleChange}></textarea><br/>
              <label>Priority</label><br/>
                <input type="radio" name="priority" onChange={()=>{this.handlePriorityChange("high")}}/>High<br/>
                <input type="radio" name="priority" onChange={()=>{this.handlePriorityChange("medium")}}/>medium<br/>
                <input type="radio" name="priority" onChange={()=>{this.handlePriorityChange("low")}}/>Low<br/>  
       <input type="Submit" value="Update"/> 
           </form>
        </div>
    )
}
}
const mstp=(state, props)=>{
    console.log(props)
return{
    ticket:state.ticket.find((ele)=>{
        return ele._id==props.match.params.id
    }),
    customer:state.customer,
    department:state.department,
    employee:state.employee,
    

}
}
export default connect (mstp)(TicketEdit)