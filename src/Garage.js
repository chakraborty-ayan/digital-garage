import React, { useState, useEffect } from "react";
import "./Garage.css";
function Garage() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const cars = localStorage.getItem("cars");
    if (cars) {
      setCars(JSON.parse(cars));
    }
  }, []);
  const addEntry = (e) => {
    e.preventDefault();
    console.log(cars);
    const newEntry = {
      DName: e.target.DName.value,
      Vno: e.target.Vno.value,
      inTime: e.target.inTime.value,
      outTime: e.target.outTime.value,
    };
    setCars([...cars, newEntry]);
    localStorage.setItem("cars", JSON.stringify([...cars, newEntry]));
  };
  return (
    <div  className="mainContainer">
      <h1>Parking Lot Manager</h1>
      <form onSubmit={addEntry}>
      <div className="formFields">
        <div>
        <label>Vehicle Number : </label>
        <input name="Vno"></input>
        </div>
        <div>
        <label>Driver Name : </label>
        <input name="DName"></input>
        </div>
        <div>
        <label>Checkin Time : </label>
        <input type="time" name="inTime"></input>
        </div>
        <div>
        <label>Checkout Time : </label>
        <input type="time" name="outTime"></input>
        </div>
        </div>
        <button type="submit">Create Entry</button>
        </form>
      <div>
        <table className="styled-table">
            <thead>
          <tr>
            <th>Vehicle Number</th>
            <th>Driver Name</th>
            <th>Checkin Time</th>
            <th>Checkout Time</th>
          </tr>
          </thead>
          <tbody>
          {cars.map((car) => {
            return (
              <tr>
                <td>{car.Vno}</td>
                <td>{car.DName}</td>
                <td>{car.inTime}</td>
                <td>{car.outTime}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Garage;
