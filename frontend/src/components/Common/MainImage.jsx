import React, { useState } from 'react';
import back1 from '../../assets/img/back1.png';
import back2 from '../../assets/img/cart.png'


const MainImage = () => {
    const [checkUser, setCheckUser] = useState(false);
    return (
        <>
            <section class="main-visual">
                <img src={back1} alt="" />
                {checkUser && (
                    <p class="img">
                        <a href="/cart">
                            <img src={back2} alt="" />
                        </a>
                    </p>
                )}
            </section>
        </>
    );
};

export default MainImage;
