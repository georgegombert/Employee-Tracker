import React from "react"


function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand" href="#">
        <img src="https://vignette.wikia.nocookie.net/workaholics/images/0/04/TelAmeriCorpLogo.png/revision/latest/scale-to-width-down/210?cb=20110610151434" width={120} height={40} alt="TeleAmeriCorp" />
      </a>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search Employees" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  )
}

export default Navbar;