import React, { useEffect, useRef, useState } from "react";
import "./dropDownButton.scss";
import Button from "../button";

interface Props {
    items: string[],
    dropDownTitle: string,
    selectItem: Function
}
const DropDownButton = ({ items = [], selectItem, dropDownTitle }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className={'dropdown_wrapper'}>
            <div ref={dropdownRef}>
                <Button label={dropDownTitle} onClick={() => setIsOpen(!isOpen)}></Button>
                {isOpen && (
                    <ul
                        className={`${'dropdown_item_list'} ${isOpen ? 'active' : ""} `}
                    >
                        {items.map((item, index) => (
                            <li className={'item_list'} key={index} onMouseDown={() => {
                                console.log('entro');

                                selectItem(item)
                                setIsOpen(false)
                            }}>
                                <div ><p>{item}</p></div>
                            </li>
                        )
                        )}
                    </ul>
                )}
            </div>

        </div>
    );
}

export default DropDownButton;
