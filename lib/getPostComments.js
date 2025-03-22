export default function getPostComment(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
}