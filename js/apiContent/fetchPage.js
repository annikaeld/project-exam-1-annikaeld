import { API_BASE_URL, fetchContent, fetchContentArray } from './fetchContent.js';
import { getQueryParam } from './getQueryParam.js';

async function fetchPageById(pageId) {
    const url = `${API_BASE_URL}/pages/${pageId}`;
    await fetchContent(url);
}

async function fetchPageByLink(pageLink) {
    const url = `${API_BASE_URL}/pages?slug=${pageLink}`;
    await fetchContentArray(url);
}

async function fetchPageFromUrl() {
    const pageId = getQueryParam('id');
    console.log('pageId:', pageId);
    const pageLink = getQueryParam('link');
    console.log('pageLink:', pageLink);
    if (pageId) {
        await fetchPageById(pageId);
    } else if (pageLink) {
        await fetchPageByLink(pageLink);
    } else {        
        document.getElementById('content').innerHTML = 'No id provided in URL.';
    }
}

export { fetchPageFromUrl };