import { h } from 'hyperapp' // eslint-disable-line no-unused-vars
import constants from '../../../shared/constants'

export default ({ post, updatePost, goto }) => (
  <div class='post-create'>
    <div class='top'>
      <h2>Update Post</h2>
      <button class='btn btn-text' onclick={() => goto('/')}>See All Posts</button>
    </div>
    <div class='fake-field'>
      <div class='title'>Title</div>
      <input class='input' id='title-field' type='text' placeholder='Short, descriptive title' value={post.title} />
    </div>
    <div class='fake-field'>
      <div class='title'>Details</div>
      <textarea class='input' id='description-field' placeholder='Any additional details...' rows='3' value={post.description} />
    </div>
    <select id='status-field' value={post.status}>
      <option value={constants.PLANNED}>Planned</option>
      <option value={constants.IN_PROGRESS}>In Progress</option>
      <option value={constants.OPEN}>Open</option>
      <option value={constants.COMPLETE}>Complete</option>
      <option value={constants.CLOSED}>Closed</option>
    </select>
    <button class='btn btn-text btn-primary create-post' onclick={() => updatePost({
      postId: post.postId,
      title: document.getElementById('title-field').value,
      description: document.getElementById('description-field').value,
      status: document.getElementById('status-field').value
    })}>Update Post</button>
  </div>
)
