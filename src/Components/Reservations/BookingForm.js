import React, { useState } from 'react'
import './reservations-css/bookingForm.css'


const BookingForm = (props) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState('Birthday')
    

  return (
    <>
        <form className='booking-form'>
            <label htmlFor='res-date' data-test-id='bookNow'>Choose date</label>
            <input type='date' id='res-date' value={date} onChange={(e) => setDate(e.target.value)}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
                {props.availableTimes.map((t) => (
                    <option key={t}>{t}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type='number' placeholder='1' min="1" max="10" id='guests'/>
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

export default BookingForm

