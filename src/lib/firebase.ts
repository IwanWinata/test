import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDDggPbOxCBgXpHvgeFnKeuMJVk_LHb4YQ",
    authDomain: "homebuyer-2f863.firebaseapp.com",
    projectId: "homebuyer-2f863",
    storageBucket: "homebuyer-2f863.appspot.com",
    messagingSenderId: "821395966485",
    appId: "1:821395966485:web:e0cf397390b3ff67695c1c",
    measurementId: "G-FC1PP4TJGM"
};


let app: FirebaseApp;
let analytics: Analytics | undefined;

if (typeof window !== 'undefined') {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
}

export { analytics, logEvent };
