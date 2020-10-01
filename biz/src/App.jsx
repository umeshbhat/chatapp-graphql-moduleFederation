import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'
import { Container } from 'shards-react'
import './index.css'
import Chat from 'chat/Chat'
const App = () => (
  <Container>
    <h1>Chat</h1>
    <Chat />
  </Container>
)

ReactDOM.render(<App />, document.getElementById('app'))
