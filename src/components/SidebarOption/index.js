import React from 'react'
import './styles.css'
function SidebarOption({Icon,title,active}) {
      return (
            <div className={`option ${active && 'active'}`}>
                     <Icon/>
                     <p>{title}</p>
                  
            </div>
      )
}

export default SidebarOption
