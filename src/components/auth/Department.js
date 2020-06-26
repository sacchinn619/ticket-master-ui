import React from 'react'
import {connect} from 'react-redux'
import {startGetDepartment, startRemoveDepartment} from '../../actions/departmentAction'

class Department extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            name:''
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
            name:this.state.name
        }
        // console.log(formData)
        this.setState({
            name:''
        })
        this.props.dispatch(startGetDepartment(formData))
    }
    handleShow=(name)=>{
        alert(name)
    }
    handleRemove=(id)=>{
         const confirm=window.confirm('Are you Sure')
         if (confirm){
            this.props.dispatch(startRemoveDepartment(id))
         }
         
        
    }
    handleEdit=(id)=>{
    this.props.history.push(`/department/edit/${id}`)
    }
    render(){
        return(<div>
            
            {this.props.department.map((ele)=>{
                return <h3>{ele.name}<button onClick={()=>{
                    this.handleShow(ele.name)
                }}>show</button><button onClick={()=>{
                    this.handleRemove(ele._id)
                }}>remove</button>
                <button onClick={()=>{
                    this.handleEdit(ele._id)
                }}>Edit</button></h3>
            })}
            <h2>Add Department</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                <input type="submit" value="Add"/>

            </form>

        </div>)
    }
}
const mapStateToProps=(state)=>{
      return{
          department:state.department
      }
}
export default connect(mapStateToProps) (Department)