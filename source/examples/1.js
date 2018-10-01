// Instruments
import appState from '../core/appState';

const selectPosts = (state) => state.posts;

const posts = selectPosts(appState);

console.log('→ posts', posts);
