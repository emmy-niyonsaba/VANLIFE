import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="nf-root">
      <h1 className='nf-title'>Sorry — the page you were looking for was not found.</h1>
      <Link to='/' className="nf-btn">Back to Home</Link>
    </div>
  )
}

export default NotFound
