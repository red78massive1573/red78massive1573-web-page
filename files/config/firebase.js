<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAWGAE1SpO9vqMxc8KTjx61IgKmRF1A6Bs",
    authDomain: "my-first-project-58c37.firebaseapp.com",
    databaseURL: "https://my-first-project-58c37-default-rtdb.firebaseio.com",
    projectId: "my-first-project-58c37",
    storageBucket: "my-first-project-58c37.appspot.com",
    messagingSenderId: "502872844505",
    appId: "1:502872844505:web:765554dd314655c750b6c8",
    measurementId: "G-H0RJVXS20W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
