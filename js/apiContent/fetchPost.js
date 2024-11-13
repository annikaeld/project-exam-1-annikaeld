import { API_BASE_URL, fetchContent } from "./fetchContent.js";
import { getQueryParam } from "../getQueryParam.js";
let postPageNumber = 1;
let numberOfPostsPerPage = 10;
let totalPages = 1;

async function fetchPost(id) {
  const url = `${API_BASE_URL}/posts/${id}`;
  await fetchContent(url);
}

async function fetchPostFromUrl() {
  const id = getQueryParam("id");
  if (id) {
    await fetchPost(id);
  } else {
    document.getElementById("content").innerHTML = "No id provided in URL.";
  }
}

async function fetchLatestPosts() {
  const url = `${API_BASE_URL}/posts?per_page=${numberOfPostsPerPage}&page=1&_embed`;
  const response = await fetch(url);
  const posts = await response.json();
  postPageNumber++;
  totalPages = parseInt(response.headers.get('X-WP-TotalPages'), 10);
  return posts;
}

async function fetchMorePosts() {
  const url = `${API_BASE_URL}/posts?per_page=${numberOfPostsPerPage}&page=${postPageNumber}&_embed`;
  const response = await fetch(url);
  const posts = await response.json();
  postPageNumber++;
  const morePostsButton = document.getElementById("more-posts-button");
  if (lastPostFetched()) {
    morePostsButton.style.display = "none";
  }
  return posts;
}

function lastPostFetched() {
  return postPageNumber > totalPages;
}

function extractFirstImage(content) {
  const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgTagMatch ? imgTagMatch[1] : "";
}

function norwegianDate(date) {
  const dateObj = new Date(date);
  return new Intl.DateTimeFormat("no-NO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(dateObj);
}

async function displayLatestPosts() {
  try {
    const posts = await fetchLatestPosts();
    const contentElement = document.getElementById("blogposts");
    contentElement.innerHTML = "";

    posts.forEach((post) => {
      contentElement.appendChild(postToElement(post));
    });
  } catch (error) {
    console.error("Error fetching latest posts:", error);
  }
}

function postToElement(post) {
  const postElement = document.createElement("div");
  postElement.className = "post";

  // Get the featured image URL or the first image from the content
  const featuredImage =
    post._embedded && post._embedded["wp:featuredmedia"]
      ? post._embedded["wp:featuredmedia"][0].source_url
      : extractFirstImage(post.content.rendered);

  postElement.innerHTML = `
            <a href="api-post.html?id=${post.id}">
            ${
              featuredImage
                ? `<img src="${featuredImage}" alt="${post.title.rendered}">`
                : ""
            }
            <h2>${post.title.rendered}</h2>
            <p class="date-blog">${norwegianDate(post.date)}</p>
            </a>
        `;
  return postElement;
}

async function displayMorePosts(numberOfPosts) {
  try {
    const posts = await fetchMorePosts()
    const contentElement = document.getElementById("blogposts");
    posts.forEach((post) => {
      contentElement.appendChild(postToElement(post));
    });
  }
  catch (error) {
    console.error("Error fetching more posts:", error);
  }
}

async function postsForCarousel(numberOfPosts) {
  try {
    const posts = await fetchLatestPosts(numberOfPosts);
    const contentElement = document.getElementById("carousel-content");
    contentElement.innerHTML = "";
    var i = 0;

    posts.forEach((post) => {
      const id = post.id;
      const postElement = document.createElement("div");
      postElement.className = "card-container";

      // Get the featured image URL or the first image from the content
      const featuredImage =
        post._embedded && post._embedded["wp:featuredmedia"]
          ? post._embedded["wp:featuredmedia"][0].source_url
          : extractFirstImage(post.content.rendered);

      i++;

      postElement.innerHTML = `
                <div class="card card${i}">
                <a href="api-post.html?id=${post.id}">
                <div class="card-image">
                ${
                  featuredImage
                    ? `<img src="${featuredImage}" alt="${post.title.rendered}">`
                    : ""
                }
                </div>
                <div class="card-text">
                <h2>${post.title.rendered}</h2>
                </div>
                </a>
                </div>
            `;
      contentElement.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching latest posts:", error);
  }
}

export {
  fetchPostFromUrl,
  fetchLatestPosts,
  displayLatestPosts,
  displayMorePosts,
  postsForCarousel,
};
