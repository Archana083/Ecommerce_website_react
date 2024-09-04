import Footer from '../../component/Footer/Footer'
import { Outlet } from 'react-router'
import Navbar2 from '../../component/Navbar/Navbar2'

export const Layout = () => {
  return (
    <>
   <Navbar2/>
   <Outlet/>
   <Footer/>
    </>
  )
}