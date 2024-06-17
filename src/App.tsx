import { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Employee from './models/Employee';
//import './App.css'

interface State {
	list:Employee[];
	id:number;
}

function App() {

  const [state,setState] = useState<State>({
		list:[],
		id:100
	})
  
  const addEmployee = (employee:Employee) => {
		setState((state) => {
			employee.id = state.id;
			return {
				list:state.list.concat(employee),
				id:state.id+1
			}
		})
	}

  const removeEmployee = (id:number) => {
		setState((state) => {
			let tempList = state.list.filter(employee => employee.id !== id)
			return {
				...state,
				list:tempList
			}
		})
	}



  return (
    <>
      <EmployeeForm addEmployee={addEmployee}/>
			<hr/>
			<EmployeeList list={state.list} removeEmployee={removeEmployee}/>
    </>
  )
}

export default App
