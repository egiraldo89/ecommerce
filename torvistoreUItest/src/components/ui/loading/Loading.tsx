import React from 'react'
import styles from './loading.module.scss';

const Loading = () => {

    const images = [
        {img:'https://media.tenor.com/xj5_iy6tuwMAAAAi/dogs.gif', reverse:true}, 
        {img:'https://media.tenor.com/E5bC1OkrgeoAAAAi/perro-corriendo.gif', reverse:false}, 
        {img:'https://media.tenor.com/--_Vf5tzKa0AAAAi/beb%C3%A9-greygrey.gif', reverse:true}, 
        {img:'https://media.tenor.com/RTOKAzOsnVMAAAAi/dog-dog-running.gif', reverse:false},
        {img:'https://media.tenor.com/mnlxL1QOT98AAAAi/dogs-going-out.gif', reverse:false},
    ];

    const oneImage = images[Math.floor(Math.random() * images.length)];

    return ( 
        <div className={styles.loadingContainer}>
            <div className={styles.loadingOverlay}>
                <div className={styles.imageWrapper}>
                    <img
                        className={`${oneImage.reverse ? styles.movingImageInverter : styles.movingImage} ${styles.loadingImg}`} 
                        src={oneImage.img} 
                        alt="Perro corriendo"
                    />
                    <img style={{marginTop:'1.5rem'}} src="https://media.tenor.com/wUoBqeXsZmAAAAAi/loading-up.gif" alt="loading" />
                </div>
            </div>
        </div>
     );
}
 
export default Loading;