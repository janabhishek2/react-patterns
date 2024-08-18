// fetch the posts

const fetchPostsUrl = 'https://jsonplaceholder.typicode.com/posts';

// posts section div
const postsDiv = document.getElementById("posts");

// create a post
const createPost = function(post) {
    const postElement = document.createElement("div");
    const postContent = document.createElement("div");
    postElement.className = "post";
    postContent.className = "post-content";

    postElement.appendChild(postContent);

    const postTitle = document.createElement("div");
    postTitle.className = "post-title";
    postTitle.textContent = post.title;

    const postBody = document.createElement("div");
    postBody.className = "post-body";
    postBody.textContent = post.body;

    postContent.appendChild(postTitle)
    postContent.appendChild(postBody);

    return postElement;
}

const populateUI = function(posts = []) {
    // clear the posts section div chilren

    for(let child of postsDiv.children) {
        child.remove();
    }

    // insert the elements
    for(let post of posts) {
        const postElement = createPost(post);
        postsDiv.appendChild(postElement);
    }
    
    // return;
    return;
}

const fetchPosts = async function() {
    try{
        const response = await fetch(fetchPostsUrl);
        if(!response.ok) {
            throw new Error("Failed to fetch!");
        }
        const data = await response.json();
        populateUI(data);
    } catch(err) {
        console.log(err.message);
    }
}

const createAndInsertPost = function(post) {
    // insert post at beginning of list

    const postElement = createPost(post);
    postsDiv.insertAdjacentElement("afterbegin", postElement);

    return;
};

const insertPost = async function(post) {
    try {
        const payload = post;
        const response = await fetch(fetchPostsUrl, {
            body: JSON.stringify(payload),
            method: "post"
        });
        if(!response.ok) throw new Error("Failed to fetch!");

        createAndInsertPost(payload);

    } catch(err) {
        console.log(err.message);
    }
}
fetchPosts();

// add post event listener

const addPostButton = document.getElementById("add-post");

addPostButton.addEventListener("click", function(e) {
    e.preventDefault();
    const postTitle = document.getElementById("new-post-title").value;
    const postBody = document.getElementById("new-post-body").value;
    const post = {
        title: postTitle,
        body: postBody
    };
    createAndInsertPost(post);
});
