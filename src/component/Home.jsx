import React, { Component } from 'react';
import EmployeeDataDisplay from './employee';
import {AppContext} from './common/Context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const employeeData = [
    {
        id: 'john',
        firstName: 'John',
        lastName: 'Wick',
        dob: new Date('03/07/1987'),
        designation: 'Sr. Software Developer',
        profilePhoto: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        experience: '5'
    }, {
        id: 'adele',
        firstName: 'Adele',
        lastName: 'Vance',
        dob: new Date('06/09/1990'),
        designation: 'Business Analyst',
        profilePhoto: 'https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        experience: '3'
    },
]
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [...employeeData]
        }
    }

    OnEditClicked = (id) => {
        this.setState(
            {id: id},
            () => {
                // set route to /home/edit/id
            }
        )
    }

    render() {
        return (<AppContext.Provider value={{...this.state}}>
            <h2 className="text-center">Home</h2>
            <EmployeeDataDisplay OnEditClicked={this.OnEditClicked}/>
            <Route exact path={"/home/edit/:id"} >
                {
                    <Form />
                  }
            </Route>
        </AppContext.Provider>);
    }

}

export default Home;