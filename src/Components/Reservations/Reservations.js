
import React, {useEffect, useReducer, useState} from 'react'
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

// const{fData,setFData} = useState()

// useEffect(() => {
//   fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
//   .then(res => {
//     return res.json()
//   })
//   .then(data => {
//     setFData(data)
//   })
// },[])


const{fData,setFData} = useState(null)

useEffect(() => { fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js') 
.then(res => {
  if (res.ok) {
    return res.json() 
  } else {
    throw new Error(`Something went wrong: ${res.status}`) } }) 
    .then(data => {
      setFData(data) })
      .catch(error => {
        console.error(error) }) },[])


const initializeTimes = () => { return fData }
const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes)
console.log(initializeTimes)
  return (
    <>
      {initializeTimes && <inBookingForm availableTimes={availableTimes} onDateChange={(date) => dispatch({type: CHANGE_DATE, date})}/>}
    </>
  )
}



export default Reservations