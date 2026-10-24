import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { MissionPage } from './pages/MissionPage'
import { StoriesPage } from './pages/StoriesPage'
import { StoryDetailPage } from './pages/StoryDetailPage'
import { ContactPage } from './pages/ContactPage'
import { EveryKidPage } from './pages/EveryKidPage'
import { ForTheParentsPage } from './pages/ForTheParentsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mission" element={<MissionPage />} />
          <Route
            path="programs"
            element={<Navigate to="/programs/every-kid-deserves-it" replace />}
          />
          <Route
            path="programs/every-kid-deserves-it"
            element={<EveryKidPage />}
          />
          <Route path="programs/for-the-parents" element={<ForTheParentsPage />} />
          <Route path="news" element={<StoriesPage />} />
          <Route path="news/:slug" element={<StoryDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="donate" element={<Navigate to="/" replace />} />
          <Route path="volunteer" element={<Navigate to="/" replace />} />
          <Route path="stories" element={<Navigate to="/news" replace />} />
          <Route path="events" element={<Navigate to="/news" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
