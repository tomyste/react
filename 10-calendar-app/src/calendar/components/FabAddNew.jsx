import { addHours } from 'date-fns';
import React from 'react'
import { useDispatch } from 'react-redux'
import { useCalendar, useUiStore } from '../../hooks';

export const FabAddNew = () => {
    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendar();

    const handleClickNew = () => {
        setActiveEvent(
            { 
                title: '',
                notes: '',
                start: new Date(),
                end: addHours( new Date(), 2 ),
                bgColor: '#fafafa',
                user: {
                  _id: '12412',
                  name: 'tomys'
                }
              }
        )
        openDateModal();
    }

  return (
    <button
    className='btn btn-primary fab'
    onClick={ handleClickNew }
    >
      <i className='fas fa-plus'></i>
    </button>
  )
}
