import React from 'react'
import { MdPersonOutline } from "react-icons/md";
const SignIn = () => {
        
  return (
    <div>
        <section>
            <nav>
            <main>Login</main>
            <main><MdPersonOutline/></main>
            </nav>
            <nav>Securely login to your piggyvest</nav>
            <nav>
                <main>
                    <label htmlFor="Email/Phone Number"></label>
                    <input type="text" placeholder='08123******' />
                </main>
                <main>
                    <label htmlFor="Your password"></label>
                    <input type="text" placeholder='********' />
                </main>
            </nav>
            <nav>
                <button>Login</button>
            </nav>
            <nav>
                <p>Don't have an account? Register!</p>
                <p>Forgot Password? Tap Here!</p>
                <p>Back</p>
            </nav>
        </section>
    </div>
  )
}

export default SignIn