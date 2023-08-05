import React, { useState } from 'react'
import './reservations-css/bookingForm.css'
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom"


const BookingForm = (props) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState('Birthday')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/bookingConformed')
}



  return (
    <>
        <form className='booking-form' onSubmit={handleSubmit}>
            <label htmlFor='res-date' data-test-id='bookNow'>Choose date</label>
            <input type='date' id='res-date' value={date} onChange={(e) => setDate(e.target.value)}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}> // fix the typo
                {props.availableTimes.map((t) => (
                    <option key={t}>{t}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type='number' placeholder='1' min="1" max="10" id='guests' value={guests} onChange={(e) => setGuests(e.target.value)}/> // use the state value and setter
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>

        </form>
    </>
  )
}

// sdsds
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
        <Link to={to} {...props}>
          {children}
        </Link>
    )
  }
  
export default BookingForm
