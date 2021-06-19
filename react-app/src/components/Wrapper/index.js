import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Wrapper ({ children }) {
  return (
    <div className='site-visual-organizer'>
      <div className='main-site-size-controller'>
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
