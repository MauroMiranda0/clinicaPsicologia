import { Outlet } from 'react-router-dom'
import TopNav from './TopNav.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
