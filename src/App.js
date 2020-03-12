import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./App.css";


function App() {
  const columns = useMemo(
    
    () => [
      {
        Header: "Employee",
        columns: [
          {
            Header: "Image",
            accessor: "picture.large",
            Cell:({cell:{value}})=>{
              return(
                <>
                <img src ={value} alt="profile thumbnail"/>
                </>
              )
            }
          },
          {
            Header: "First Name",
            accessor: "name.first"
          },
          {
            Header:"Last Name",
            accessor:"name.last"
          }
        ]
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Language",
            accessor: "show.language"
          },
         
          
            
          {
            Header: "Status",
            accessor: "show.status"
          }
        ]
      }
    ],
    []
  );
  console.log(columns)

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://randomuser.me/api/?results=50");
      setData(result.data.results);
      
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
