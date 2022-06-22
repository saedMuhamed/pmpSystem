// import { FaExclamationTriangle } from 'react-icons/fa';
import PageNotFound from '../assets/404.svg'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <div className='text-primary' size='25px'>
        <img src={PageNotFound} alt='image404' />
      </div>
      <p className='lead'>Sorry, this page does not exist</p>
      <Link to='/' className='btn btn-primary'>
        Go Back
      </Link>
    </div>
  );
}