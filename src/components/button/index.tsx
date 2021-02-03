import { IonButton } from '@ionic/react';
import React from 'react';
import './styles.css';

interface ButtonProps {
    children: any,
    color?: string,
    href?: string,
    onClick?: any
}

const Button: React.FC<ButtonProps> = ({ children, color, href, onClick }) => {
    if (href) {
        return (<IonButton
            color={color}
            expand="block"
            className="f-button"
            href={href ? href : ''}
        >{children}</IonButton>)
    }

    return (
        <IonButton
            color={color}
            expand="block"
            className="f-button"
            onClick={onClick}
        >{children}</IonButton>
    )
};

Button.defaultProps = {
    children: null,
    color: 'primary'
}

export default Button;
