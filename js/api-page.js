function contactPage() {
    window.location.href = 'contact.html';
}

import { fetchPageFromUrl } from './apiContent/fetchPage.js';
export { fetchPageFromUrl, contactPage };
window.contactPage = contactPage;