import { Link } from "react-router-dom"
// A simple component to display a 404 Not Found message and a link to go back to the home page
function NotFound() {
  return (
    <div className="nf-root">
      <h1 className='nf-title'>Sorry — the page you were looking for was not found.</h1>
      // A link to navigate back to the home page
      <Link to='/' className="nf-btn">Back to Home</Link>
    </div>
  )
}

export default NotFound
