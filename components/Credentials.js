import React from 'react'

export const Credentials = () => {
  const linkStyle= {
    color: 'grey',
    textDecoration: 'none'
  }

  return (
    <div style={{ lineHeight: '10px' }}>
      <p style={{ color: 'rgb(78, 78, 78)', fontWeight: 'bold' }}>Meltem Kilic</p>
      <a href="https://twitter.com/trilingualmel" target="_blank" style={linkStyle}>@trilingualmel</a>
      {/* {secondPage ? <p>Software Developer</p> : null} */}
    </div>
  )
}