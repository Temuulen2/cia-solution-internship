import React from "react";

const Header = () => {
  return (
    // <header style={{display:"flex", height: "55px", padding: "0", borderBottom: "1px solid #eaeaea", alignItems: "center", alignContent: "center", borderColor: "lab(90.952% 0 -.0000119209)"}}>

    //     <div style={{alignItems:"center", display: "flex", height: "100%", padding: "0 1rem" }}>
    //         <a href="/" style ={{display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none"}}>
    //             <img src="/logo.webp" alt="CIA Logo" style={{width:"25px", height: "25px"}}/>
    //             <span style={{fontWeight: "bold", fontSize: "1.2rem", color:"black"}}>CIA Solution</span>
    //         </a>
    //     </div>
    //     <div className = "main-topics" style = {{display: "flex", gap: "1rem", fontSize: "1rem", color: "lab(90.952% 0 -.0000119209)"}}>
    //         <a href="/">Project</a>
    //         <a href="/">Our Services</a>
    //         <a href="/">About CIA Solution</a>

    //     </div>
    //     <div className = "language-select">
    //         <button style={{display:"flex", alignItems: "center", background: "white", gap: "0.5rem", borderRadius:"5px"}}>
    //             <img src="/globe.svg" alt="language-logo" style={{height:"15px", width:"15px"}} />
    //             English
    //         </button>
    //     </div>
    //     <button style={{background: "white", borderRadius:"5px"}}>
    //         console
    //     </button>
    // </header>
    <header style={{
      position: "sticky",
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
    <a href="/" style={{ textDecoration: "none", color: "#555" }}>Project</a>
    <a href="/" style={{ textDecoration: "none", color: "#555" }}>Our Services</a>
    <a href="/" style={{ textDecoration: "none", color: "#555" }}>About CIA Solution</a>
  </div>

  {/* Language + Console button */}
  <div style={{display:"flex", gap:"1rem"}}>
    <button style={{display:"flex", alignItems:"center", gap:"0.5rem", border: "none", padding:"0.3rem 0.6rem", background: "white"}}>
      <img src="/globe.svg" alt="language" style={{width:"15px", height:"15px"}} />
      English
    </button>

    <button style={{borderRadius:"5px", padding:"0.3rem 0.6rem", background:"white", border:"1px solid #eaeaea"}}>console</button>
  </div>
</header>

  );
};

export default Header;
