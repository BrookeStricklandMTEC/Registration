import './joinClass.css';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChalkboardUser
} from '@fortawesome/free-solid-svg-icons';


function JoinAnewClasses(data) {
    function set({ target }) {
        const bob = target.id.split("||")
        var panel = document.getElementById("pal||" + bob[1])
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            target.textContent = "View Details"
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            target.textContent = "Close Class"
        }

    }

    function addClassToDashboard({target}){
        const bob = target.id.split("||")
        console.log(bob[1]+ " Hit")
        fetch("/joinCourse", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                classId: bob[1]
            }),
        }).then((res) => res.json())
            .then(data => {
                console.log(data)
                window.location.href = '/dashboard';
            }).catch((error) => {
                console.log(error)
            })
    }
    const rando = Math.floor(Math.random() * data.course.maximum_capacity + 1)
    const tittle = data.course.title.split(",")
    var day
    const sched = data.course.schedule.split(" ")
    if(sched[0] === "MWF"){
        day = "Monday, Wensday, Friday"
    }else{
        day= "Tuesday, Thursday"
    }
    return (
        <>
            <div className='holder accordion'>
                <div className='h-left'>
                    <div className='iconSchool'>
                        <FontAwesomeIcon icon={faChalkboardUser} className="icon" />
                    </div>
                    <div>
                        <p className='h-tittle'>{tittle[1]}</p>
                        <p className='h-sub'>{tittle[0]}</p>
                    </div>
                </div>
                <div className='h-right'>
                    <button className='dashboardbutton' id={"bt||"+tittle[0]} onClick={set}>View Details</button>
                </div>

            </div>
            <div className="panel" id={"pal||"+tittle[0]}>
                <hr className='line1'></hr>
                <div className='lr'>
                    <div className='panel-left'>
                        <span className='panel-tittle'>Introduction: </span>
                        <p >{data.course.description}</p>
                    </div>
                    <div className='panel-right'>
                        <p className='numberOfStudents'><span>{rando}/{data.course.maximum_capacity}</span></p>
                    </div>
                </div>
                <div className='panel-bottom'>
                    <p className='panel-mt'>Classroom Schedule: <span className='panel-black'>{day+": "+sched[1]} </span></p>
                    <p className='panel-mt'>Credit Hours: <span className='panel-black' >{data.course.credit_hours}</span></p>
                    <p className='panel-mt'>Tuition Cost: <span className='panel-black'>$ {data.course.tuition_cost}.00</span></p>
                    <button className='dashboardbutton' id={"joinClass||"+data.course.id} onClick={addClassToDashboard} >Join Class</button>
                </div>
                
            </div>
        </>
    )
}



function JoinAClass() {
    const [nonCourses, setNonCourses] = useState([])
    useEffect(() => {
        fetch("/getAllCourses", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },

        }).then((res) => res.json())
            .then(data => {
                console.log(data)
                setNonCourses(data.courses.rows)
            }).catch((error) => {
                console.log(error)
            })

    }, [])
    return (
        <>
            <div className='userTittle'>
                <p className='changingtittle'>Join Class</p>
                <hr className='line'></hr>
            </div>

            <div className='classes'>
                {nonCourses.map(course => <JoinAnewClasses course={course} />)}
            </div>
            

        </>
    )
}


export default JoinAClass;