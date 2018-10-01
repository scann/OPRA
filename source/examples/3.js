// Core
import { createSelector } from 'reselect';

// Instruments
import appState from '../core/appState';
import { log } from '../helpers';

const getCounter = (state) => state.counter;

const selectCount = createSelector(getCounter, (count) => {
    log(`• the result function was recomputed • ${count}`, 'aefd3e');

    return count ** 4;
});

// Computation
console.time('Selector computes');
const computedCounter1 = selectCount(appState);
console.timeEnd('Selector computes');

// Memoization
console.time('Selector returns memoized value');
const computedCounter2 = selectCount(appState);
console.timeEnd('Selector returns memoized value');

log('• −−−−−−−− •', '1aa395');
log(`• recomputations • ${selectCount.recomputations()}`, 'f9d8a7');
log('• −−−−−−−− •', '1aa395');

console.log('• computedCounter1 •', computedCounter1);
console.log('• computedCounter2 •', computedCounter2);

log('• −−−− !! Mutation !! −−−− •', '1aa395');

appState.counter = 555;

// Memoization (new value is not computed because of mutation)
console.time('Selector returns memoized value');
const computedCounter3 = selectCount(appState);
console.timeEnd('Selector returns memoized value');

// Memoization (new value is not computed because of mutation)
console.time('Selector returns memoized value');
const computedCounter4 = selectCount(appState);
console.timeEnd('Selector returns memoized value');

log('• −−−− !! Mutation !! −−−− •', '1aa395');

console.log('• computedCounter3 •', computedCounter3);
console.log('• computedCounter4 •', computedCounter4);

log('• −−−−−−−− •', '1aa395');
log(`• recomputations • ${selectCount.recomputations()}`, 'f9d8a7');
log('• −−−−−−−− •', '1aa395');

console.log('• result func •', selectCount.resultFunc());
