using UnityEngine;

public class GoogleAuth : MonoBehaviour
{
    public const string clientId = ""; // Pass The Client ID of Your Project you created in Google Cloud
    public const string redirectUri = ""; // Pass The redirect Uri you mentioned for your project in google cloud
    // Function to call the JavaScript function from Unity
    public void StartGoogleAuth()
    {
        // Call the JavaScript function with your client ID and redirect URI
        Application.ExternalEval($"startGoogleAuth('{clientId}', '{redirectUri}');");
    }

    // Function to be called from JavaScript to receive the auth code
    public void ReceiveAuthCode(string authCode)
    {
        Debug.Log("Received auth code: " + authCode);
        // Here you would typically send the auth code to your server for token exchange
    }
}
