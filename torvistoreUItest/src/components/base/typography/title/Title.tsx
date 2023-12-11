import React from 'react';

interface Props {
    /**
    * Text to display
    */
    data?: React.ReactNode,
    /**
    * Size of the text
    */
    fontStyle?: 'bangers' | 'sketch';
    /**
    * Color to of the text
    */
    color?: 'primary' | 'secondary' | 'sand' | 'cold' | '';
    /**
       * size of the title
    */
    titleSize?: number;
    style?: React.CSSProperties;
}

const Title = ({
    data,
    style,
    titleSize
}: Props) => {
    const content = `<h${titleSize}>${data}</h${titleSize}>`
    return (
        <div
            style={style}
            dangerouslySetInnerHTML={{ __html:  content  }}>
        </div>
    );
}

export default Title;