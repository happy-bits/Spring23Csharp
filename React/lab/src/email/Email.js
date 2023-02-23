
function Email() {

    return (
        


                <article className="box">

                    <h1 className="display-4 mb-4">Sign up</h1>

                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="emailAgainInput" className="form-label">Enter again</label>
                        <input type="email" className="form-control" id="emailAgainInput" placeholder="name@example.com" />
                    </div>

                    <button className="btn btn-primary btn-lg">Ok</button>

                    <div className="alert alert-success mt-3" role="alert">
                        Success message
                    </div>

                    <div className="alert alert-danger mt-3" role="alert">
                        Error message
                    </div>

                </article>

  
  
    )


}

export default Email


