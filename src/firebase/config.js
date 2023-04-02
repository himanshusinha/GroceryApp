import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBMBR_1N2DZNbWoo1_Ta4995wgIAIZ-1uE',
  authDomain: 'groceryapp-efd49.firebaseapp.com',
  projectId: 'groceryapp-efd49',
  storageBucket: 'groceryapp-efd49.appspot.com',
  messagingSenderId: '473557809330',
  appId: '1:473557809330:web:a036de7500a65e1ab4f1ab',
  measurementId: 'G-0Z88VXRLTW',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {firebase};
