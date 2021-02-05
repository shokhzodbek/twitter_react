import React,{forwardRef} from 'react'
import './styles.css'

import {Avatar} from '@material-ui/core'
import  {ChatBubble,Repeat,FavoriteBorder,Publish} from '@material-ui/icons'
import Icon from '@material-ui/icons/VerifiedUser'
const Post= forwardRef(({
      displayName,
      username,
      verified,
      text,
      image,
      avatar
},ref) =>{
      return (
            <div className="post" ref={ref}>
                  <div className="avatar">
                        <Avatar src={avatar}/>
                  </div>
                  <div className="post_body">
                        <div className='post_header'>
                              <div className="post_headerText">
                                    <h3>
                                          {displayName} <span className="span">
                                             {verified &&   <Icon className="iconPost"/>}
                                              {username}
                                          </span>
                                    </h3>
                              </div>
                              <div className="description">
                                    <p>{text}</p>
                              </div>
                        </div>
                        <img src={image}/>
                        <div className="footer">
                              <ChatBubble fontSize="small"/>
                              <Repeat fontSize="small"/>
                              <FavoriteBorder fontSize="small"/>
                              <Publish fontSize="small"/>  
                        </div>
                  </div>
            </div>
      )
})

export default Post
