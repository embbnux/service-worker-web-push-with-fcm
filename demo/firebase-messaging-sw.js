importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
importScripts('./firebaseConfig.js');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  console.log('[background.js] Received background message ', payload);
  const title = payload.notification ? payload.notification.title : payload.data.action;
  // const body = payload.notification ? payload.notification.body : payload.data.action;
  self.registration.showNotification(title, {
    body: `from background`,
  });
});


self.onnotificationclick = function(event) {
  event.notification.close();
};
