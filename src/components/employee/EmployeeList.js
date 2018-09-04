import React, { Component } from 'react';


export default class EmployeeList extends Component {
    render() {


        return (
            <section className="employees">
                {
                    this.props.employees.map(employees =>
                        <div id={`employees--${employees.id}`} key={employees.id}>
                            {employees.name}
                        </div>
                    )
                }
            </section>
        )
    }
}
