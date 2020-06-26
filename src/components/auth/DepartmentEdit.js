import React from 'react'
import {connect} from 'react-redux' 
import {startEditDepartment} from '../../actions/departmentAction'

class DepartmentEdit extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:this.props.department ?.name  // es2020-> instead of (cond)&& statement //
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
    const redirect=()=>{
        this.props.history.push('/departments')
    }
      this.props.dispatch(startEditDepartment(formData,this.props.department._id))
      redirect()
    }
    
    
    render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type="submit" value="Update"/>


            </form>
            
        </div>
        
    )
}
}
const mapStateToProps=(state,props)=>{
    return {
        department:state.department.find((ele)=>{
            return ele._id==props.match.params.id
        })
    }

}
export default connect(mapStateToProps) (DepartmentEdit)