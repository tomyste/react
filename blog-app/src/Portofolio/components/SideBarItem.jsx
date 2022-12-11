import { Box } from '@mui/system'
import React from 'react'
import '../cssStyles/sidebarItem.css'

export const SideBarItem = ({text, Icon}) => {
  return (
    <div className="link">
        <Icon />
        <div >
          <h2> {text} </h2> 
        </div>
    </div>

   
  )
}
