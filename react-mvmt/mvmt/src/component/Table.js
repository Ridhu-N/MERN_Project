import React, { useState, useRef } from "react";
import Data from "./data.json";
import "./Table.css";
// import { PencilSquare, Trash3Fill, Upload } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Table() {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);
  return (
    <div className="tableWrap">
      <div>
        <AddMember setData={setData} />
        <form onSubmit={handleUpdate}>
          <table>
            <thead>
              <tr>
                <th>PRODUCT CATEGORY</th>
                <th>PRODUCT NAME</th>
                <th>PRODUCT ID</th>
                <th>PRODUCT COLOR</th>
                <th>GENDER</th>
                <th>PRIZE</th>
                <th>SIZE</th>
                <th>PRODUCT DESCRIPTION</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            {data.map((current) =>
              editState === current.id ? (
                <EditMember current={current} data={data} setData={setData} />
              ) : (
                <tr>
                  <td>{current.pcat}</td>
                  <td>{current.pname}</td>
                  <td>{current.pid}</td>
                  <td>{current.pclr}</td>
                  <td>{current.pgen}</td>
                  <td>{current.psize}</td>
                  <td>{current.prize}</td>
                  <td>{current.pdes}</td>
                  <td>
                    <button
                      type="button"
                      className="edit"
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => handleDelete(current.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
          <Link to="/adminmanage">
            <button>SUBMIT</button>
          </Link>
        </form>
      </div>
    </div>
  );
  function handleUpdate(event) {
    event.preventDefault();
    const pcat = event.target.elements.pcat.value;
    const pname = event.target.elements.pname.value;
    const pid = event.target.elements.pid.value;
    const pclr = event.target.elements.pclr.value;
    const pgen = event.target.elements.pgen.value;
    const psize = event.target.elements.psize.value;
    const prize = event.target.elements.prize.value;
    const pdes = event.target.elements.pdes.value;
    const updatedData = data.map((d) =>
      d.id === editState
        ? {
            ...d,
            pcat: pcat,
            pname: pname,
            pid: pid,
            pclr: pclr,
            pgen: pgen,
            psize: psize,
            prize: prize,
            pdes: pdes,
          }
        : d
    );
    setEditState(-1);
    setData(updatedData);
  }
  function handleEdit(id) {
    setEditState(id);
  }
  function handleDelete(id) {
    alert("The product with id "+ id + " is deleted " )
    const updatedData = data.filter((d) => id !== d.id);
    setData(updatedData);
  }
}

function EditMember({ current, data, setData }) {
  function handlePcat(event) {
    const pcat = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, pcat: pcat } : d
    );
    setData(updatedData);
  }
  function handlePname(event) {
    const pname = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, pname: pname } : d
    );
    setData(updatedData);
  }
  function handlePid(event) {
    const pid = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, pid: pid } : d
    );
    setData(updatedData);
  }
  function handlePclr(event) {
    const pclr = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, pclr: pclr } : d
    );
    setData(updatedData);
  }
  function handlePgen(event) {
    const pgen = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, pgen: pgen } : d
    );
    setData(updatedData);
  }
  function handlePsize(event) {
    const psize = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, psize: psize } : d
    );
    setData(updatedData);
  }
  function handlePrize(event) {
    const prize = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, prize: prize } : d
    );
    setData(updatedData);
  }
  function handlePdes(event) {
    const pdes = event.target.value;
    const updatedData = data.map((d) =>
      d.id === current.id ? { ...d, pdes: pdes } : d
    );
    setData(updatedData);
  }
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handlePcat}
          value={current.pcat}
          name="pcat"
          placeholder="Enter category"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handlePname}
          value={current.pname}
          name="pname"
          placeholder="Enter product name"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handlePid}
          value={current.pid}
          name="pid"
          placeholder="Enter product id"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handlePclr}
          value={current.pclr}
          name="pclr"
          placeholder="Enter product color"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handlePgen}
          value={current.pgen}
          name="pgen"
          placeholder="Enter gender"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handlePsize}
          value={current.psize}
          name="psize"
          placeholder="Enter product size"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handlePrize}
          value={current.prize}
          name="prize"
          placeholder="Enter prize"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handlePdes}
          value={current.pdes}
          name="pdes"
          placeholder="Enter description"
        />
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}

function AddMember({ setData }) {
  const pcatRef = useRef();
  const pnameRef = useRef();
  const pidRef = useRef();
  const pclrRef = useRef();
  const pgenRef = useRef();
  const psizeRef = useRef();
  const prizeRef = useRef();
  const pdesRef = useRef();
  function handleValues(event) {
    event.preventDefault();
    const pcat = event.target.elements.pcat.value;
    const pname = event.target.elements.pname.value;
    const pid = event.target.elements.pid.value;
    const pclr = event.target.elements.pclr.value;
    const pgen = event.target.elements.pgen.value;
    const psize = event.target.elements.psize.value;
    const prize = event.target.elements.prize.value;
    const pdes = event.target.elements.pdes.value;
    const newMember = {
      id: 8,
      pcat,
      pname,
      pid,
      pclr,
      pgen,
      psize,
      prize,
      pdes,
    };
    setData((prevData) => prevData.concat(newMember));
    pcatRef.current.value = "";
    pnameRef.current.value = "";
    pidRef.current.value = "";
    pclrRef.current.value = "";
    pgenRef.current.value = "";
    psizeRef.current.value = "";
    prizeRef.current.value = "";
    pdesRef.current.value = "";
  }
  return (
    <form className="addform" onSubmit={handleValues}>
      <input
        type="text"
        name="pcat"
        placeholder="Enter product category"
        ref={pcatRef}
      />
      <input
        type="text"
        name="pname"
        placeholder="Enter product name"
        ref={pnameRef}
      />
      <input
        type="text"
        name="pid"
        placeholder="Enter product id"
        ref={pidRef}
      />
      <input
        type="text"
        name="pclr"
        placeholder="Enter product color"
        ref={pclrRef}
      />
      <input
        type="text"
        name="pgen"
        placeholder="Enter product gender"
        ref={pgenRef}
      />
      <input
        type="text"
        name="psize"
        placeholder="Enter product size"
        ref={psizeRef}
      />
      <input
        type="text"
        name="prize"
        placeholder="Enter product prize"
        ref={prizeRef}
      />
      <input
        type="text"
        name="pdes"
        placeholder="Enter product description"
        ref={pdesRef}
      />
      <button>Add</button>
    </form>
  );
}
export default Table;
