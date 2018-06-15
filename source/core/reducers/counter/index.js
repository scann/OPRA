// Instruments
import { FAKE_INCREMENT, INCREMENT, DECREMENT } from '../../actions/counter/types';

const initialState = 0;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FAKE_INCREMENT:
            return state;

        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        default:
            return state;
    }
};
