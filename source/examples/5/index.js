// Core
import { createSelector } from 'reselect';

// Instruments
import appState from '../../core/appState';
import { log } from 'helpers';

const getPosts = (state) => state.posts;

const selectJanePosts = createSelector(getPosts, (posts) =>
    posts.filter((post) => {
        log(`• the result function was recomputed •`, 'aefd3e');

        return post.author.name === 'Jane';
    }),
);

// Computation
console.time('Selector computes');
const janePosts1 = selectJanePosts(appState);
console.timeEnd('Selector computes');

// Memoization
console.time('Selector returns memoized value');
const janePosts2 = selectJanePosts(appState);
console.timeEnd('Selector returns memoized value');

log('• −−−−−−−−− •', '1aa395');

console.log('• janePosts1 •', janePosts1);
console.log('• janePosts2 •', janePosts2);

log(`• recomputations • ${selectJanePosts.recomputations()}`, 'f9d8a7');
