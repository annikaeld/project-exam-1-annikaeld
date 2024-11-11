const API_BASE_URL = 'https://prototype.stokk.org/wp-json/wp/v2';
async function fetchContent(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.title = data.title.rendered;
        document.getElementById('title').innerHTML = data.title.rendered;
        document.getElementById('content').innerHTML = data.content.rendered;
    } catch (error) {
        document.getElementById('content').innerHTML = 'Failed to load content.';
        console.error('Error fetching content:', error);
    }
}

async function fetchContentArray(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (Array.isArray(data) && data.length > 0) {
            const pageData = data[0]; // Get the first item in the array
            document.title = pageData.title.rendered;
            document.getElementById('title').innerHTML = pageData.title.rendered;
            document.getElementById('content').innerHTML = pageData.content.rendered;
        } else {
            document.getElementById('content').innerHTML = 'No content found.';
        }
    } catch (error) {
        document.getElementById('content').innerHTML = 'Failed to load content.';
        console.error('Error fetching content:', error);
    }
}

export { API_BASE_URL, fetchContent, fetchContentArray };