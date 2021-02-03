import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import LoginScreen from './pages/login';
import RegisterScreen from './pages/register';
import HomeScreen from './pages/home';

interface RootState {
    appInfo: any
}

const Fiksal: React.FC = () => {
    const { isLogin } = useSelector((state: RootState) => state.appInfo);

    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/login" component={LoginScreen} exact={true} />
                    <Route path="/register" component={RegisterScreen} exact={true} />
                    <Route path="/home" component={HomeScreen} exact={true} />
                    <Route exact path="/" render={() => isLogin ? <Redirect to="/home" /> : <Redirect to="/login" />} />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
}

export default Fiksal;