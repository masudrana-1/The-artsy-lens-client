import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {

    const { login } = useContext(AuthContext);

    // const location = useLocation();
    // const navigate = useNavigate();

    // const from = location.state?.from?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                // get jwt token 
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        localStorage.setItem('artsy-token', data.token);

                    })

                // navigate(from, { replace: true });

            })
            .catch(error => console.log(error))
    }

    useTitle('SignIn');

    return (
        <form onSubmit={handleSignIn} className="form-control w-2/6 m-auto p-10 shadow-2xl my-28 rounded-lg">
            <h1 className='text-5xl font-bold text-center'>SignIn</h1>
            <div>
                <h1 className='text-lg text-orange-500 mb-2 mt-4'>Email</h1>
                <input className='w-full mb-3 p-4 border rounded-xl' type="email" name="email" placeholder='your email' />
            </div>
            <div>
                <h1 className='text-lg text-orange-500 mb-2 mt-4'>Password</h1>
                <input className='w-full mb-3 p-4 border rounded-xl' type="password" name="password" placeholder='your password' />
            </div>
            <input className='btn mt-4' type="submit" value="SignIn" />
            <div className='mt-6'>
                <p>Don't have an account? Please  <Link to='/register' className='text-info'> SignUP</Link> </p>
            </div>
        </form>
    );
};

export default Login;