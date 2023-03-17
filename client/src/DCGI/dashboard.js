import './dashboard.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faSchool,
    faChalkboardUser
} from '@fortawesome/free-solid-svg-icons';


function DahsboardClasses(data) {
    console.log("bob")
    console.log(data.course.rows)
    function set({ target }) {
        const bob = target.id.split("||")
        var panel = document.getElementById("pal||" + bob[1])
        console.log(panel)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            target.textContent = "View Details"
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            target.textContent = "Close"
        }

    }
    const rando = Math.floor(Math.random() * data.course.rows[0].maximum_capacity + 1)
    const tittle = data.course.rows[0].title.split(",")
    var day
    const sched = data.course.rows[0].schedule.split(" ")
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
                    <button className='dashboardbutton' id={"bt||"+tittle[0]} onClick={set}>Look At Class</button>
                </div>

            </div>
            <div className="panel" id={"pal||"+tittle[0]}>
                <hr className='line1'></hr>
                <div className='lr'>
                    <div className='panel-left'>
                        <span className='panel-tittle'>Introduction: </span>
                        <p >{data.course.rows[0].description}</p>
                    </div>
                    <div className='panel-right'>
                        <p className='numberOfStudents'><span>{rando}/{data.course.rows[0].maximum_capacity}</span></p>
                    </div>
                </div>
                <div className='panel-bottom'>
                    <p className='panel-mt'>Classroom Schedule: <span className='panel-black'>{day+": "+sched[1]} </span></p>
                    <p className='panel-mt'>Credit Hours: <span className='panel-black' >{data.course.rows[0].credit_hours}</span></p>
                    <p className='panel-mt'>Tuition Cost: <span className='panel-black'>$ {data.course.rows[0].tuition_cost}.00</span></p>
                </div>
            </div>
        </>
    )
}

function MainScreen() {
    const [courses, setCourses] = useState([])



    useEffect(() => {

        fetch("/courses", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },

        }).then((res) => res.json())
            .then(data => {
                
                setCourses(data.courses)
            }).catch((error) => {
                console.log(error)
            })

    }, [])

    useEffect(() =>{
        fetch("/courses", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => res.json())
            .then(data => {
                console.log(data)
        }) .catch((error) => {
            console.error(error)
          })
    })

    return (
        <>
            <div className='userTittle'>
                <p className='changingtittle'>Dashboard</p>
                <hr className='line'></hr>
            </div>

            <div className='classes'>

                {courses.map(course => <DahsboardClasses course={course} />)}
            </div>
            <div className='join'>
                <FontAwesomeIcon icon={faPlus} className="icon" />
            </div>



        </>
    )
}


export default MainScreen;