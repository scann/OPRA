// Core
import { createSelector } from 'reselect';

// Instruments
import { log } from 'helpers';

const generateArray = (parameter1, parameter2) =>
    Array.from(Array(parameter1 * parameter2).keys());

// Plain JavaScript selector
export const selectItems = ({ counter1, counter2 }) => {
    const selected = generateArray(counter1, counter2);

    log('selectItems selector computed', 'eaaa91', selected.length);

    return selected;
};

// Memoized selector
const getCounter1 = (state) => state.counter1;
const getCounter2 = (state) => state.counter2;

export const selectItemsMemoized = createSelector(
    getCounter1,
    getCounter2,
    (counter1, counter2) => {
        const selected = generateArray(counter1, counter2);

        log(
            'selectItemsMemoized selector computed with',
            'daff91',
            selected.length,
        );

        return selected;
    },
);
