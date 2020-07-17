import React from "react";
import employees from "../employees.json";

let filteredEmployees = [];

class Navbar extends React.Component {
  // Setting the component's initial state
  state = {
    employeeName: "",
    employeeFilter: "name"
  };

  handleInputChange = event => {
    console.log(event);
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
    employees.map(employee => {
      if(employee.name.toLocaleLowerCase().includes(this.state.employeeName.toLocaleLowerCase())){
        filteredEmployees.push(employee);
      }
    })
    console.log(filteredEmployees);
  };

  render() {
    console.log(filteredEmployees);
    return (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand" href="#">
          <img src="https://vignette.wikia.nocookie.net/workaholics/images/0/04/TelAmeriCorpLogo.png/revision/latest/scale-to-width-down/210?cb=20110610151434" width={120} height={40} alt="TeleAmeriCorp" />
        </a>
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="inputState"></label>
            <select id="inputState" name = "employeeFilter" className="form-control" onChange={this.handleInputChange}>
              <option value = "name" defaultValue>Name</option>
              <option value = "position">Position</option>
              <option value = "department">Department</option>
              <option value = "manager">Manager</option>
            </select>
          </div>
          <input className="form-control mr-sm-2" type="search" placeholder="Search Employees" aria-label="Search" onChange={this.handleInputChange} name="employeeName" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleFormSubmit}>Search</button>
        </form>
      </nav>
    )
  }
}

export default Navbar;