

function Navbar() {
     
    return ( 
        <nav className="navbar">
            <div className="nav-container">
                 <h1>My Dashboard</h1>
            <div className="search-container">
               <input type="search" placeholder="Search" className="search-content"/>
               <i className="material-symbols-outlined search-icon"></i>
            </div>
               
            </div>
        </nav>
    )
}


export default Navbar; 