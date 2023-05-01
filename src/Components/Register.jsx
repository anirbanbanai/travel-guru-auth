import React, { useContext } from 'react';
import { AuthContext } from './RRouterProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    
    const {createUser} = useContext(AuthContext);

    const handleCreateUser = event =>{
       event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.pass.value;
       console.log(email, password);

       createUser(email, password)
       .then(result =>{
        const logg = result.user;
        console.log(logg)
       })
       .catch(error =>{
        console.log(error.message);
        
       })}
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleCreateUser} className="card-body">
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
          <input type="password" name='pass' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <h2>Allready have an accunt ? <Link to='/login'>login</Link></h2>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;