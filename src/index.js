import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startGetUser } from './actions/userAction'
import { startSetDepartment } from './actions/departmentAction'
import {startSetCustomer} from './actions/customerAction'
import {startSetEmployee} from './actions/employeeAction'
import {startSetTicket}  from './actions/ticketAction'

const store= configureStore()
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})
// handle page reload//
if(localStorage.getItem('authToken')){
    store.dispatch(startGetUser())
    store.dispatch(startSetDepartment())
    store.dispatch(startSetCustomer())
    store.dispatch(startSetEmployee())
    store.dispatch(startSetTicket())
}


const jsx=(<Provider store={store}>
    <App/>
</Provider>)



ReactDom.render(jsx, document.getElementById('root'))