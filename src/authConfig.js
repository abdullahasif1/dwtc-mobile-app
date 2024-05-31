export const msalConfig = {
    auth: {
      clientId: "d0c03741-314a-4f2e-ac81-0db904031ea8",
      authority: "https://login.microsoftonline.com/7f989d2d-1b24-46ff-a392-b12e65d6391c",
      redirectUri: "https://dwtc-hub-mobile.azurewebsites.net/home"
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
  }




  export const loginRequest = {
    scopes: ["User.Read"]
  };
