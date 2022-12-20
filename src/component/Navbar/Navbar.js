import { Link } from "react-router-dom"
import Addquotes from "../Addquotes"
export const Navbar = () => {
  return (
  <nav>
    <link to='/'>Home</link>
    <link to='/Addquotes' >Add Quotes</link>
  </nav>
  )
}
