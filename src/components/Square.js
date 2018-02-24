import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Square extends Component {

    render() {
        return (
            <button className="square" onClick={()=> this.props.onClick()}>
                {this.props.value}
            </button>
        );

    }
}

Square.propTypes = {};

export default Square;
