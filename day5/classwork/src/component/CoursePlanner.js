import React,{useState} from 'react'
import './CoursePlanner.css'
import CourseCard from './CourseCard'

const CoursePlanner = () => {
    const [courseData, setterCourseData] = useState([])

    const onClickHandler = () => {
        // extract course name val
        const courseName = document.getElementById('course-name').value;
        // extract hours val
        const courseHour = document.getElementById('course-hours').value;
        // create obj with name and hrs
        const newCourseData = {
            name: courseName,
            hours : parseInt(courseHour)
        }

        // update courseData by pushing new courseinfo
        setterCourseData([...courseData, newCourseData])
    }

    return (
        <>
            <div style = {{textAlign: 'center'}}>
                <h2>PLAN YOUR COURSE</h2>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <input id='course-name' type='text' />
                    <input id='course-hours' type='number' />
                    <button 
                        style={{
                            color:'#ffffff', backgroundColor :'#000000', padding:'8px', borderRadius:'0.4rem'
                            }} 
                        onClick={onClickHandler()} >
                        ADD</button>
                </div>
                    {courseData.map((course,index) =>(
                        <CourseCard name={course.name} hour={course.hour} key={index}/>
                    ))}
            </div>
        </>
    )
}

export default CoursePlanner;
