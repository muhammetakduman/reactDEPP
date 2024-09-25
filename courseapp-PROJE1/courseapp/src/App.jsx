import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import { courses } from './component/data'
import Courses from './component/Courses'

function App() {

  return (
    <div>
      <Header />
      {
        courses?.map((course) => (
          <Courses key={course.id} course={course} />
        ))
      }
    </div>
  )
}

export default App
