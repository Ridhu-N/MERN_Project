// import { Form, Button, Modal } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { editTaskInList } from "../slices/taskSlice";
// import { baseURL } from "../utils/constants";
// import axios from "axios";

// function Update(props) {
//  const { taskSelected } = useSelector((state) => state.tasks);
//   const [utitle, setUTitle] = useState("");
//   const [udescription, setUDescription] = useState("");
//   const [id, setUId] = useState("");
//   // const dispatch = useDispatch();
//  console.log(props)
//   useEffect(() => {
//     if (Object.keys(props).length !== 0) {
//       setUId(props.id);
//       setUTitle(props.title);
//       setUDescription(props.description);
//     }
//   }, [props.task]);
//   const updateTask = (e) => {
//     props.onHide();
//     axios
//       .put(`${baseURL}/update/${id}`, {
//         task: { title: utitle, description: udescription },
//       })
//       .then((res) => {
//         console.log(res.data);
//         props.setUpdateUI = ((prevState) =>  !prevState);
//         props.setUpdateUI=((prevState)=>!prevState)
//       });
//   };
//   return (
//     <Modal
//       {...props}
//       size="md"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title
//           id="contained-modal-title-vcenter"
//           style={{ fontWeight: "600", color: "blue" }}
//         >
//           Update Data
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label style={{ fontWeight: "bold", color: "Black" }}>
//               Task Title
//             </Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Task Title"
//               value={utitle}
//               onChange={(e) => setUTitle(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label style={{ fontWeight: "bold", color: "black" }}>
//               Task Description
//             </Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Task Description"
//               value={udescription}
//               onChange={(e) => setUDescription(e.target.value)}
//             />
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button
//           style={{
//             backgroundColor: "blue",
//             fontWeight: "bold",
//             border: "none",
//           }}
//           onClick={(e) => updateTask(e)}
//         >
//           Update
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default Update;

import { Form, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/constants";
import axios from "axios";

function Update(props) {
  const [utitle, setUTitle] = useState("");
  const [udescription, setUDescription] = useState("");
  const [uid, setUId] = useState("");

  useEffect(() => {
    if (props.task) {
      setUId(props.task._id);
      setUTitle(props.task.title);
      setUDescription(props.task.description);
    }
  }, [props.task]);

  const updateTask = (e) => {
    e.preventDefault();
    axios
      .put(`${baseURL}/update/${uid}`, {
        title: utitle,
        description: udescription,
      })
      .then((res) => {
        console.log(res.data);
        props.setUpdateUI((prevState) => !prevState);
        props.onHide();

        // Set updated values here
        //  console.log(res.data.title);
        setUTitle(res.data.title);
        setUDescription(res.data.description);
        setUId(res.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontWeight: "bold", color: "green" }}
        >
          Update Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold", color: "green" }}>
              Task Title
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Task Title"
              value={utitle}
              onChange={(e) => setUTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ fontWeight: "bold", color: "green" }}>
              Task Description
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Task Description"
              value={udescription}
              onChange={(e) => setUDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{
            backgroundColor: "green",
            fontWeight: "bold",
            border: "none",
          }}
          onClick={(e) => updateTask(e)}
        >
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Update;