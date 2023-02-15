import React from "react";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import * as employeeService from "../services/task";

const AddTaskPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (task) => {
    employeeService
      .addTask(task)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.message[0]);
        }
      });
  };

  return (
    <div>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddTaskPage;
