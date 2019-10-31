import React, { useEffect, useState } from "react";
import Form, {
  UiSchema,
  IChangeEvent,
  ErrorSchema
} from "react-jsonschema-form";
import { JSONSchema6 } from "json-schema";
import { Employee } from "./EmployeeRow";

const UpdateForm: React.SFC<Employee | undefined> = props => {
  const [employee, setEmployee] = useState<Employee | undefined>();
  const [editEmployee, setEditEmployee] = useState<boolean>();

  // const { editEmployee } = props;
  const schema: JSONSchema6 = {
    title: "Register an Account",
    type: "object",
    required: ["fullName", "age", "cityCode", "email", "salary"],
    properties: {
      id: {
        type: "number"
      },
      fullName: {
        type: "string",
        maxLength: 150
      },
      age: {
        type: "number",
        maximum: 75,
        minimum: 1
      },
      cityCode: {
        type: "string",
        maxLength: 3
      },
      email: {
        type: "string",
        format: "email"
      },
      salary: {
        type: "number"
      }
    }
  };
  const uiSchema: UiSchema = {
    "ui:order": ["id", "fullName", "age", "cityCode", "email", "salary"],
    id: {
      "ui:placeholder": "Id",
      "ui:label": "",
      "ui:disabled": true
    },
    fullName: {
      "ui:placeholder": "Full Name",
      "ui:label": "",
      "ui:maxLength": 5
    },
    age: {
      "ui:placeholder": "Age",
      "ui:label": ""
    },
    cityCode: {
      "ui:placeholder": "City Code",
      "ui:label": ""
    },
    email: {
      "ui:placeholder": "Email",
      "ui:label": ""
    },
    salary: {
      "ui:placeholder": "Salary",
      "ui:label": ""
    }
  };

  const handleSubmit = async (e: any) => {
    const res = await fetch("http://localhost:8080/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(e.formData)
    });

    let employeeList = await res.json();
    console.log(employeeList);
  };

  // function validate(formData, errors) {
  //   if (formData.pass1 !== formData.pass2) {
  //     errors.pass2.addError("Passwords don't match");
  //   }
  //   return errors;
  // }

  return (
    <div className="center main-container">
      {/* {isLoading && <Loading />} */}
      <div className="center form-container">
        <Form
          className="form column"
          schema={schema}
          uiSchema={uiSchema}
          // validate={validate}
          onSubmit={handleSubmit}
          // liveValidate={true}
        >
          <button className="button" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateForm;
