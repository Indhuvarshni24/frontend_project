import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './Form.jsx'
import Apple from './Apple.jsx'
import Book from './Book.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form/>
    <Apple/>
    <Book/>
  </StrictMode>,
)
