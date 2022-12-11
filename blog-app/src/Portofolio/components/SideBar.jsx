import "../cssStyles/sideBar.css"
import { SideBarItem } from "./SideBarItem"
import HomeIcon from '@mui/icons-material/Home';
import { BookmarkBorder, MessageSharp, NotificationsNone, PermIdentity, Search } from "@mui/icons-material";
import { Button, Drawer, styled, Tooltip, tooltipClasses, Typography } from "@mui/material";
import { Box } from "@mui/system";

//TODO: Ajustar medidas: maximo ->  595 y minimo: (VER),  medio tambien. Averiguar como hacer para que sea con movimiento fluido



export const SideBar = () => {


  return (
    <Box className="sidebar"
    component='nav'
    sx={{ width: {sm: 595}, flexShrink: {
        sm: 0
    }}}    
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {xl: 595, sm: 150, md: 300}, alignItems: 'center', mt: 8 }
            }}
        >


        <SideBarItem text={ "Home" } Icon={ HomeIcon }/>
        <SideBarItem text={ "Explore" } Icon={ Search }/>
        <SideBarItem text={ "Notifications" } Icon={ NotificationsNone }/>
        <SideBarItem text={ "Bookmarks" } Icon={ BookmarkBorder }/>
        <SideBarItem text={ "Messages" } Icon={ MessageSharp }/>
        <SideBarItem text={ "Profile" } Icon={ PermIdentity }/>     
        <Button className="button" id="newPost"
        style={{ width: '50%' }}
        sx={{mt: {xl: 70, md:60, sm: 40}}}> NewPost </Button> 
        </Drawer>

        
    </Box>
  )
}
