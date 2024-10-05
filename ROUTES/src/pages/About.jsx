import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>About</h1>
            <br />
            <hr />
            <Link style={{ marginRight: '10px' }} to='employee'>Çalışanlar Hakkında</Link>
            <Link to='company'>Sirket Hakkında</Link>

            <Outlet />
            {/* Parent componente outlet özelliği verildi böylelikle rerender edebilicek */}
        </div>
    )
}

export default About
