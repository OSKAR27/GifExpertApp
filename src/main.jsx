import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import {GifExpertApp} from "./GifExpertApp.jsx";

//eYc0hwrFfqGszqyHh3bZL6Gpkn5lRjd1
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
