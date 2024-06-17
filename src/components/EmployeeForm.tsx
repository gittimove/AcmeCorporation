import React,{useState} from 'react';
import Employee from '../models/Employee';

interface State {

    firstname:string;
    lastname:string;
    jobposition:"";
    workingtime:"";
}

interface Props {
	addEmployee(employee:Employee):void;
}

const EmployeeForm = (props:Props) => {

    const [state,setState] = useState<State>({
		firstname:"",
		lastname:"",
		jobposition:"",
		workingtime:""
	})

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}

    const onSubmit = (event:React.SyntheticEvent) => {
		event.preventDefault();
		if(state.firstname === "" || state.lastname === "" || state.jobposition === "" || state.workingtime === "" ) {
			return;
		}
		const employee = new Employee(state.firstname,state.lastname,state.jobposition,state.workingtime,0);
		props.addEmployee(employee);
		setState({
			firstname:"",
			lastname:"",
			jobposition:"",
			workingtime:""
		})
	}

    return(
		<div style={{"width":"16%","backgroundColor":"lightgreen","margin":"auto"}}>
            <p>Acme Corporation HR management system</p>
			<form onSubmit={onSubmit}>
				<label htmlFor="firstname">First Name</label>
				<input type="text"
						name="firstname"
						id="firstname"
						onChange={onChange}
						value={state.firstname}/>
				<br/>
				<label htmlFor="lastname">Last Name</label>
				<input type="text"
						name="lastname"
						id="lastname"
						onChange={onChange}
						value={state.lastname}/>
				<br/>
				<label htmlFor="jobposition">Job position (Front,Back,Tester,Architect )</label>
				<input type="text"
						name="jobposition"
						id="jobposition"
						onChange={onChange}
						value={state.jobposition}/>
				<br/>
				<label htmlFor="workingtime">Working time (Full, Part)</label>
				<input type="text"
						name="workingtime"
						id="workingtime"
						onChange={onChange}
						value={state.workingtime}/>
				<br/>
				<input type="submit" value="Add Employee"/>
			</form>
		</div>
	)


}

export default EmployeeForm;