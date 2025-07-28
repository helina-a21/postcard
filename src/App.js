import React from 'react'
import PostCard from './component/profile'
const user = {
  name: 'ABEBE BEKILA',
  imageUrl: 'download (1).jpg', // Make sure this image exists in your public folder or use a valid URL
};

const App = () => {
  return (
    <div>
      <PostCard
        user={user}
        postText="cute girl!"
        postImage='download.jpg'
      />
  
    </div>
  )
}

export default App