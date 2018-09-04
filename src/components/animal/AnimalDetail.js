import React, { Component } from "react"
import "./animal.css"
import AnimalManager from "../../modules/AnimalManager";




export default class AnimalDetail extends Component {
    state = {
        animal: {},
        employees :{},
        edit: false,
    }

    handleEditClicked = () => {
        this.setState({
            edit: true,
        })
    }
    // Update state whenever an input field is edited
    handleFieldChange = (whichOne, evt) => {
        const updateAnimal = this.state.animal;
        const stateToChange = whichOne
        updateAnimal[stateToChange] = evt.target.value
        this.setState({ updateAnimal })
    }

    constructNewAnimal = evt => {
        evt.preventDefault()
        if (this.state.animal.employee === "") {
            window.alert("Please pick a animal assistant")
        } else {
            const animal = {
                name: this.state.animal.name,
                breed: this.state.animal.breed,
            

            }


            this.props.editAnimal(animal, parseInt(this.props.match.params.animalId));
            this.setState({ edit: false });
        }
    }

    componentDidMount = () => {
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId, 0)) || {}
        animal.employeeId = this.props.employees.find(e => e.name === animal.employee);

        this.setState({ animal })
    }

    componentDidMount() {

        const newState = {}
    AnimalManager.getAll()
    .then(animals => newState.animals = animals)
    .then(() => fetch("http://localhost:5002/employees")
          .then(r => r.json()))
    .then(employees => newState.employees = employees)
    .then(() => this.setState(newState, () => {
        if(this.employees.animalId===this.animal.id);
        {
            <h3>{this.employees.name}</h3>
        }

    }))}
      
render() {

        return (
            <section className="animal">
                <div key={this.state.animal.id} className="card">
                    <div className="card-body">
                        {this.state.animal.name}
                        {(this.state.edit) ?
                            <input type="text" required="true"
                                className="form-control"
                                onChange={(evt) => { this.handleFieldChange("name", evt) }}
                                id="name"
                                value={this.state.animal.name} />
                            :
                            <h4 className="card-title">
                            
                                <p>Animals Name: {this.state.animal.name}</p>
                                <p>Animal Type: {this.state.animal.type}</p>
                            </h4>
                        }
                        <h6 className="card-title">{this.state.animal.breed}</h6>
                        <button
                            onClick={() => this.props.deleteAnimal(this.state.animal.id)
                                .then(() => this.props.history.push("/animals"))}
                            className="card-link">Delete</button>

                        {(this.state.edit) ?
                            <button onClick={this.constructNewAnimal}
                                className="button">Save Critter</button>
                            : <button onClick={() => this.handleEditClicked()}
                                className="button">Edit Critter</button>
                        }


                    </div>
                </div>
            </section>
        )
          }
}