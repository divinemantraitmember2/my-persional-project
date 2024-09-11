
const AdminLogin=()=>{
    return(
        <>
        <div className=" container">
            <div className="row py-4">
            <div className="col-md-6 mx-auto rounded border border-1 p-3">
              <h5 className="text-center">Admin Login Form</h5>
                <div className="row">
                <div className="col-md-12">
                    <div className="mb-3">
                        <label className="form-label">Enter your email</label>
                        <input type="email" name="email" className="form-control" placeholder="Admin Email"/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <label className="form-label">Enter your email</label>
                        <input type="password" name="password" className="form-control" placeholder="Admin Password"/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-3 text-center">
                        <button type="button" className="btn btn-primary"> Admin Login </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )

}

export default AdminLogin