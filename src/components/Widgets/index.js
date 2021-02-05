import React from 'react'
import './styles.css'
import {
      TwitterTimelineEmbed,
      TwitterShareButton,
      TwitterTweetEmbed
         
} from 'react-twitter-embed'

import Search from '@material-ui/icons/Search'
function Widgets() {
      return (
            <div className="widget">
                  <div className="widget_input">
                        <Search className="search"/>
                        <input type='text' placeholder="Search Twitter"/>
                  </div>
                  <div className="widget_container">
                        <h2>What</h2>
                        <TwitterTweetEmbed tweetId={"858551177860056040"}/>
                        <TwitterTimelineEmbed 
                         sourceType='profile'
                         screenName='Shokhzo23454460'
                         options={{height:400}}
                        />
                        <TwitterShareButton 
                        url={'https://twitter.com/Shokhzo23454460'}
                        options={{text:'#reactjs is awesome',via:"React"}}
                        />

                  </div>

            </div>
      )
}

export default Widgets
