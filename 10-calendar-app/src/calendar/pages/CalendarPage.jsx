import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


import { addHours } from 'date-fns';

import { CalendarEventBox, CalendarModal, FabAddNew, NavBar } from "../components"   
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';
import { useCalendar, useUiStore } from '../../hooks';
import { FabDelete } from '../components/FabDelete';




//TODO: Agregar un colorPicker, para que manejar la importancia de eventos


export const CalendarPage = () => {

    const { openDateModal } = useUiStore();
    const { events, setActiveEvent } = useCalendar();
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');
  
    const eventStyleGetter = ( event, start, end, isSelected ) => {
    }

    const onDoubleClick = ( event ) => {
      openDateModal();
    }

    const onSelect = ( event ) => {
      setActiveEvent( event );
    }

    const onViewChanged = ( event ) => {
      localStorage.setItem('lastView', event)
      setLastView(event)
    }


    return (
      <>
        <NavBar></NavBar>

        <Calendar
        culture='es'
        className='calendar'
        defaultView={lastView}
        localizer={ localizer }
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px)'}}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEventBox
        }}
        onDoubleClickEvent= { onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
        />
        <CalendarModal/>
        <FabAddNew></FabAddNew>
        <FabDelete></FabDelete>
      </>
    )
  }
  