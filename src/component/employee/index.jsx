import React from 'react';
import './index.css';
import {ConnectWithContext} from '../common/ConnectWithContext';

class EmployeeDataDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { employees } = this.props;

        return (<table id="employee-table">
            <thead>
                <tr>
                    <th>Profile Photo</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DOB</th>
                    <th>Designation</th>
                    <th>Experience</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees && employees.length ? employees.map(employee => {
                    return <tr key={employee.id}>
                        <td>
                            <div className="profilePic" style={{ backgroundImage: `url('${employee.profilePhoto}')` }} />
                        </td>
                        <td>
                            {employee.firstName}
                        </td>
                        <td>
                            {employee.lastName}
                        </td>
                        <td>
                            {new Date(employee.dob).toDateString()}
                        </td>
                        <td>
                            {employee.designation}
                        </td>
                        <td>
                            {employee.experience}
                        </td>
                        <td>
                            <button className="btn btn-primary" onClick={() => this.props.OnEditClicked(employee.id)}>Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                })
                    :
                    <tr></tr>}
            </tbody>
        </table>)
    }
}

export default ConnectWithContext(EmployeeDataDisplay);