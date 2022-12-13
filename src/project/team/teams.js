import React from 'react'
import Team from './team'
import '../team/team.css'


export default function Teams() {
  return (
    <div className='container'>

      <div className="row">
        <h1 className="team-ttl">Our Team</h1>
      </div>

      <div className='row2' >
        <Team name='hossein'  role='programmer'/>
        <Team name='zahra'/>
        <Team name='ali'/>
        <Team name='hasan'/>
      </div>
    </div>
  )
}
