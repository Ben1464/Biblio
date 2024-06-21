import React from 'react'
import '../styles/Footer.css'

const RavenDev = 'RavenDev'
function Footer() {
  return (
    <div className='container'>
      <p>© 2024 Bibliotech. All rights reserved.</p>
      <a href="https://benson14.vercel.app//" class="blinking-link">{RavenDev}</a>
    </div>
  )
}

export default Footer
