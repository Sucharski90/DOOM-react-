import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Options extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const options = this.props.games.map((game, idx) => {
            return (
                <li
                key={idx}
                >
                    {game}
                </li>
            );
        })
        return (
            <ul>
                {options}
            </ul>
        )
        
        
    }
}