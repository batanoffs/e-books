import Newsletter from './top/Newsletter';
import FooterTop from './top/FooterTop';
import FooterMid from './middle/FooterMid';
import FooterBot from './bottom/FooterBot';

const Footer = () => {
    return (
        <footer>
            {!window.location.pathname.includes('registracia') && <Newsletter />}
            <FooterTop />
            <FooterMid />
            <FooterBot />
        </footer>
    );
};

export default Footer;
