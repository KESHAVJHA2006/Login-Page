import './Login.css'
function Login() {
  return (
    <>

      <div className="p-3 mb-2 bg-success text-white" id="body">
        <h1 id="hed">Employee Management System</h1>
        <div className="p-3 mb-2 bg-danger text-white" id="body-2">
          <h2 id='log'>Login | Admin</h2>
          <form >
            <div className="cont">
              <img src="logo/admin.jpeg" alt="Avatar" className="avt" />
            </div>
            <br />
            <div className="container">
              <label for="uname"><b>USERNAME :</b></label>
              <input type="text" placeholder="..Enter Username.." name="uname" required id='inp1' />
              <br /><br />
              <label htmlFor="psw"><b>PASSWORD :</b></label>

              <input type="password" placeholder="..Enter Password.." name="psw" required id='inp2' />
              <br />
              <span className="psw"><b>Forgot </b><a href="/forgetpassword"><b>Password?</b></a></span>
               <br/>
              <button type="submit" className="btn btn-dark" id='logbut'>Login</button>
               <label className='Rem'>
                <input type="checkbox" name="remember" /> <b>Remember me</b>
                 </label>
                 <br/>
              <span className="psw"><b>New User |</b><a href="/signup"><b> Sign UP </b></a></span>
               <br/>
            </div>
            <br />


            
          </form>
        </div>
      </div>
    </>
  )
}
export default Login;