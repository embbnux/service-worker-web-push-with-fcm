
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

const messageElement = document.getElementById('message');

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  messageElement.innerText = JSON.stringify(payload.notification, null, 2);
});

// Initialize button with users's prefered color
const registerBtn = document.getElementById('registerBtn');
const registrationTokenElement = document.getElementById('registrationToken');


// When the button is clicked, inject setPageBackgroundColor into current page
registerBtn.addEventListener("click", async () => {
  messaging.getToken({
    vapidKey,
  }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server to send push notifications.
      registrationTokenElement.textContent = currentToken;
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
});
