import './styles/style.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteApp from './compo nents/NoteApp';

const root = createRoot(document.getElementById('root'));
root.render(<NoteApp />);
