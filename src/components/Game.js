import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Board from "./Board";

class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}

Game.propTypes = {};

export default Game;
