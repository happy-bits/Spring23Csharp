

import { useState } from "react"

function Email() {

    const [input, setInput] = useState("oo@happybits.se")
    const [inputAgain, setInputAgain] = useState("oo@happybits.se")

    const changeEmailAddress = () => {

        setInput("klas@katt.nu")
    }
    
    const inputChanged = (event)=> {
        setInput(event.target.value)
    }
    
    const inputAgainChanged = (event)=> {
        setInputAgain(event.target.value)
    }

    return (

        <div className="center">

            <article className="box">

                <h1>Sign up</h1>


                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input value={input} onChange={inputChanged}  type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                </div>

                <div className="alert alert-primary">
                    {input}
                </div>

                <div className="mb-3">
                    <label htmlFor="emailAgainInput" className="form-label">Enter again</label>
                    <input value={inputAgain} onChange={inputAgainChanged} type="email" className="form-control" id="emailAgainInput" placeholder="name@example.com" />
                </div>

                <div className="alert alert-primary">
                    {inputAgain}
                </div>

                <button onClick={changeEmailAddress} className="btn btn-primary btn-lg me-1">Ok1</button>

            </article>

        </div>

    )
}

export default Email