import React from "react";
// import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img className="card-img-top" src={props.image} style={{ height: '22rem' }} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={{ height: '4rem' }}><strong>Position:</strong> {props.position}</li>
        <li className="list-group-item" style={{ height: '4rem' }}><strong>Department:</strong> {props.department}</li>
        <li className="list-group-item" style={{ height: '4rem' }}><strong>Manager:</strong> {props.manager}</li>
      </ul>
      <div className="card-body d-flex justify-content-center">
        <a href="#" className="btn btn-primary" style={{ height: '2.5rem' }}>Edit Employee</a>
        <a onClick={() => props.removeEmployee(props.id)} className="btn btn-danger ml-1" style={{ height: '2.5rem' }}>Fire!</a>
      </div>
    </div>
  );
}

export default EmployeeCard;