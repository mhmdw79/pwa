import React, { useEffect, useState } from 'react'
import {Table} from "react-bootstrap"
import axios from "axios"
function Posts() {
  const [data,setData] = useState([])
  const [mode,setMode] = useState("online")
    console.log(data)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
      const rese = res.data
      setData(rese)
      localStorage.setItem("users",JSON.stringify(rese))
    }).catch(err=>{
      setMode("offline")
      const userscache = localStorage.getItem("users")
      setData(JSON.parse(userscache))
    })
      
    
    
  },[])
  return (
    <>
    <div>
      {mode === "offline" && "you are in offline mode"}
    </div>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      {data.map(post=>(
        <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.name}</td>
        </tr>
      ))}
    </tbody>
  </Table>
  </>
  )
}

export default Posts
