import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";
import * as taskService from "../services/task";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const EmployeesTable = ({
  tasks,
  onDeleteTask,
  initialValue,
  onUpdateChanged,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox
                  name="completed"
                  {...label}
                  checked={task.completed}
                  onChange={() => onUpdateChanged(task.id)}
                />
              </TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>
                <Link to={`/tasks/${task.id}`}>
                  <IconButton>
                    <ArrowForwardIcon />
                  </IconButton>
                </Link>
                <Link to={`/tasks/${task.id}/edit`}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton onClick={() => onDeleteTask(task.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesTable;
