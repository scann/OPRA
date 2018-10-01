// Core
import { createSelector } from 'reselect';

// Instruments
import { log } from 'helpers';

const filterPostsByGender = (posts, gender) => {
    switch (gender) {
        case 'males':
            return posts.filter((post) => post.author.gender === 'male');

        case 'females':
            return posts.filter((post) => post.author.gender === 'female');

        default:
            return posts;
    }
};

// Memoized selector
const extractPosts = (state) => state.posts;
const extractTargetGenderFromProps = (_, props) => props.byGenderOf;

export const selectPostsByGender = createSelector(
    [ extractPosts, extractTargetGenderFromProps ],
    (posts, gender) => {
        log(
            `selectPostsByGender selector of '${gender}' instance computed`,
            '9f49fe',
        );

        return filterPostsByGender(posts, gender);
    },
);

export const makeSelectPostsByGender = () => {
    return createSelector(
        [ extractPosts, extractTargetGenderFromProps ],
        (posts, gender) => {
            log(
                `makeSelectPostsByGender selector of '${gender}' computed`,
                '9f49fe',
            );

            return filterPostsByGender(posts, gender);
        },
    );
};
