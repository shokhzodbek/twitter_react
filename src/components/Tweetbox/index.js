import React,{useState,useEffect} from 'react'
import './styles.css'
import {Button,Avatar} from '@material-ui/core'
import db from '../../firebase'
function Tweetbox() {
      const [tweet,setTweet] = useState('')
      const [tweetImage,setTweetImage] = useState('')
      const sendTweet = (e)=>{
            e.preventDefault();
            db.collection('posts').add({
                  displayName:"SHOKH",
                  username:'shokh',
                  verified:true,
                  text:tweet,
                  image:tweetImage,
                  avatar:''

            })
            setTweet("")
            setTweetImage('')
      }
      return (
            <div className="tweetbox"> 
                 <form>

                     <div className="input">
                         <Avatar/>
                         <input 
                         type='text'
                          placeholder="What is happening"
                          value={tweet}
                          onChange={(e)=>setTweet(e.target.value)}
                          />
                         
                  </div>  
                  <input 
                  value={tweetImage}
                  onChange={(e)=>setTweetImage(e.target.value)}
                  className="inputImage" type="text" placeholder="Image Url"/>
                  <Button
                  onClick={sendTweet}
                  className="tweet_button"
                  >Tweet</Button>
            </form> 
            </div>
      )
}

export default Tweetbox
