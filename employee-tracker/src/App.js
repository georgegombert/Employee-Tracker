import React from 'react';
import EmployeeCard from "./components/EmployeeCard";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import './App.css';


class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  handleFormSubmit = event => {
    event.preventDefault();

    console.log("button Clicked");
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };
// d-flex justify-content-center
  render() {
    return (
      <>
        <NavBar></NavBar>
        <Wrapper>
            {this.state.employees.map(employee => (
              <EmployeeCard
                removeEmployee={this.removeEmployee}
                id={employee.id}
                key={employee.id}
                name={employee.name}
                image={employee.image}
                position={employee.position}
                department={employee.department}
                manager={employee.manager}
              />
            ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
