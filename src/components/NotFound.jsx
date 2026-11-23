import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main role="alert">
      <h1>404 - Page Not Found</h1>
      <p>The requested page does not exist.</p>
      <Link to="/dashboard">Back to Dashboard</Link>
    </main>
  );
}

export default NotFound;