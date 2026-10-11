import { Outlet } from 'react-router-dom'
import Navebar from '../Navebare/Navebar.jsx'

export default function Layout() {
  return (
    <>
      <Navebar />
      <Outlet />
    </>
  )
}