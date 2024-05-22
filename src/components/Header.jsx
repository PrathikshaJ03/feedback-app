import {Link} from 'react-router-dom'

function Header() {
  return (
    <header style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
      <div className="container">
        <Link to='/' style={{textDecoration: 'none', color: '#ff6a95'}}>
        <h2>Feedback UI</h2>
        </Link>
      </div>
    </header>
  )
}

export default Header
