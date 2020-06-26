import Head from 'next/head'
import React, { useState } from "react";
import { useInput } from '../hooks/inputHook';
import MainLayout from '../layouts/MainLayout';

import ChatComponent from '../components/chat'

export default function Home() {
  const [loadClient, setLoadClient] = useState(true);

  return (
    <MainLayout>
      <h1>Hello There</h1>
      <button onClick={() => setLoadClient(prevState => !prevState)}>
        { loadClient ? 'Exit Chat': 'Enter Chat'}
      </button>
      { loadClient ? <ChatComponent/>: null}
    </MainLayout>
  )
}