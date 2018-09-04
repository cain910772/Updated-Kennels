import React, { Component } from 'react';


export default class LocationList extends Component {

    render() {
        return (
            <div className="locations">
                <h3>Our Locations</h3>
                {
                    this.props.locations.map(locations =>
                        <div id={`location--${locations.id}`} key={locations.id}>
                            <h4>{locations.name}</h4>
                            <p>{locations.location}</p>
                            <p>{locations.Address}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}