import './register.css'

const Register = () => {
  return(
    <div className='register'>
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Lamasocial</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput"/>
            <input placeholder="Email" className="registerInput"/>
            <input placeholder="Password" className="registerInput"/>
            <input placeholder="Password Again" className="registerInput"/>
            <button className="registerButton">Sign Up</button>
            <button className="registerRegisterButton">Log In to Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register