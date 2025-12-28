import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RecipeProvider } from './context/RecipeContext'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import RecipesPage from './pages/RecipesPage'
import RecipePage from './pages/RecipePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import AdminPage from './pages/AdminPage'
import './App.css'

function App() {
  return (
    <RecipeProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </Router>
    </RecipeProvider>
  )
}

export default App
