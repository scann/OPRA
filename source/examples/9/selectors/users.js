// Core
import { createSelector } from 'reselect';

// Instruemnts
import { log } from 'helpers';

const getPrefix = (users) =>
    users.map(({ name, gender, id }) => {
        switch (gender) {
            case 'female':
                return { id, fullname: `Miss ${name}` };

            case 'male':
                return { id, fullname: `Mister ${name}` };

            default:
                return {
                    id,
                    gender,
                    name,
                };
        }
    });

// Plain JavaScript selector
export const selectUsers = (state) => {
    const selected = getPrefix(state.users);

    log('selectUsers selector computed', '38dddd');

    return selected;
};

// Memoized selector
const extractUsers = (state) => state.users;

export const selectUsersMemoized = createSelector(extractUsers, (users) => {
    const selected = getPrefix(users);

    log('selectUsersMemoized selector computed', '38dddd');

    return selected;
});
