import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeData: props.employeeData
        }
    }

    render() {
        return <div className="modal fade">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">{`${this.state.employeeData && Object.keys(this.state.employeeData).length ? 'Edit' : 'Add'} Employee`}</div>
                </div>
                {//display the data according to the id.
                //same form can be used for new and edit.
                }
            </div>
        </div>
    }
}