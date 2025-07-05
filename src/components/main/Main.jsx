import Phone1 from "../../assets/img/phone1.png"
import Phone2 from "../../assets/img/phone2.png"
import Phone3 from "../../assets/img/firstp.avif"
import Phone4 from "../../assets/img/secondp.avif"
import Phone5 from "../../assets/img/thirdp.avif"
import Phone6 from "../../assets/img/iPhone 14 - 1.png" 
import "./Main.css"

const Main = () =>{
    return (
        <>
            <main className=" max-w-[2020px] m-auto">
        <div class="main-head">
            <h1>Many ways to build your savings</h1>
            <p>Earn 12%-22% when you save with any of these PiggyVest plans.</p>
        </div>
          <div class="main-box1">
            <div class="box1">
                <h3>Automated Savings</h3>
                <p>Build a dedicated savings faster on your terms, automatically or manually.</p>
                <div class="box-img1">
                  <p>Piggybank</p>
                  <img src={Phone1} alt="" />
                </div>
            </div>
            <div class="box2">
                <h3>Fixed Savings</h3>
                <p>Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.</p>
                <div class="box-img2">
                    <p>Safelock</p>
                    <img src={Phone2} alt="" />
                </div>
            </div>
          </div>
          <div class="main-box2">
            <div class="box3">
                <h3>Goal-oriented Savings</h3>
                <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
                <div class="box-img3">
                    <p>Target Savings</p>
                    <img src={Phone3} alt="" />
                </div>
            </div>
            <div class="box4">
                <h3>Flex Naira</h3>
                <p>Save, transfer, manage, organise, and withdraw your money at any time.</p>
                <div class="box-img4">
                    <p>Flex Naira</p>
                     <img src={Phone4} alt="" />
                </div>
            </div>
          </div>
          <div class="main-box3">
            <div class="box5">
                <h3>Flex Dollar</h3>
                <p>Save and grow your money in foreign currencies such as Dollars. </p>
                <div class="box-img5">
                    <p>Flex Dollar</p>
                     <img src={Phone5} alt="" />
                </div>
            </div>
            <div class="box6">
                <h3>House Money</h3>
                <p>Plan for your rent and household expenses</p>
                <div class="box-img6">
                    <p>House Money</p>
                   <img src={Phone6} alt="" />
                </div>
            </div>
          </div>    
    </main>
        </>
    )
}

export default Main