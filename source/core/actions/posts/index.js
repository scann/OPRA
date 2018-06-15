// Instruments
import { CREATE_POST, DELETE_POST } from './types';
import { lorem } from 'faker';

export const createPost = () => ({
    type:    CREATE_POST,
    payload: lorem.sentence(),
});

export const deletePost = (postId) => ({
    type:    DELETE_POST,
    payload: postId,
});
