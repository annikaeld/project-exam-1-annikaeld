import { API_BASE_URL, fetchContent } from './fetchContent.js';
import { getQueryParam } from './getQueryParam.js';

async function fetchPost(id) {
    const url = `${API_BASE_URL}/posts/${id}`;
    await fetchContent(url);
}

async function fetchPostFromUrl() {
    const id = getQueryParam('id');
    if (id) {
        await fetchPost(id);
    } else {
        document.getElementById('content').innerHTML = 'No id provided in URL.';
    }
}

export { fetchPostFromUrl };
