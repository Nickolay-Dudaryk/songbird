import React, { Component } from 'react';

import './item.css'

export default class Item extends Component {
    render() {
        const { name, onBirdSelected, currentBirdId} = this.props;

        return(
            <button
            type="button"
            className="li-btn list-group-item list-group-item-action"
            onClick={(e) => onBirdSelected(currentBirdId, e)}
          >
            <span className="btn-circle"></span>
            <span>{name}</span>
          </button>
        )
    }
}