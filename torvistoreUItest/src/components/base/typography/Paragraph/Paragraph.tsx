import React from 'react'
import styles from './Paragraph.module.scss'

interface Props {
    /**
    * Text to display
    */
    children: React.ReactNode;
    /**
    * Style of the text
    */
    fontStyle?: 'normal' | 'sketch';
    /**
    * Size of the text
    */
    size?: 'micro' | 'normalSize' | 'large' | 'xLarge';
    /**
    * Weight of the text
    */
    bold?: 'light' | 'normalBold' | 'semiHard' | 'hard';
    /**
    * Color of the text
    */
    color?: 'primary' | 'secondary' | 'sand' | 'cold' | 'black';
    style?: React.CSSProperties;
}

const Paragraph = ({
    children,
    fontStyle = 'normal',
    size = 'normalSize',
    bold = 'normalBold',
    color = 'black',
    style,
}: Props) => {
    return (
        <p className={`${styles[fontStyle]} ${styles[size]} ${styles[bold]} ${styles[color]}`} style={style} >
            {children}
        </p>
    );
}

export default Paragraph;