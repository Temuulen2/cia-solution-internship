
import React from 'react'

const BottomBar = () => {
  return (
    <div style={{
        display:"flex",
  alignItems:"center",
  justifyContent:"space-between", // element-үүдийг дэлгэцийн хоёр талд
  height: "60px",
  padding: "0 2rem",
  borderBottom: "1px solid #eaeaea"
    }}>
        {/* Logo + CIA Solution */}
  <a href="/" style={{display:"flex", alignItems:"center", gap:"0.5rem", textDecoration:"none", color:"#000"}}>
    <img src="/logo.webp" alt="CIA Logo" style={{width:"30px", height:"30px"}}/>
    <span style={{fontWeight:"bold", fontSize:"1.2rem"}}>CIA Solution</span>
  </a>
  {/* Navigation links */}
  <div style={{display:"flex", gap:"1.5rem"}}>
    <a href="/" style={{ textDecoration: "none", color: "#555" }}>Privacy Policy</a>
    <a href="/" style={{ textDecoration: "none", color: "#555" }}>Terms of Service</a>
    
  </div>
  <div>
    <a href="/" style={{ textDecoration: "none", color: "#555" }}>© 2026 CIA Solution LLC. All rights reserved.</a>
  </div>

    </div>
  )
}

export default BottomBar
