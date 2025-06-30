import React from 'react'

const CreateAccount = () => {
  return (
    <div>
        <section>
            <nav>
                <p>Let's get started </p>
                <p>🎉</p>
            </nav>
            <nav>Register to start saving and investing with piggyvest today!</nav>
            <nav>
                <label htmlFor="First & Last Name"></label>
                <input type="text" placeholder='e.g John Doe' />
            </nav>
            <nav>
            <button>Create a Free Account</button>
            <p>Back</p>
            </nav>
        </section>
    </div>
  )
}

export default CreateAccount