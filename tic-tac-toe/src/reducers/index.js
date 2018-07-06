import { combineReducers } from 'redux'
import * as _ from 'lodash'

function ticTacToe(state = initialState, action) {

    function jumpTo(step) {
        state.stepNumber = step;
        state.xIsNext = (step % 2) === 0;
    }

    switch(action.type)
    {
        case 'CHECK_SQUARE':
            let newSquares = {...state.history[state.history.stepNumber].squares};
            state.history.stepNumber++;
            newSquares[action.index] = action.squareType;
            state.history.push(newSquares);
            break;

        case 'TIME_TRAVEL':
            jumpTo(action.moveIndex);
            state.history.stepNumber = action.moveIndex;
            state.history = _.slice(state.history, 0, action.moveIndex);
            break;

        case 'FETCH_HISTORY':
            jumpTo(action.index);
            break;
    }

    return state;
}

export default combineReducers({
        ticTacToe
    })