import React from 'react'
import './Card.scss'

interface Props {
  children?: React.ReactNode,
 style:React.CSSProperties,
  imageData?: {
    url: string,
    width: number,
    height: number,
    position: 'left' | 'top' | 'right' | 'bottom'
  }
}

export const Card = ({ children,
  style,
  imageData }: Props) => {
  return (
    <div className='card' style={style}>
      {(imageData && imageData.position === 'top') &&
        <div className='topImageContainer'>
          <div className='topImage image-box'>
            <img src={imageData.url}
              width={imageData.width}
              height={imageData.height}
              alt="" />
          </div>
          <div className='childrenVertical'>
            {children}
          </div>
        </div>
      }

      {(imageData && imageData.position === 'bottom') &&
        <div className='bottomImageContainer'>
          <div className='childrenVertical'>
            {children}
          </div>
          <div className='bottomImage image-box'>
            <img src={imageData.url}
              width={imageData.width}
              height={imageData.height}
              alt="" />
          </div>
        </div>
      }

      {(imageData && imageData.position === 'right') &&
        <div className='rightImageContainer'>
          <div className='childrenHorizontal'>
            {children}
          </div>
          <div className='rightImage image-box'>
            <img src={imageData.url}
              width={imageData.width}
              height={imageData.height}
              alt="" />
          </div>
        </div>
      }

      {(imageData && imageData.position === 'left') &&
        <div className='leftImageContainer'>
          <div className='leftImage image-box'>
            <img src={imageData.url}
              width={imageData.width}
              height={imageData.height}
              alt="" />
          </div>
          <div className='childrenHorizontal'>
            {children}
          </div>
        </div>
      }

      {!imageData &&
        <div>
          {children}
        </div>
      }
    </div>
  )
}
