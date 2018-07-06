// squareType- can be 'X' or 'O'
export const checkSquare = (squareType, index) => ({
    type: 'CHECK_SQUARE',
    id: nextTodoId++,
    squareType,
    index
});

export const timeTravel = (moveIndex) => ({
        type: 'TIME_TRAVEL',
        moveIndex
});

export const fetchHistory = (index) => ({
        type: 'FETCH_HISTORY',
        index
    }
);