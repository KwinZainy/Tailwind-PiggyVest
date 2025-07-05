import "./Footer.css"
import Logo1 from "../assets/img/logo1.png"
import Logo2 from "../assets/img/logo2.png"
import Logo3 from "../assets/img/logo3.png"
import Logo4 from "../assets/img/logo4.svg"
import Logo5 from "../assets/img/logo5.svg"
import Logo6 from "../assets/img/logo6.svg"
import NavLogo from "../assets/img/navlogo.svg"
import FooterImg from "../assets/img/footer-img.avif"
import FacebookLogo from "../assets/img/facebook.svg"
import InstaLogo from "../assets/img/insta.svg"
import TwitterLogo from "../assets/img/twitter.svg"
import TiktokLogo from "../assets/img/tiktok.svg"
import YoutubeLogo from "../assets/img/youtube.svg"
const Footer = () =>{
    return (
        <>
        <div className=" max-w-[2020px] m-auto">
        <div class="featured-logo">
            <div class="f-head">
                <h1>As featured in</h1>
            </div>
            <div class="f-logo">
                <div className="f-logo">
                    <img style={{ width: '120px' }} src={Logo1} alt="Logo 1" />
                    <img style={{ width: '150px' }} src={Logo2} alt="Logo 2" />
                    <img style={{ width: '160px' }} src={Logo3} alt="Logo 3" />
                    <img style={{ width: '100px' }} src={Logo4} alt="Logo 4" />
                    <img style={{ width: '160px' }} src={Logo5} alt="Logo 5" />
                    <img style={{ width: '80px' }} src={Logo6} alt="Logo 6" />
                    </div>
            </div>
        </div>
       <div class="footer-top">
        <div class="footer1">
          <img src={NavLogo} alt="" />
          <img style={{width: '100px'}} src={FooterImg} alt="" />
        </div>
        <div class="footer2">
            <div class="line1">
            <h4>Products</h4>
            <a href="#">Piggybank</a>
            <a href="#">Invest</a>
            <a href="#">Safelock</a>
            <a href="#">Target Savings</a>
            <a href="#">Flex Naira</a>
            <a href="#">Flex Dollar</a>
         </div>
         <div class="line2">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">FAQs</a>
            <a href="#">Blog</a>
         </div>
         <div class="line3">
            <h4>Legal</h4>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Security</a>
         </div>
        </div>
        <div class="footer3">
            <div class="f-icons">
                <img src={FacebookLogo} alt="" />
                <img src={InstaLogo} alt="" />
                <img src={TwitterLogo} alt="" />
                <img src={TiktokLogo} alt="" />
                <img src={YoutubeLogo} alt="" />
            </div>
            <p>Tesmot house, Abdulrahman Okene close,<span> Victoria Island, Lagos, Nigeria.</span></p>
            <p>contact@piggyvest.com</p>
            <p>+234 700 933 9339</p>
        </div>
     </div>
         <hr />
     <div class="footer-bottom">
        <p>Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 9 years, our customers <span> have saved and invested billions of Naira that they would normally be tempted to spend.</span></p>
        <p>PV Capital Limited is a fund manager duly licensed by the Securities and Exchange <span> Commission (SEC) of Nigeria.</span></p>
        <h5>2016 - 2025 PiggyTech Global Limited - RC 1405222</h5>
        </div>
        </div>
        </>
    )
}
export default Footer