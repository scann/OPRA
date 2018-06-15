// Instruments
import { CREATE_POST, DELETE_POST } from '../../actions/posts/types';
import { random, internet } from 'faker';

const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_POST:
            return [
                ...state,
                {
                    id:      random.uuid(),
                    comment: payload,
                    author:  { name: internet.userName(), gender: 'male' },
                }
            ];

        case DELETE_POST:
            return state.filter((post) => post.id !== payload);

        default:
            return state;
    }
};
