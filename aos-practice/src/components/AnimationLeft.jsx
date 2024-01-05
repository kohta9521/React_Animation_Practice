import React from 'react';

// css import
import styles from './AnimationLeft.module.css';

const AnimationLeft = () => {
    return (
        <div className={styles.box} data-aos="fade-left">
            <h1>フェードイン　左</h1>
        </div>
    )
}

export default AnimationLeft;