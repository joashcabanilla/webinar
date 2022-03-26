// add collection
// add document
// add field in document
// get all document
// get specific document
// where method
// orderby method
// limit method
// compound queries where, orderby,limit
// update document
// deleting document
// deleting field
// deleting collection is not recommended
// Google Authentication


//add collection 
// function createCollection() {
//     database.collection("Student").doc("20181562-M").set({
//         FirstName: "Joash",
//         LastName: "Cabanilla",
//         Course: "BSCS"
//     });
// }

//add document
// function createCollection() {
//     database.collection("Student").doc("20181562-M").set({
//         FirstName: "Joash",
//         LastName: "Cabanilla",
//         Course: "BSCS"
//     });
// }

// function addCollection() {
//     database.collection("Student").doc("20181562-M").set({
//         Age: 16,
//     }, { merge: true });
// }
// const collection = "Student";

// database.collection(collection).where("Course", "==", "BSCS").get().then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//         console.log(doc.data());
//     });
// }).catch((error) => {
//     console.log(error);
// });

// database.collection("Student").doc("20181562-M").delete().then((snapshot) => {
// console.log("DELETED");
// }).catch((error) => {
//     console.log(error);
// });

// database.collection("Student").doc("20181562-M").update({
//     Course: "BSIT"
// });

// const login = document.querySelector(".btnLogin");
// const logout = document.querySelector(".btnLogout");
// const conLogin = document.querySelector(".Login");
// const conLogout = document.querySelector(".Logout");
// const info = document.querySelector(".info");

// const provider = new firebase.auth.GoogleAuthProvider();

// login.addEventListener("click", () => {
//     firebase.auth().signInWithPopup(provider).then(res => {
//         info.innerHTML = `
//         <p>Name: ${res.user.displayName}</p><br>
//         <p>Email: ${res.user.email}</p>`;
//         conLogout.style.display = "block";
//         conLogin.style.display = "none";
//     }).catch(error => {
//         console.log(error);
//     });
// });

// logout.addEventListener("click", () => {
//     firebase.auth().signOut().then(() => {
//         conLogout.style.display = "none";
//         conLogin.style.display = "block";
//     }).catch(err => {
//         console.log(err);
//     });

// });