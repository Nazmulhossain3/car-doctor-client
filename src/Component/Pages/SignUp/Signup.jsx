import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import SocialLogin from '../../Shared/SocailLogin/SocialLogin';


const Signup = () => {

    const {createUser} = useContext(AuthContext)
    
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const password = form.password.value 
        const email = form.email.value 
        console.log(name,password,email)

        createUser(email,password)
        .then(result => {
            const user = result.user 
            console.log(user)
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
            <h1 className="text-2xl font-bold text-center">Please SignUp now!</h1>
             
              <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" />
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
             
           
           
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confirm Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
            
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="SignUp" />
              </div>
           
              </form>
                <p className='text-center my-4'>Already have an account ? <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;