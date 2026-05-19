import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { MissionPage } from './pages/MissionPage'
import { ProgramsPage } from './pages/ProgramsPage'
import { DonatePage } from './pages/DonatePage'
import { VolunteerPage } from './pages/VolunteerPage'
import { StoriesPage } from './pages/StoriesPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mission" element={<MissionPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="news" element={<StoriesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="stories" element={<Navigate to="/news" replace />} />
          <Route path="events" element={<Navigate to="/news" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
