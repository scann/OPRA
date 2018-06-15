// Instruments
import appState from '../../core/appState';

const selectJanePosts = (state) => state.posts.filter((post) => post.author.name === 'Jane');

const janePosts = selectJanePosts(appState);

console.log(' selected Jane posts •', janePosts);
