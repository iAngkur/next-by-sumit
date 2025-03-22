export default function getPost(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    next: {
      revalidate: 10,
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
}