// Core
import { createSelector } from 'reselect';

// Instruments
import appState from '../core/appState';
import { log } from '../helpers';

const getPosts = (state) => state.posts;

const selectJanePosts = createSelector(getPosts, (posts) => {
    return posts.filter((post) => {
        log('• the result function was recomputed •', 'aefd3e');

        return post.author.name === 'Jane';
    });
});

// Computation
console.time('Selector computes');
const janePosts1 = selectJanePosts(appState);
console.timeEnd('Selector computes');

// Memoization
console.time('Selector returns memoized value');
const janePosts2 = selectJanePosts(appState);
console.timeEnd('Selector returns memoized value');

log('• −−−−−−−− •', '1aa395');

console.log('• janePosts1 •', janePosts1);
console.log('• janePosts2 •', janePosts2);

log('• −−−−−−−− •', '1aa395');

// Create a new state copy every time instead!
const newState = Object.assign({}, appState, {
    posts: [
        ...appState.posts,
        {
            id:      '012',
            comment: 'Good evening!',
            author:  { id: '321', name: 'Jane', age: 28 },
        },
    ],
});

// Memoization (because of mutation)
console.time('Selector returns memoized value');
const janePosts3 = selectJanePosts(newState);
console.timeEnd('Selector returns memoized value');

// Memoization (because of mutation)
console.time('Selector returns memoized value');
const janePosts4 = selectJanePosts(newState);
console.timeEnd('Selector returns memoized value');

log('• −−−−−−−− •', '1aa395');

console.log('• janePosts3 •', janePosts3);
console.log('• janePosts4 •', janePosts4);

log(`• recomputations • ${selectJanePosts.recomputations()}`, 'f9d8a7');
