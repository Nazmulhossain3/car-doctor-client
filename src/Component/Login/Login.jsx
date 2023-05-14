import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target 
        const password = form.password.value 
        const email = form.email.value 
        console.log(password,email)

        signIn(email,password)
        .then(result => {
            const user = result.user 
            console.log(user)
            const loggedUser = {
                user : user.email
            }
           
          
            fetch('http://localhost:5000/jwt',{
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log("jwt response",data)
                // set local storage not best option

                localStorage.setItem('car-access-token', data.token)
                 navigate(from, {replace :true})
            })

            
        })
        .catch(error => {
            console.log(error.message)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">

            <img src={img} alt="" />

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-2xl font-bold text-center">Please Login now!</h1>
             
              <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
            
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
           
              </form>
                <p className='text-center my-4'>New to account ? <Link className='text-orange-500 font-bold' to='/signup'>Signup</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;