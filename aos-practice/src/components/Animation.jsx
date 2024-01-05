import React from 'react';

import styles from './animation.module.css';


const Animation = () => {
    return (
        <div className={styles.box} data-aos="fade-right">
            <div>
                <h1>フェードイン右</h1>
            </div>
        </div>
    )
}

export default Animation