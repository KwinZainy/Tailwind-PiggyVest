import "./About.css"
import User from "../../assets/img/story-img.png"
import AppLogo from "../../assets/img/apple.png"


const About = () =>{
    return(
        <>
        <div>
        <div class="lady-story">
        <div class="story-img">
       <img src={User} alt="" />
       </div>
        <div class="story-text">
            <h1>Join 5+ million people who save <span> and invest with us</span></h1>
            <div class="story-links">
                <a href="#">
                    <img src={AppLogo} alt="" />
                    <p>Get on iphone</p>
                </a>
                <a href="#">
                    <img src="/play.png" alt="" />
                    <p>Get on Andriod</p>
                </a>
            </div>
        </div>
    </div>
    </div>
        </>
    )
}

export default About