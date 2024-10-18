import { Table } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import React, { useState } from "react";
import Update from "./Updatelist";
import { baseURL } from "../utils/constants";
import axios from "axios";

const Tasklist = ({ tasks, setUpdateUI }) => {

  const [task, setTask] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const updateTask = (task) => {
    setTask(task);
    setModalShow(true);
  };

  const deleteTask = (task) => {
    const id = task._id;
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };

  return (
    <div style={{ margin: "5rem auto", width: "39rem", textAlign: "center" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task, idx) => {
              return (
                <tr key={task._id}>
                  <td>{idx + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <PencilFill
                      style={{ cursor: "pointer", color: "green" }}
                      onClick={() => updateTask(task)}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Trash3Fill
                      style={{ cursor: "pointer", color: "green" }}
                      onClick={() => deleteTask(task)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {task && (
        <Update
          show={modalShow}
          task={task}
          setUpdateUI={setUpdateUI}
          onHide={() => {
            setModalShow(false);
            setTask(null);
          }}
        />
      )}
    </div>
  );
};

export default Tasklist;