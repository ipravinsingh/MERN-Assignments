//Assignments_1__
//// Card Checkout using callback__
// function cardCheckOut(myfunction) {
//   getOrderInfo((orderId) => {
//     checkIfAvailable(orderId, (available) => {
//       placeOrder(available, (orderItem) => {
//         myfunction(orderItem);
//       });
//     });
//   });
// }
// function getOrderInfo(callbackFn) {
//   setTimeout(() => {
//     const orderId = "#39JIEJ44 ";
//     console.log(orderId);
//     callbackFn(orderId);
//   }, 2000);
// }
// function checkIfAvailable(orderId, callbackFn) {
//   setTimeout(() => {
//     const available = orderId + "Brown color ";
//     console.log(available);
//     callbackFn(available);
//   }, 2000);
// }
// function placeOrder(available, callbackFn) {
//   setTimeout(() => {
//     const orderItem = available + "👞";
//     console.log(orderItem);
//     callbackFn(orderItem);
//   }, 2000);
// }
// function myfunctionDummy(orderItem) {
//   console.log("My product details are : " + orderItem);
// }
// cardCheckOut(myfunctionDummy);

//// Card Checkout using Promise__
// async function getOrderInfo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("#34JD3 ");
//     }, 2000);
//   });
// }
// async function checkIfAvailable(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(id + "Yes ");
//     }, 2000);
//   });
// }
// async function placeOrder(available) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(available + "Shoes Order ");
//     }, 2000);
//   });
// }
// async function cardCheckOut() {
//   const id = await getOrderInfo();
//   console.log(id);
//   const available = await checkIfAvailable(id);
//   console.log(available);
//   const order = await placeOrder(available);
//   console.log(order);
//   return order;
// }
// cardCheckOut().then((order) => {
//   console.log(order);
// });

//// Assignment_2
//// User Signup using Callback__
// function signup(myfunction) {
//   getUserInfo((username) => {
//     checkIfAlreadyPresent(username, (isPresent) => {
//       createAccount(isPresent, (account) => {
//         sendSignUpEmail(account, (mail) => {
//           myfunction(mail);
//         });
//       });
//     });
//   });
// }
// function getUserInfo(callback) {
//   setTimeout(() => {
//     const username = "Praveen ";
//     console.log(username);
//     callback(username);
//   }, 2000);
// }
// function checkIfAlreadyPresent(username, callback) {
//   setTimeout(() => {
//     const isPresent = username + "NewUser ";
//     callback(isPresent);
//   }, 2000);
// }
// function createAccount(isPresent, callback) {
//   setTimeout(() => {
//     const account = isPresent + "BOB ";
//     console.log(account);
//     callback(account);
//   }, 2000);
// }
// function sendSignUpEmail(account, callback) {
//   setTimeout(() => {
//     const mail = account + "singh@gmail.com ";
//     console.log(mail);
//     callback(mail);
//   }, 2000);
// }
// function dummyMyFunction(mail) {
//   console.log("Details to open account : " + mail);
// }
// signup(dummyMyFunction);

// Promises Assignment__

//// User Signup useing Promise__
// async function getUserInfo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Praveen ");
//     }, 2000);
//   });
// }
// async function checkIfAlreadyPresent(info) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(info + "Yes Present ");
//     }, 2000);
//   });
// }
// async function createAccount(isAvailable) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(isAvailable + "Acc created in Paytm ");
//     }, 2000);
//   });
// }
// async function sendSignUpEmail(account) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(account + "singh@gmail.com ");
//     }, 2000);
//   });
// }
// async function signUp() {
//   const info = await getUserInfo();
//   console.log(info);
//   const isAvailable = await checkIfAlreadyPresent(info);
//   console.log(isAvailable);
//   const account = await createAccount(isAvailable);
//   console.log(account);
//   const signup = await sendSignUpEmail(account);
//   console.log(signup);
//   return signup;
// }
// signUp().then((signUp) => {
//   console.log("Return" + signUp);
// });
