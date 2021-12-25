import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { CircularProgress } from '@material-ui/core';
import Table from "./table";
import axios from 'axios'
 
function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(result => {
      setData(result.data)
    })
  }, [])

  return data.length > 0 ? <Table data={data} initialPage={0}/>: <CircularProgress size={14} />;
}
 
ReactDOM.render(<App />, document.getElementById("root"));
