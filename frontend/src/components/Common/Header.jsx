import React, { useEffect, useState } from 'react';
import { signOut } from '../../reducks/users/operations';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import cart from '../../assets/img/icon.svg';

export default function Header() {
    const dispatch = useDispatch();
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/signin'));
    };

    useEffect(() => {
        if (key !== null) {
            setCheckUser(true);
        }
    }, [key]);

    return (
        <>
            <header>
                <section class="main">
                    <div class="logo">
                        <p>
                            <span class="tag">Potato</span>Corner
                        </p>
                    </div>
                    <nav class="navbar">
                        <ul class="tag">
                            <li class="nav">
                                {checkUser ? (
                                    <span className="signin" onClick={signOutButton}>
                                        Logout
                                    </span>
                                ) : (
                                    <a class="signin" href="Signin">
                                        Sign in
                                    </a>
                                )}
                                {checkUser && (
                                    <a href="Cart">
                                        {' '}
                                        <img src={cart} alt="" />
                                    </a>
                                )}
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>
        </>
    );
}
