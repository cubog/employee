import React from "react";
import { Link } from "react-router-dom";

interface RowProps {
  employee: Employee;
  deleteFn: (id: number) => void;
}
export interface Employee {
  id: number;
  fullName: string;
  age: number;
  cityCode: string;
  email: string;
  salary: number;
}

/**
 * Table row component
 * @param props {Employee}
 */
export const EmployeeRow: React.FC<RowProps> = props => {
  const { employee, deleteFn } = props;
  return (
    <tr key={employee.id}>
      <td>{employee.id}</td>
      <td>{employee.fullName}</td>
      <td>{employee.age}</td>
      <td>{employee.cityCode}</td>
      <td>{employee.email}</td>
      <td>{employee.salary}</td>
      <td>
        <Link to="/update">Update</Link>
      </td>
      <td>
        <button className="delete-button" onClick={() => deleteFn(employee.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
