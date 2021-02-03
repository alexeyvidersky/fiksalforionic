import { IonCol, IonContent, IonGrid, IonIcon, IonLabel, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import Gap from '../../components/gap';
import HeaderLogo from '../../components/headerlogo';
import './styles.css';
import { useCamera } from '@ionic/react-hooks/camera';
import { CameraResultType, CameraSource } from '@capacitor/core';
import { MediaCapture } from '@ionic-native/media-capture';

const Screen: React.FC = () => {
    const { getPhoto } = useCamera();

    const takePhoto = () => {
        getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        }).then(res => {
            console.log("*********", res);
        }).catch(error => {
            console.log("Error: ", JSON.stringify(error));
        });
    }

    const takeVideo = () => {
        MediaCapture.captureVideo({}).then(res => {
            console.log("Video capture", res);
        }).catch(error => {
            console.log("Video capture error:", error)
        })
    }

    return (
        <IonPage>
            <IonContent scrollY={false}>
                <div className="content-container">
                    <HeaderLogo noPadding />
                    <div className="home-main-container">
                        <IonLabel style={{ color: '#36C511', fontSize: 20 }}>Welcome Harry Potter</IonLabel>
                        <IonGrid fixed={true} className="home-item-container">
                            <IonRow className="home-row">
                                <IonCol className="home-item">
                                    <div className="item-container" onClick={takePhoto}>
                                        <div className="item-icon-container">
                                            <IonIcon className="item-icon" src="/assets/icons/text.svg" color="white" />
                                        </div>
                                        <Gap height={5} />
                                        <IonLabel className="item-title">Text</IonLabel>
                                    </div>
                                </IonCol>
                                <IonCol className="home-item" onClick={takeVideo}>
                                    <div className="item-container">
                                        <div className="item-icon-container">
                                            <IonIcon className="item-icon" src="/assets/icons/book.svg" color="white" />
                                        </div>
                                        <Gap height={5} />
                                        <IonLabel className="item-title">Learn</IonLabel>
                                    </div>
                                </IonCol>
                            </IonRow>
                            <IonRow className="home-row">
                                <IonCol className="home-item">
                                    <div className="item-container">
                                        <div className="item-icon-container">
                                            <IonIcon className="item-icon" src="/assets/icons/user.svg" color="white" />
                                        </div>
                                        <Gap height={5} />
                                        <IonLabel className="item-title">Profile</IonLabel>
                                    </div>
                                </IonCol>
                                <IonCol className="home-item">
                                    <div className="item-container">
                                        <div className="item-icon-container">
                                            <IonIcon className="item-icon" src="/assets/icons/pdf.svg" color="white" />
                                        </div>
                                        <Gap height={5} />
                                        <IonLabel className="item-title">Reports</IonLabel>
                                    </div>
                                </IonCol>
                            </IonRow>
                            <IonRow className="home-row">
                                <IonCol className="home-item">
                                    <div className="item-container">
                                        <div className="item-icon-container">
                                            <IonIcon className="item-icon" src="/assets/icons/info.svg" color="white" />
                                        </div>
                                        <Gap height={5} />
                                        <IonLabel className="item-title">Info</IonLabel>
                                    </div>
                                </IonCol>
                                <IonCol className="home-item">
                                    <div className="item-container">
                                        <div className="item-icon-container">
                                            <IonIcon className="item-icon" src="/assets/icons/setting.svg" color="white" />
                                        </div>
                                        <Gap height={5} />
                                        <IonLabel className="item-title">Settings</IonLabel>
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Screen;
