import NavBar from '../NavBar';
import Footer from '../Footer';
import Error from './Error';

export default function Wrapper ({ children }) {
  return (
    <div className='site-visual-organizer'>
      <Error />
      <div className='main-site-size-controller'>
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
