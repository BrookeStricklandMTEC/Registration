import './calendar.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGreaterThan,
    faLessThan
} from '@fortawesome/free-solid-svg-icons';
import { DAYS, range, MONTHS, getDaysInMonth, getSortDays, areDatesTheSame, getDateObj } from '../cont';


function Calendar({ startingDate }) {

    const [currentMonth, setCurrentmonth] = useState(startingDate.getMonth())
    const [currentYear, setCurrentyear] = useState(startingDate.getFullYear())
    const daysInMonth = getDaysInMonth(currentMonth, currentYear)


    const nextMonth = () => {
        if (currentMonth < 11) {
            setCurrentmonth((prev) => prev + 1)
        } else {
            setCurrentmonth(0)
            setCurrentyear((prev) => prev + 1)
        }
    }
    const prevMonth = () => {
        if (currentMonth > 0) {
            setCurrentmonth((prev) => prev - 1)
        } else {
            setCurrentmonth(11)
            setCurrentyear((prev) => prev - 1)
        }
    }
    return (
        <>
            <div className='userTittle'>
                <p className='changingtittle'>Calendar</p>
                <hr className='line'></hr>
            </div>
            <div className='container'>
                <div className='calendarHead'>
                    <FontAwesomeIcon onClick={prevMonth} icon={faLessThan} className="icon" />
                    <p>{MONTHS[currentMonth]} {currentYear}</p>
                    <FontAwesomeIcon onClick={nextMonth} icon={faGreaterThan} className="icon" />
                </div>
                <div className='sevenColGrid'>
                    {getSortDays(currentMonth, currentYear).map((day) => (
                        <div id={day + "day"} className='headDay'>{day}</div>
                    ))}
                </div>

                <div className='calenderBody' >
                    {range(daysInMonth).map((day) => <span className={'styledDay ' + (day === new Date().getDay() - 2 && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "today" : "")} id={day}  >{day}</span>)}
                </div>
            </div>
        </>

    )
}


export default Calendar;