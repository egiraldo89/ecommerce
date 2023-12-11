import React, { useCallback, useEffect, useState } from 'react'
import './Slider.scss'

interface Props {
    slides: { url: string, width: string, height: string }[],
    styleContainer: React.CSSProperties
    leftIcon: any,
    rightIcon: any
}

const Slider = ({ slides,
    styleContainer,
    leftIcon,
    rightIcon
}: Props) => {

    const [cur, setCur] = useState(0);

    const len = slides.length;

    const leftHandle = () => {
        setCur(cur - 1 < 0 ? len - 1 : cur - 1);
    };

    const rightHandle = useCallback(() => {
        setCur(cur + 1 > len - 1 ? 0 : cur + 1);
    }, [cur, len]);

    useEffect(() => {
        const interval = setTimeout(() => {
            rightHandle();
        }, 3000);
        return () => clearTimeout(interval);
    }, [rightHandle]);


    return (
        <div className='slider' style={styleContainer}>
            <div className="leftBtn" onClick={leftHandle}>
                {leftIcon}
            </div>

            <div style={{ width: '100%' }}>
                {slides.map((slide, index) => {
                    return (
                        <div key={index}>
                            {cur === index &&
                                <div className='item' style={styleContainer}>
                                    <img src={slide.url} width={slide.width} height={slide.height} alt="" />
                                </div>
                            }
                        </div>
                    );
                })}
            </div>
            <div className="rightBtn" onClick={rightHandle} >
                {rightIcon}
            </div>
        </div >
    )
}

export default Slider