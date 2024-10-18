import { useEffect, useState } from "react";
import AddTask from "./components/Addtask";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";
import Updatelist from "./components/Updatelist";
import axios from "axios";
import { baseURL } from "./utils/constants";

function App() {
  const [tasks,setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res)=>{
      console.log(res.data);
      setTasks(res.data);
    });
  },[updateUI]);
  return (
    <div>
      <Header />
      <AddTask setUpdateUI={setUpdateUI}/>
      <Updatelist />
      <Tasklist  tasks={tasks} setUpdateUI={setUpdateUI}/>
    </div>
  );
}

export default App;
