Integrating Google authentication into a WebGL game made with Unity involves several steps. You'll need to use OAuth 2.0 for the authentication process, which is a protocol that allows users to approve application to act on their behalf without sharing their password. Here's a high-level overview of how you can implement this:

1. Set Up Google OAuth 2.0:
  1. Go to the Google Developers Console.
  2. Create a new project or select an existing one.
  3. Go to the Credentials page, click "Create credentials," and then select "OAuth client ID."
  4. Configure your OAuth consent screen by entering the required information.
  5. For the application type, select "Web application" and add your game's URL to the authorized JavaScript origins.
  6. Once you create the credential, note down the Client ID and Client Secret.
2. Implement Authentication on Your Game:
  1. When you Create a WebGl Build There is a Script Named as "OAuth" Copy That File And paste it in With in The Build Folder.
  2. Then Open The Index File and And Write This Line "<script src="OAuth.js"></script>" 
  3. Open OAsth.js File Change in function Send Auth Code To unity the name of gameobject you used the google auth script as i attatched the        script to "AuthCanvas" i mentioned that name.
  4. In GoogleAuth Script ADD client id from google developer console
  5. as like client id pass redirect uri you added in developer console. 
