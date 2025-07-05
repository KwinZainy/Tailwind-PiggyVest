import Padlock from "../../assets/img/padlock.svg"
import "./Section.css"


const Section = () =>{
    return (
        <>
         <section className=" max-w-[2020px] m-auto">
        <div class="section-img">
            <img src={Padlock} alt="" />
        </div>
        <div class="section-texts">
            <h3>Your security is our priority</h3>
            <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
            <a href="#">More on our security measures</a>
        </div>
    </section>
        </>
    )
}


export default Section