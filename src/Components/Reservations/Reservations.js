
import React, {useReducer, useState} from 'react'
import BookingForm from './BookingForm'

const CHANGE_DATE = 'change-date'

const Reservations = () => {


const updateTimes = (state,action) =>{
  switch(action.type){
    case CHANGE_DATE :
      return state.filter(time => time.startsWith(action.date.slice(-1)))
    default:
      return state
  }
}
const initializeTimes = () => { return [ '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', ] }
const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes)

  return (
    <>
      <BookingForm availableTimes={availableTimes} onDateChange={(date) => dispatch({type: CHANGE_DATE, date})}/>
    </>
  )
}

export default Reservations