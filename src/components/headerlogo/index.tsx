import { IonImg } from '@ionic/react';
import React from 'react';
import './styles.css';
import logoImg from '../../assets/images/logo.png';

interface HeaderLogoProps {
    noPadding?: boolean
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({noPadding}) => {
    return (
        <IonImg src={logoImg} className={noPadding ? "header-logo header-logo-no-padding" : "header-logo"}/>
    );
};

HeaderLogo.defaultProps = {
    noPadding: false
}

export default HeaderLogo;
