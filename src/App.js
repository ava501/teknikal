import logo from './logo.svg';
import './App.css';
import Users from './users.json'
import Table from "./Table";
import React, { useEffect, useState } from "react";

function App() {
  const [query, setQuery]= useState("");

  const keys =["id","user id","title","completed"]

  const search = (data)=>{
    return data.filter(item=>item.title.toLowerCase().includes(query));
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search.."
        classname="search" 
        onChange={(e)=> setQuery(e.target.value)}
      />
      <Table data={search(Users)}/>
    </div>
  );
}

export default App;
