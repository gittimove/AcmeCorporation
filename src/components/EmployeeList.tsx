import Employee from "../models/Employee";

interface Props {
	list:Employee[];
	removeEmployee(id:number):void;
}

const EmployeeList = (props:Props) => {

    const contactJSX = props.list.map((employee) => {
		return(
			<tr key={employee.id}>
				<td>{employee.firstname}</td>
				<td>{employee.lastname}</td>
				<td>{employee.jobposition}</td>
				<td>{employee.workingtime}</td>
				<td><button onClick={() => props.removeEmployee(employee.id)} style={{"backgroundColor":"red"}}>Remove employee from database</button></td>
			</tr>
		)
	})

    return(
		<table>
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Job position</th>
					<th>Working time</th>
					<th>Remove the employee</th>
				</tr>
			</thead>
			<tbody>
			{contactJSX}
			</tbody>
		</table>
	)

}

export default EmployeeList;