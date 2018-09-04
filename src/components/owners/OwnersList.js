import React, { Component } from 'react'


export default class OwnersList extends Component {
    render() {
        return (
            <div className="owners">
                {
                    this.props.owners.map(owners =>
                        <div id={`owner--${owners.id}`} key={owners.id}>
                            <h4>Owner Name: {owners.name}</h4>
                            <h5>Phone Number: {owners.phoneNumber}</h5>
                        </div>
                    )
                }
            </div>
        );
    }
}