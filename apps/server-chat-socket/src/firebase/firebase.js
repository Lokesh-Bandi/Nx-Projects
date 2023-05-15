import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase/app';

firebase.initializeApp(firebaseConfig);
export default firebase;