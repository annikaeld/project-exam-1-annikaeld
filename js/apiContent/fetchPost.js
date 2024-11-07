import { API_BASE_URL, fetchContent } from './fetchContent.js';
import { getQueryParam } from '../getQueryParam.js';

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

async function fetchLatestPosts(limit = 9) {
    const url = `${API_BASE_URL}/posts?per_page=${limit}&_embed`;
    const response = await fetch(url);
    const posts = await response.json();
    console.log('Latest posts:', posts);
    return posts;
}

function extractFirstImage(content) {
    const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgTagMatch ? imgTagMatch[1] : '';
}

async function displayLatestPosts(numberOfPosts) {
    try {
        const posts = await fetchLatestPosts(numberOfPosts);
        const contentElement = document.getElementById('blogposts');
        contentElement.innerHTML = '';

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';

            // Get the featured image URL or the first image from the content
            const featuredImage = post._embedded && post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : extractFirstImage(post.content.rendered);
            console.log('Featured image:', featuredImage);

            postElement.innerHTML = `
                <h2>${post.title.rendered}</h2>
                ${featuredImage ? `<img src="${featuredImage}" alt="${post.title.rendered}">` : ''}
                <p>${post.excerpt.rendered}</p>
                <a href="api-post.html?id=${post.id}">Les meir</a>
            `;
            contentElement.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching latest posts:', error);
    }
}

async function postsForCarousel(numberOfPosts) {
    try {
        const posts = await fetchLatestPosts(numberOfPosts);
        const contentElement = document.getElementById('carousel-content');
        contentElement.innerHTML = '';
        var i= 0;

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'card-container';

            // Get the featured image URL or the first image from the content
            const featuredImage = post._embedded && post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : extractFirstImage(post.content.rendered);
            console.log('Featured image:', featuredImage);

            i++;

            postElement.innerHTML = `
                <div class="card card${i}">
                ${featuredImage ? `<img src="${featuredImage}" alt="${post.title.rendered}">` : ''}
                <h2>${post.title.rendered}</h2>
                </div>
            `;
            contentElement.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching latest posts:', error);
    }
}

export { fetchPostFromUrl, fetchLatestPosts, displayLatestPosts, postsForCarousel };
