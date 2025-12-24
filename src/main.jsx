import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './main.scss'
import App from './components/App'
import Avatar from './components/Avatar'
import Contacts from './components/Contacts'
import MapFilterReduce from './components/MapFilterReduce'


createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/avatar" element={<Avatar imgURL="https://picsum.photos/id/237/250" />} />
      <Route path="/my-contact" element={<Contacts />} />
      <Route path="/map-filter-reduce" element={<MapFilterReduce />} />
    </Routes>
  </HashRouter>,
)
