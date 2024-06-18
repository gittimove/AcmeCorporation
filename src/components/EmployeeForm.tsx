import React,{useState} from 'react';
import Employee from '../models/Employee';

interface State {

    firstname:string;
    lastname:string;
    jobposition:string;
    workingtime:string;
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
				<p>Job position</p>
				<label htmlFor="jobposition">(Front-End)</label>
				<input type="checkbox"
						name="jobposition"
						id="jobposition"
						onChange={onChange}
						value={"Front"}/>
				<br/>
				<label htmlFor="jobposition"> (Back-End)</label>
				<input type="checkbox"
						name="jobposition"
						id="jobposition"
						onChange={onChange}
						value={"Back"}/>
				<br/>
				<label htmlFor="jobposition"> (Testing)</label>
				<input type="checkbox"
						name="jobposition"
						id="jobposition"
						onChange={onChange}
						value={"Testing"}/> 
				<br/>
				<label htmlFor="jobposition">(System Architect)</label>
				<input type="checkbox"
						name="jobposition"
						id="jobposition"
						onChange={onChange}
						value={"Architect"}/>
				<br/>
				<br/>
				<label htmlFor="workingtime">Working time (Full)</label>
				<input type="checkbox"
						name="workingtime"
						id="workingtime"
						onChange={onChange}
						value={"Full"}/>
				<br/>
				<label htmlFor="workingtime">Working time (Part)</label>
				<input type="checkbox"
						name="workingtime"
						id="workingtime"
						onChange={onChange}
						value={"Part"}/>
				<br/>
				<input type="submit" value="Add Employee"/>
				<input type="reset" value="Reset choices"/>
				<br/>
			</form>
		</div>
	)


}

export default EmployeeForm;