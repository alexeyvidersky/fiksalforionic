import { IonContent, IonLabel, IonPage } from '@ionic/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../../components/button';
import Gap from '../../components/gap';
import HeaderLogo from '../../components/headerlogo';
import TextInput from '../../components/textinput';
import { setIsLogin } from '../../redux/action';
import './styles.css';

const Screen: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const register = (e: any) => {
        e.preventDefault();
        dispatch(setIsLogin(true));
        history.push("/home");
    }

    return (
        <IonPage>
            <IonContent>
                <HeaderLogo />

                <div style={{ padding: '0 14.6%' }}>
                    <TextInput placeholder="First name" />
                    <Gap height={8} />
                    <TextInput placeholder="Last name" />
                    <Gap height={8} />
                    <TextInput placeholder="Email" type="email" />
                    <Gap height={8} />
                    <TextInput placeholder="Password" type="password" />
                    <Gap height={8} />
                    <TextInput placeholder="Repeat password" type="password" />
                    <Gap height={8} />
                    <Button color="signup" onClick={register}>sign up</Button>
                    <Gap height={16} />
                    <div style={{ textAlign: 'center' }}>
                        <IonLabel style={{ fontSize: 12 }} color="medium">
                            By creating an account you agree to our<br />
                            <IonLabel color="primary">Terms of Service</IonLabel>&nbsp;and&nbsp;
                        <IonLabel color="primary">Privacy Policy</IonLabel>
                        </IonLabel>
                    </div>
                    <Gap height={16} />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Screen;
