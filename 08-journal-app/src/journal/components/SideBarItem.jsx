import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";




export const SideBarItem = ({ title = '', id, body , date, imageUrls = []}) => {

    const dispatch = useDispatch();    

    const newTitle = useMemo(() => {
        return title.length > 15 
        ? title.substring(0,15) + '...'
        : title;
    }, [ title ])

    const newBody = useMemo(() => {
        return body.length > 20 
        ? body.substring(0,20) + '...'
        : body;
    }, [ body ])

    const onClickNote = () => {
        dispatch(setActiveNote({title, id, body, date, imageUrls }))

        
    }

  

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={onClickNote}>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ newTitle } />
                <ListItemText secondary={ newBody } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
