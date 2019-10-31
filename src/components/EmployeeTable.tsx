import React, { useEffect, useState } from "react";
import { EmployeeRow, Employee } from "./EmployeeRow";

// const x = [
//   {
//     id: 4,
//     fullName: "Jose Maria",
//     age: 20,
//     cityCode: "HAB",
//     email: "d@d.com",
//     salary: 2000
//   },
//   {
//     id: 5,
//     fullName: "Jose Jose",
//     age: 20,
//     cityCode: "HAB",
//     email: "d@d.com",
//     salary: 2000
//   },
//   {
//     id: 1,
//     fullName: "Juan Fernandez",
//     age: 29,
//     cityCode: "MEX",
//     email: "jfer@email.com",
//     salary: 3500
//   },
//   {
//     id: 2,
//     fullName: "Andre Montes",
//     age: 42,
//     cityCode: "CBJ",
//     email: "amon@email.com",
//     salary: 2700
//   },
//   {
//     id: 3,
//     fullName: "Phill Morris",
//     age: 37,
//     cityCode: "LAX",
//     email: "pmor@email.com",
//     salary: 6500
//   }
// ];

/**
 * Table that lists all the employees
 * @param props {TableProps}
 */
const EmployeeTable: React.SFC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const getEmployees = async () => {
    let res = await fetch("http://localhost:8080/api/employees/");
    console.log("res", res);
    let employeeList = await res.json();
    setEmployees(employeeList);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  // build the table head
  const getTableHead = () => (
    <thead>
      <tr>
        <th>ID</th>
        <th>Full Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Email</th>
        <th>Salary</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
  );

  const onDelete = async (id: number) => {
    let res = await fetch(`http://localhost:8080/api/employees?id=${id}`, {
      method: "DELETE"
    });
    console.log("res", res);
    let employeeList = await res.json();
    setEmployees(employeeList);
  };
  return (
    <table className="table">
      {getTableHead()}
      <tbody>
        {employees.map((employee: Employee) => {
          return (
            <EmployeeRow
              key={employee.id}
              employee={employee}
              deleteFn={onDelete}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
