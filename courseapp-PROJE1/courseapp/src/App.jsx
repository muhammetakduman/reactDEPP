import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import { courses } from './component/data'
import Courses from './component/Courses'
import './css/course.css'

function App() {

  return (
    <div>
      <Header />
      <div className='course-main'>
        {
          courses?.map((course) => (
            <Courses key={course.id} course={course} />
          ))
        }
      </div>
    </div>
  )
}

export default App
