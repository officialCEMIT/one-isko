import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { useInput } from "../hooks/inputHook";
const ENDPOINT = "http://127.0.0.1:8000";

const socket = socketIOClient(ENDPOINT);
export default function ChatComponent() {
  const [response, setResponse] = useState("");
  const {value: message, bind: bindMessage, reset: resetMessage } = useInput('');
  const [chat, setChat] = useState([]);

  const submitMessage = (e) => {
    e.preventDefault()
    resetMessage()
    socket.emit('chatMessage', message);
  }

  useEffect(() => {
    socket.on("time", data => {
      setResponse(data);
    });

    socket.on('message', data => {
      setChat(prev => [...prev, data])
    })
    // return () => socket.disconnect();

  }, []);

  const chatBoxStyle = {
    height: '250px',
    padding: '10px',
    backgroundColor: 'gray',
    overflowY: 'scroll',
    clear: 'both'
  }
  return (
    <div>
      <p>
        It's <time dateTime={response}>{response}</time></p>
        <form>
          <input type="text" {...bindMessage}/>
          <button onClick={submitMessage}>Send</button>
        </form>
        <div style={chatBoxStyle}>
          {chat.map((v, i) => {
            return <div key={`chat${i}`}>{v}</div>})}
        </div>
    </div>
 
  );
}