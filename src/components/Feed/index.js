import React,{useState,useEffect} from 'react'
import './styles.css'
import Tweetbox from '../Tweetbox'
import Post from '../Post'
import db from '../../firebase'
import FlipMove from'react-flip-move'
function Feed() {

      const [posts,setPosts] = useState([]);
      useEffect(()=>{
         db.collection('posts').onSnapshot((snapshot)=>{
               setPosts(snapshot.docs.map(item=>item.data()))
         })
      },[])

      return (
            <div className="feed">
                  <div className="header">
                  <h1>Home</h1>
                  </div>
                  <Tweetbox/>
                  <FlipMove>
                  {

                        posts.map((post)=>{
                             return <Post 
                             key={post.text}
                              displayName={post.displayName}
                              text={post.text}
                              image={post.image}
                              avatar={post.avatar}
                              username={post.username}
                              verified={post.verified}
                              />
                        })
                  }
                </FlipMove>
                  
                  
            </div>
      )
}
 
export default Feed
