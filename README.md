# Service Worker Web Push with FCM

A demo to run Service Worker Web Push with Firebase Cloud Messaging.

## Setup

1. Clone this project

```
$ git clone https://github.com/embbnux/service-worker-web-push-with-fcm.git
$ yarn
```

2. Create `firebaseConfig.js` file

```
$ cp demo/firebaseConfig.default.js demo/firebaseConfig.js
```

3. Create a project in [Firebase](https://firebase.google.com/)

4. Get `vapidKey`

In Firebase project settings -> Cloud Messaging  -> Web configuration: Generate a Web Push certificate.
Save `Key pair` value as `vapidKey` in `demo/firebaseConfig.js` file

5. Get `firebaseConfig`

In Firebase project settings -> General, create a Web App.
Then in `SDK setup and configuration`, copy `firebaseConfig` and saved into `demo/firebaseConfig.js` file

6. Start demo server

```
$ yarn start
```

6. In Browser (Chrome/Firefox): open `http://localhost:8080`

7. Click `Register FCM` button to get registration token.

8. Follow [here](https://firebase.google.com/docs/cloud-messaging/js/first-message#send_a_test_notification_message) to send a test message to client
