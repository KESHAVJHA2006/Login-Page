import './Signup.css'
function Signup() {
    return (
        <>
            <div className="p-3 mb-2 bg-secondary text-white" id="body2">
                <div className="p-3 mb-2 bg-info text-dark" id="for">
                    <div className="registration-form">
                        <h2 className='hid'>User Registration</h2>
                        <br />
                        <form  method="post" enctype="multipart/form-data" className='Container'>
                            <div className="form-group row">
                                <label className="col" for="full-name"><b>Full Name:</b></label>
                                <input className="col" type="text" id="full-name" name="full_name" required />
                            </div><br />
                            <div className="form-group row">
                                <label className="col" for="email"><b>Email:</b></label>
                                <input className="col" type="email" id="email" name="email" required />
                            </div><br />
                            <div className="form-group row">
                                <label className="col" for="phone"><b>Phone Number:</b></label>
                                <input className="col" type="tel" id="phone" name="phone" required />
                            </div><br />
                            <div className="form-group row">
                                <label className="col" for="department"><b>Department:</b></label>
                                <select className="col" id="department" name="department">
                                    <option value="HR">.....Choose Department....</option>
                                    <option value="HR">Human Resources</option>
                                    <option value="IT">Information Technology</option>
                                    {/* <!-- Add more department options as needed --> */}
                                </select><br />
                            </div>
                            <div className="form-group row ">
                                <label className="col-6" for="gender"><b>Gender:</b></label>
                               <div className='col-6'>
                                <input  type="radio" id="male" name="gender" value="male" required />
                                <label  for="male">Male</label><br/>
                                <input  type="radio" id="female" name="gender" value="female" />
                                <label for="female">Female</label><br />
                                </div>
                                {/* <!-- Add more gender options if necessary --> */}
                            </div>
                            <div className="form-group row ">
                                <label className="col" for="password"><b>Password:</b></label>
                                <input className="col" type="password" id="password" name="password" required />
                            </div><br />
                            <div className="form-group row ">
                                <label className="col" for="re-enter-password"><b>Re-enter Password:</b></label>
                                <input className="col" type="password" id="re-enter-password" name="re_enter_password" required />
                            </div><br />
                            <div className="form-group row ">
                                <label className="col" for="profile-photo"><b>Profile Photo:</b></label>
                                <input className="col" type="file" id="profile-photo" name="profile_photo" />
                            </div><br />
                            <div className="form-group row">
                                <label className="col" for="signature"><b>Signature:</b></label>
                                <input className="col" type="file" id="signature" name="signature" />
                            </div><br/>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup;