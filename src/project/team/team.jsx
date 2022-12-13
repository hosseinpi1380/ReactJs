import React from 'react'

export default function Team({name, role='co-pilor', img}) {
  return (
    <div className="card">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="desc">
            <h1>{name}</h1>
            <h4>{role}</h4>
        </div>
    </div>
  )
}
