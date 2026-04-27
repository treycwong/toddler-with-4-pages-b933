import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ClassesPage } from './pages/ClassesPage'
import { TeachersPage } from './pages/TeachersPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
