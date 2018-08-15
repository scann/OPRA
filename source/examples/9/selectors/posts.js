// Core
import { createSelector } from 'reselect';

// Instruemnts
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
const extractInstancNameFromProps = (_, props) => props.instance;

export const selectPostsByGender = createSelector(
    [extractPosts, extractTargetGenderFromProps, extractInstancNameFromProps],
    (posts, gender, instance) => {
        log(
            `selectPostsByGender selector of '${instance}' instance computed`,
            '9f49fe',
        );

        return filterPostsByGender(posts, gender);
    },
);

export const makeSelectPostsByGender = () => {
    return createSelector(
        [
            extractPosts,
            extractTargetGenderFromProps,
            extractInstancNameFromProps
        ],
        (posts, gender, instance) => {
            log(
                `makeSelectPostsByGender selector of '${instance}' computed`,
                '9f49fe',
            );

            return filterPostsByGender(posts, gender);
        },
    );
}