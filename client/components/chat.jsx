import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { useInput } from "../hooks/inputHook";
const ENDPOINT = "http://127.0.0.1:8000";

const socket = socketIOClient(ENDPOINT);
export default function ChatComponent() {
  const [response, setResponse] = useState("");
  const {value: message, bind: bindMessage } = useInput('');
  const [chat, setChat] = useState([]);

  const submitMessage = (e) => {
    e.preventDefault()

    socket.emit('chatMessage', message);
  }

  useEffect(() => {
    socket.on("time", data => {
      setResponse(data);
    });

    socket.on('message', data => {
      chat.push(data);
    })
    // return () => socket.disconnect();

  }, []);

  return (
    <div>
      <p>
        It's <time dateTime={response}>{response}</time></p>
        <form>
          <input type="text" {...bindMessage}/>
          <button onClick={submitMessage}>Send</button>
        </form>
        {chat.map((v, i) => { return <div key={`chat${i}`}>{v}</div>})}
    </div>
 
  );
}