import "./Hero.css"
import Flower from "../../assets/img/flower-removebg-preview.png"
import App from "../../assets/img/app.png"
import Abmg1 from "../../assets/img/abmg1.png"
import Abmg2 from "../../assets/img/abmg2.png"
import Abmg3 from "../../assets/img/abmg3.png"
import Abmg4 from "../../assets/img/abmg4.png"
import Abmg5 from "../../assets/img/abimg5.png"
import Abmg6 from "../../assets/img/abmg6.png"
const Hero = () =>{
    return (
        <>
           <div class="hero">
        <div class="hero1">
            <a href="#" className=" w-[350px] font-bold">
                <img src={Flower} alt="" />
                <span>The 2024 Piggyvest Savings</span>
                Report </a>
            <h1>The Better Way to Save & Invest</h1>
            <p>Piggyvest helps over 5 million customers achieve their financial goals by helping them save and invest with ease.</p>
            <div class="link">
            <a href="#">
                <img src={App} alt="" />
                <span>Get on iphone</span>
            </a>
            <a href="#">
               <img src="/play.png" alt="" />
                <span>Get on Andriod</span>
            </a>
            </div>
        </div>
        <div class="hero2">
            <div class="relativeimg">
                <div class="absoluteimgs">
                    <div class="abmg1">
                       <img className="img-1 left-img" src={Abmg1} alt="" />
                       <img className="img-2 left-img" src={Abmg2} alt="" />
                       <img className="img-3 left-img" src={Abmg3} alt="" />
                    </div>
                    <div class="abmg2">
                      <img className="img-4 right-img" src={Abmg4} alt="" />
                      <img className="img-5 right-img" src={Abmg5} alt="" />
                      <img className="img-6 right-img" src={Abmg6} alt="" />
        
                    </div>
    
                </div>


            </div>
            
        </div>
    </div>
        </>
    )
}


export default Hero