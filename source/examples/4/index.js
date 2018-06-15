// Core
import { createSelector } from 'reselect';

// Instruments
import appState from '../../core/appState';
import { log } from 'helpers';

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

log('• −−−−−−−−− •', '1aa395');
log(`• recomputations • ${selectCount.recomputations()}`, 'f9d8a7');
log('• −−−−−−−−− •', '1aa395');

console.log('• computedCounter1 •', computedCounter1);
console.log('• computedCounter2 •', computedCounter2);

log('• −−−−−−−−− •', '1aa395');

// New state clone is created
const newState = Object.assign({}, appState, { counter: 555 });

// Computation
console.time('Selector computes');
const computedCounter3 = selectCount(newState);
console.timeEnd('Selector computes');

// Memoization
console.time('Selector returns memoized value');
const computedCounter4 = selectCount(newState);
console.timeEnd('Selector returns memoized value');

log('• −−−−−−−−− •', '1aa395');

console.log(' computed conuter value •', computedCounter3);
console.log(' computed conuter value •', computedCounter4);

log('• −−−−−−−−− •', '1aa395');
log(`• recomputations • ${selectCount.recomputations()}`, 'f9d8a7');
log('• −−−−−−−−− •', '1aa395');
