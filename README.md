# Project Info
It's a web application to store files (like drop box)

# Client

Angular 6 is used for the client side (Angular CLI version 6.0.3).

# Development server

Asp.Net Core 2.1 is used for the server side.


# Authentication

Token-based authentication is used to validate users using OpenIddict.
Three flows are used: 
1) PasswordFlow;
2) RefreshTokenFlow;
3) AuthorizationCodeFlow (for authentication using external third parties).

## Run
To start the client-side separately, you have to enter 'ng serve --proxy-config proxy.config.json' in the 'Client' folder, in order for requests to be posted to the server-side port which is predifined in proxy.config.json.

To enable Google authentication, add your client id and secret in appsettings.json on the server side and client id in socialloginConfig.ts on the client side.

## Detailed technologies info

Server side:

1) Asp.Net Core 2.1 Identity WebApi
2) EntityFrameworkCore
3) OpenIddict
4) Google.Apis.Plus (for google third party verification)
...

Client side:

1) Angular CLI 6.0.3
2) Bootstrap 4
3) Jquery
4) angular-6-social-login (for google third party authentication)
5) jwt-decode (for access_token decoding)
...