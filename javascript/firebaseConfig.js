const firebaseConfig = {
    apiKey: "AIzaSyAr-5EUWEVlhrt0fewROe-tSIzkmLzhUQU",
    authDomain: "sample-project-e7af5.firebaseapp.com",
    databaseURL: "https://sample-project-e7af5-default-rtdb.firebaseio.com",
    projectId: "sample-project-e7af5",
    storageBucket: "sample-project-e7af5.appspot.com",
    messagingSenderId: "323815512698",
    appId: "1:323815512698:web:4adbea0efbabce434939c3",
    measurementId: "G-D4HQ8PJJ28"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
database.enablePersistence().catch((err) => {
    console.log(err);
}); 