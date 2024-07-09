import Newsletter from './Newsletter';
import FooterTop from './FooterTop';
import FooterMidSection from './FooterMidSection/FooterMidSection';
import FooterBot from './FooterBot';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Newsletter />
            <FooterTop />
            <FooterMidSection />
            <FooterBot />
        </footer>
    );
};

export default Footer;
