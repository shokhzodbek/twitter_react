import React from 'react'
import './styles.css'

import Home from '@material-ui/icons/Home'
import Twitter from '@material-ui/icons/Twitter'
import SidebarOption from '../SidebarOption'

import  {
      Search,
      NotificationsNone,
      MailOutline,
      BookmarkBorder,
      ListAlt,
      PermIdentity,
      MoreHoriz} from '@material-ui/icons'

import {Button} from '@material-ui/core'

function Sidebar() {
      return (
            <div className="sidebar">
                  <Twitter className="icon"/>
                  <SidebarOption active Icon={Home} title="Home"/>
                  <SidebarOption Icon={Search} title="Explore"/>
                  <SidebarOption Icon={NotificationsNone} title="Notifications"/>
                  <SidebarOption Icon={MailOutline} title="Messages"/>
                  <SidebarOption Icon={BookmarkBorder} title="Bookmarks"/>
                  <SidebarOption Icon={ListAlt} title="Lists"/>
                  <SidebarOption Icon={PermIdentity} title="Profile"/>
                  <SidebarOption Icon={MoreHoriz} title="More"/>
                  <Button
                  variant="outlined"
                  className="tweet"
                  fullWidth 
                  >Tweet </Button>
            </div>
      )
}

export default Sidebar
