import { IonContent, IonLabel, IonPage } from '@ionic/react';
import React from 'react';
import './styles.css';
import HeaderLogo from '../../components/headerlogo';
import TextInput from '../../components/textinput';
import Gap from '../../components/gap';
import Button from '../../components/button';
import Checkbox from '../../components/checkbox';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '../../redux/action';
import { useHistory } from 'react-router';

const Screen: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const login = (e: any) => {
        e.preventDefault();
        dispatch(setIsLogin(true));
        history.push("/home");
    }

    const register = (e: any) =>  {
        e.preventDefault();
        history.push("/register");
    }

    return (
        <IonPage>
            <IonContent>
                <HeaderLogo />

                <div className="main-container">
                    <TextInput placeholder="Email" />
                    <Gap height={8} />
                    <TextInput placeholder="Password" />
                    <Gap height={16} />
                    <Button onClick={login}>log in</Button>
                    <Gap height={16} />
                    <IonLabel>Forgot <IonLabel color='primary'>password</IonLabel>?</IonLabel>
                    <Gap height={16} />

                    <Checkbox label="Keep me logged in"/>

                    <Gap height={24} />
                    <Button color="signup" onClick={register}>sign up</Button>
                    <Gap height={24} />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Screen;
