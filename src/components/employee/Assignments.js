import React, { Component } from 'react';


export default class Assignments extends Component {
    render() {


        return (
            <section className="employees">
                {
                    this.props.employees.map(employees =>
                        <div id={`employees--${employees.id}`} key={employees.id}>
                            {employees.name}
                            {employees.animalId}
                            console.log(animalId);
                            
                        </div>
                    )
                }
            </section>
        )
    }
}
