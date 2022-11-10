import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {

    const { signUp, googleSignUp } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        signUp(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(error => console.error(error))


    }

    const signUpWithGoogle = () => {
        googleSignUp()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    useTitle('SignUp');


    return (
        <form onSubmit={handleSignUp} className="form-control w-2/6 m-auto p-10 shadow-2xl mt-4 mb-10 rounded-lg">
            <h1 className='text-5xl font-bold text-center'>SignUp</h1>
            <div>
                <h1 className='text-lg text-orange-500 mb-2 mt-4'>Name</h1>
                <input className='w-full mb-3 p-4 border rounded-xl' type="text" name="name" placeholder='your name' />
            </div>
            <div>
                <h1 className='text-lg text-orange-500 mb-2 mt-4'>Email</h1>
                <input className='w-full mb-3 p-4 border rounded-xl' type="email" name="email" placeholder='your email' />
            </div>
            <div>
                <h1 className='text-lg text-orange-500 mb-2 mt-4'>Password</h1>
                <input className='w-full mb-3 p-4 border rounded-xl' type="password" name="password" placeholder='your password' />
            </div>
            <input className='btn mt-4' type="submit" value="SignUp" />
            <div>
                <button onClick={signUpWithGoogle} className='btn w-full mt-3 btn-outline'>SignUp with google</button>
            </div>
            <div className='mt-6'>
                <p>Already have an account. Please  <Link to='/login' className='text-info'>SignIn</Link> </p>
            </div>
        </form>
    );
};

export default Register;