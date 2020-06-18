import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Home from './components/static/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Customers from './components/auth/Customers'
import Department from './components/auth/Department'
import Employees from './components/auth/Employees'
import Ticket from './components/auth/Ticket'
import {connect } from 'react-redux'
import {startUserLogout} from './actions/userAction'



function App(props){

    const handleLogout=()=>{
     props.dispatch(startUserLogout())
    }
    return(
    <BrowserRouter>
    <div>
        <h1> Ticket Master</h1>
        <Link to ="/">Home</Link>
        {/* //conditional rendering on login// */}
        { Object.keys(props.user).length!==0 ?(<div>
              <Link to ="/account">Account</Link>
              <Link to ="#" onClick={handleLogout}>Logout</Link>
              <Link to="/customers">Customers</Link>
              <Link to="/departments">Departments</Link>
              <Link to="/employees">Employees</Link>
              <Link to ="/tickets">Ticket</Link>
            </div>):
            (<div><Link to= "/users/register">Register</Link>
                 <Link to ="/users/login"> Login</Link></div>) }
        

<Switch>
    <Route path="/" component={Home} exact={true}/>
    <Route path="/users/register"component={Register} />
    <Route path="/users/login"  component={Login} />
    <Route path="/customers" component={Customers}/>
    <Route path ="/departments" component={Department}/>
    <Route path="/employees" component={Employees}/>
    <Route path="/tickets" component ={Ticket}/>
</Switch>


    </div>
    </BrowserRouter>)
}
 const mapStateToProps=(state)=>{
return{
     user: state.user
}
}

export default connect(mapStateToProps)(App)