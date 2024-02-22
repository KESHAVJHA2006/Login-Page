import React from "react";
import './Forgetpassword.css'
function Forgetpassword() {
    return (
    <>
    <div className="p-3 mb-2 bg-dark text-white" id="main">
        <div className="p-3 mb-2 bg-info text-dark" id="pass">
            <img src="logo/lock.png" className="Lock"/>
        <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
        <form id="register-form" role="form" autocomplete="off" class="form" method="post">
    
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
        <input id="email" name="email" placeholder="email address" class="form-control"  type="email" required/>
      </div>
    </div>
    <br/><br/>
    <div class="form-group">
      <input name="recover-submit" class="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit"/>
    </div>
    
    <input type="hidden" class="hide" name="token" id="token" value=""/> 
  </form>
        </div>
    </div>
    </>
    )
}

export default Forgetpassword;