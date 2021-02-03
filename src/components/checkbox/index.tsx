import { IonCheckbox, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import './styles.css';

interface CheckboxProps {
    label?: string,
    checked?: boolean,
    onCheckedChange?: any
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onCheckedChange }) => {
    
    return (
        <IonItem className="checkbox-container">
            <IonCheckbox 
                className="f-checkbox"
                checked={checked}
                onChange={onCheckedChange}
            />
            {
                label ? (
                    <IonLabel>{label}</IonLabel>
                ) : null
            }
        </IonItem>
    )
};

Checkbox.defaultProps = {
    checked: false
}

export default Checkbox;
