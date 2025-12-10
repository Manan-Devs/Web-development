

function Navbar() {
     
    return ( 
        <nav className="navbar">
            <div className="nav-container">
                <h1>My Dashboard</h1>
               <input type="search" placeholder="Search" className="search-content" style={{height:'18px', width: '150px', fontSize:'16px', backgroundColor:'white', border:'none'}} />
            </div>
        </nav>
    )
}


export default Navbar