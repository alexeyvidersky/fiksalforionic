import { IonInput } from '@ionic/react';
import React from 'react';
import './styles.css';

interface TextInputProps {
    placeholder?: string,
    type?: any
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, type }) => {
    return (
        <IonInput
            placeholder={placeholder}
            className="f-textinput"
            type={type}
        />
    );
};

TextInput.defaultProps = {
    type: "text"
}

export default TextInput;
