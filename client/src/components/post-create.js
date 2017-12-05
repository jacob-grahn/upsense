import { h } from 'hyperapp' // eslint-disable-line no-unused-vars

export default ({ createPost, goto }) => (
  <div class='post-create'>
    <div class='top'>
      <h2>Create a Post</h2>
      <button class='btn btn-text' onclick={() => goto('/')}>See All Posts</button>
    </div>
    <div class='fake-field'>
      <div class='title'>Title</div>
      <input class='input' id='title-field' type='text' placeholder='Short, descriptive title' />
    </div>
    <div class='fake-field'>
      <div class='title'>Details</div>
      <textarea class='input' id='description-field' placeholder='Any additional details...' rows='3' />
    </div>
    <button class='btn btn-text btn-primary create-post' onclick={() => createPost({
      title: document.getElementById('title-field').value,
      description: document.getElementById('description-field').value
    })}>Create Post</button>
  </div>
)
