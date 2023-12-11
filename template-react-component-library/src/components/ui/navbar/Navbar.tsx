import React from 'react'
import './Navbar.scss'
import DropDownButton from '../../dropDownButton/dropDownButton';
import Title from '../../title';


interface Props {
    /**
    * Size of the text
    */
    fontStyle?: 'bangers' | 'sketch';
    /**
       * info about logo
    */
    urlSizeLogo: { url: string; height: number, width: number };
    /**
       * account menu
    */
    accountMenu?: string[];
    selectItem: Function,
    dropDownTitle: string,
    style?: React.CSSProperties;
    clickLogo: React.MouseEventHandler<HTMLDivElement>
}

export const Navbar = ({
    urlSizeLogo,
    accountMenu,
    style,
    selectItem,
    dropDownTitle,
    clickLogo
}: Props) => {
    const combinedStyles = `navBarStyles`;

    return (
        <div>
            <div className='topNavbar'>
                <Title data={'Tienda Online'} titleSize={2}/>
            </div>
            <nav className={combinedStyles} style={style}>
                <div className='logo' onClick={clickLogo}>
                    <img src={urlSizeLogo.url} alt="" height={urlSizeLogo.height} width={urlSizeLogo.width} />
                </div>
                {accountMenu &&
                    <div className='accountMenu'>
                        <DropDownButton items={accountMenu} selectItem={selectItem} dropDownTitle={dropDownTitle} />
                    </div>
                }
            </nav>
        </div>
    )
}
