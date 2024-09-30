import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Chatpage = () => {
    const [chats,setChats]=useState([])
   const  fectchChats=async()=>{
       const {data}=await axios.get("/api/chat");
       setChats(data)
       console.log(data);
    }
    useEffect(()=>{
        fectchChats();
    },[]);
  return (


        <div >
            {chats.map((chat)=>(<div key={chat._id}>{chat.chatName}</div>))}
            </div>
  );
}
