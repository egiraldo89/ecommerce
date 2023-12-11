import React from 'react';
import styles from './Table.module.scss';

interface Props {
    /**
    * Text of the button
    */
    label: string;
    /**
    * Color styles of the button
    */
    type?: 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-info';
    /**
    * Task of the button
    */
    buttonType?: 'submit' | 'button';
    /**
    * All width of the button
    */
    full?: boolean;
    /**
    * Style outline
    */
    outline?: boolean;
    /**
    * Array with header
    */
    headerColumns?: [];
    /**
   * Array with data
   */
    bodyData?: Array<[]>;
    /**
      * Array with footer data
    */
    footerData?: []

    onClick?: () => void;
}

const Table = ({
    headerColumns,
    bodyData,
    footerData,
    label,
    type = 'btn-primary',
    buttonType = 'button',
    full = false,
    outline = false,
    onClick,
    ...props // Resto de las props
}: Props) => {
    const containerStyle = full ? { width: '100%', display: 'flex' } : {};
    return (
        <div style={containerStyle}>
            {/* <button
                className={`${styles[type]} 
                    ${full ? styles.full : styles['btn-padding']} 
                    ${outline ? styles.outline : ''} 
                    ${styles.main} ${styles.normalSize} 
                    ${styles.normal}`} 
                    type={buttonType} 
                    {...props}
            >
                {label}
            </button> */}
            <table>
                <thead>
                    <tr>
                        {headerColumns?.map(item => (<th>{item}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {bodyData?.map(rowItem => (
                        <tr>
                            {rowItem?.map(columnItem => (
                                <td>{columnItem}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        {footerData?.map(item => (
                            <td>{item}</td>
                        ))}
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Table;