import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

const drawerWidth = 280;

export const JournalLayout = ({children}) => {
    
  return (
    <Box sx={{ display: 'flex'}} className="animate__animated animate__fadeIn">

        {/* NavBar */}
        <NavBar drawerWidth={drawerWidth}></NavBar>

        {/* SideBar */}
        <SideBar drawerWidth={drawerWidth}></SideBar>

        <Box 
        component='main'
        sx={{ flexGrow: 1, p:3}}>
            
            {/* ToolBar */}
            <Toolbar></Toolbar>

            {children}
        </Box>


    </Box>
  )
}
