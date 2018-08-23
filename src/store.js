import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
// @todo

const firebaseConfig = {
  apiKey: "AIzaSyB3ENFqbymdvhEwCs51MZ3mc2WLWBSfgMg",
  authDomain: "reactclientpanel111.firebaseapp.com",
  databaseURL: "https://reactclientpanel111.firebaseio.com",
  projectId: "reactclientpanel111",
  storageBucket: "reactclientpanel111.appspot.com",
  messagingSenderId: "201491854675"
};

// react-redux-firebase options
const rrfConfig = {
  userProfile: 'users', // firebase root where user profiles are stored
  //enableLogging: false, // enable/disable Firebase's database logging
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true });

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// create initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;


