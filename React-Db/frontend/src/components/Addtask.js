import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { addTaskToList } from "../slices/taskSlice";
import axios from "axios";
import { baseURL } from "../utils/constants";
const AddTask = ({setUpdateUI}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const dispatch = useDispatch();
  const addTask = (e) => {
    e.preventDefault();
    console.log(title, description);
    // dispatch(addTaskToList({ title, description }));
    axios
      .post(`${baseURL}/save`, {
        task: { title: title, description: description },
      })
      .then((res) => {
        setTitle("");
        setDescription("");
        setUpdateUI((prevstate)=>!prevstate)
      });
  };
  return (
    <div className="container w-50 mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold", color: "Blue" }}>
            Task Title
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold", color: "Blue" }}>
            Task Description
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <div style={{ float: "right" }}>
          <Button
            onClick={(e) => addTask(e)}
            style={{
              backgroundColor: "blue",
              border: "none",
              fontWeight: "bold",
            }}
            type="submit"
          >
            Add Task
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddTask;
