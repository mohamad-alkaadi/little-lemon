import React, {useEffect, useReducer, useState} from 'react'
import BookingForm from './BookingForm'

const CHANGE_DATE = 'change-date'

const seededRandom = seed => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = s * a % m) / m;
};
const fetchAPI = date => {
  return new Promise((resolve, reject) => {
    let result = [];
    let random = seededRandom(date.getDate());
    for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) result.push(i + ':00');
      if(random() >= 0.5) result.push(i + ':30');
    }
    resolve(JSON.stringify(result))
  })}
  const submitAPI = formData => {
    return new Promise((resolve, reject) => {
      resolve(JSON.stringify(true))
    })}
    export {fetchAPI, submitAPI}


const Reservations = () => {

const sDate = new Date().toISOString().split('T')[0]

const updateTimes = (state,action) =>{
  switch(action.type){
    case 'initializeTimes':
      return action.availableTimes // return a new array
    case CHANGE_DATE :
      return state.filter(time => time.startsWith(action.date.slice(-1))) // return a new array
    default:
      return state
  }
}

const [fData,setFData] = useState([]) // initialize with an empty array

useEffect(() => { 
  fetchAPI(new Date(sDate))
  .then(response => JSON.parse(response))
  .then(availableTimes => setFData(availableTimes)) // use the setter function to update the state
},[sDate]) // add sDate as a dependency

const [availableTimes, dispatch] = useReducer(updateTimes, fData) // use fData as the initial state

  return (
    <>
      {fData.length > 0 && <BookingForm availableTimes={availableTimes} onDateChange={(date) => dispatch({type: CHANGE_DATE, date})}/>}
    </>
  )
}

export default Reservations
