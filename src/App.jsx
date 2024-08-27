
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import PreviewPage from './pages/PreviewPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Overview from './pages/Dashboard/pages/Overview'
import Skills from './pages/Dashboard/pages/Skills'
import DashboardLayout from './pages/Dashboard/layouts/index'
import Bio from './pages/Dashboard/pages/Bio'
import Experiences from './pages/Dashboard/pages/Experiences'
import Achievements from './pages/Dashboard/pages/Achievements'
import Projects from './pages/Dashboard/pages/Projects'
import AddExperience from './pages/Dashboard/pages/Add-new/AddExperience'
import AddAchievement from './pages/Dashboard/pages/Add-new/AddAchievement'
import Education from './pages/Dashboard/pages/Education'
import AddEducation from './pages/Dashboard/pages/Add-new/AddEducation'
import Licenses from './pages/Dashboard/pages/Licenses'
import AddLicense from './pages/Dashboard/pages/Add-new/AddLicense'
import AddBio from './pages/Dashboard/pages/Add-new/AddBio'
import AddSkill from './pages/Dashboard/pages/Add-new/AddSkill'
import AddProjects from './pages/Dashboard/pages/Add-new/AddProjects'


function App() {
  const router = createBrowserRouter([
   

    { path: "login", element: <Login /> },

    { path: "signup", element: <SignUp /> },



    { path: "/", element: <PreviewPage /> },
  ])



  return <RouterProvider router={router} />

}

export default App
