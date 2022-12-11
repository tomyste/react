import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";


export const useCalendar = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar);

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent(calendarEvent) )
    }

    const startSavingEvent = async( calendarEvent ) => {
        //TODO; llegar al backend

        //Todo bien
        if( calendarEvent._id ){
            dispatch( onUpdateEvent({...calendarEvent}))
        }else {
            // Creando
            dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}))
        }
    }

    const startDeletingEvent = () => {
        //todo LLEGAR AL BACKEND

        dispatch(onDeleteEvent())
    }

    

    return {
        //* Properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent, //Para saber si hay un elemento seleccionado o no


        //* Methods
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent

    }
}