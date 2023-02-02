import sendRequest from './send-request';

const BASE_URL = '/api/posts';

// Retrieve all the users posts 
export function getUserPosts() {
    return sendRequest(BASE_URL);
}

export function createPost () {
    return sendRequest(`${BASE_URL}`, 'POST');
}


//delete a post 
export function deleteUserPost(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

// show specific posts 
export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}