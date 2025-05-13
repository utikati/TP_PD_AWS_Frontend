import Keycloak from "keycloak-js";

let keycloak: Keycloak.KeycloakInstance;

export const initKeycloak = (): Promise<boolean> => {
  keycloak = new Keycloak({
    url: "http://localhost:8081",
    realm: "master",
    clientId: "react-frontend",
  });

  // Força o cast para Promise nativa
  return (
    keycloak.init({
      onLoad: "login-required",
      checkLoginIframe: false,
    }) as unknown as Promise<boolean>
  )
    .then((authenticated) => {
      if (authenticated) {
        console.log("Authenticated");
        return true;
      } else {
        console.warn("Not authenticated");
        throw new Error("Not authenticated");
      }
    })
    .catch((err) => {
      console.error("Keycloak init error", err);
      throw err;
    });
};

export const getKeycloak = () => keycloak;
