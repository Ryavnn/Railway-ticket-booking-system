import '../App.css'

function Navbar() {
  return (
    <>
      <nav className='nav-bar'>
        <ul>
          <li className='logo'>GREEN<span>LINE</span></li>
          <li className='nav-items'>Tours</li>
          <li className='nav-items'>About us</li>
          <li className='nav-items'>Register</li>
          <li className='login-nav-btn'>Login</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar