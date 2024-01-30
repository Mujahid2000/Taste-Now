
import './Footer.css';  

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img src="https://i.ibb.co/YhT2MvH/footer.png" alt="Logo" className='footerLogo' />
                <div className='social'>
                <img src="https://i.ibb.co/Pc72qQL/facebook.png" alt="Logo" />
                <img src="https://i.ibb.co/cL75bJj/Group.png" alt="Logo" />
                <img src="https://i.ibb.co/yd95ptR/twiteer.png" alt="Logo" />
                <img src="https://i.ibb.co/j3JGmFW/youtube.png" alt="Logo" />
                </div>
            </div>
            <div className='footerText'>
            <div className='div1'>
            <ul className="footer-list">
                <li><div>Seslendirme ve Alt Jazz</div></li>
                <li><div>Media Market</div></li>
                <li><div>Gillie</div></li>
                <li><div>Size Last</div></li>
            </ul>
            <ul className="footer-list">
                <li><div>Self Betimes</div></li>
                <li><div>Yatırımcı İlişkileri</div></li>
                <li><div>Basal Himmler</div></li>
            </ul>
            </div>
            <div className='div2'>
            <ul className="footer-list">
                <li><div>Yard Market</div></li>
                <li><div>Is İmkanları</div></li>
                <li><div>Car Tercihleri</div></li>
            </ul>
            <ul className="footer-list">
                <li><div>Hedge Karla</div></li>
                <li><div>Mullein Koşulları</div></li>
                <li><div>Autumnal Bulgier</div></li>
            </ul>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
