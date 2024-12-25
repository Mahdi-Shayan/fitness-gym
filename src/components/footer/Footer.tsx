
// Image
import logo from '../../assets/images/Logo.png'

// Style
import './footer.scss';


function Footer() {
  return (
    <>
      <footer>
        <div className="left-side">
          <img src={logo} alt="logo" className="logo" />
          <p className="des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            neque suscipit eligendi ex minus perferendis voluptas maiores
            repellendus velit adipisci quisquam.
          </p>
          <h5>&#169; Evogym All Rights Reserved.</h5>
        </div>
        <div className="links">
          <p className="header">Links</p>
          <p className="link">Massa orci senectus</p>
          <p className="link">Et gravide id et etiam</p>
          <p className="link">Ullamcorper vivamus</p>
        </div>
        <div className="contact-us">
          <p className="header">Contact Us</p>
          <p className="des">Tempus metus mattis risus volutpat egestas.</p>
          <div className="phone">(333)425-6825</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
