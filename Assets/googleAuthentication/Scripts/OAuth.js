// Function to open the Google OAuth sign-in window
function signInWithGoogle(clientId, redirectUri) {
    var authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code' +
                  '&client_id=' + encodeURIComponent(clientId) +
                  '&redirect_uri=' + encodeURIComponent(redirectUri) +
                  '&scope=email%20profile';
    window.open(authUrl, '_blank');
}

// Function to be called from Unity to start the OAuth flow
function startGoogleAuth(clientId, redirectUri) {
    signInWithGoogle(clientId, redirectUri);
}

// Function to pass the authorization code to Unity
function sendAuthCodeToUnity(authCode) {
    // Assuming you have a Unity object named 'gameInstance'
    gameInstance.SendMessage('AuthCanvas', 'ReceiveAuthCode', authCode);
}
