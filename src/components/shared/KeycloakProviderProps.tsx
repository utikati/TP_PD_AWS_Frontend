import React, { useEffect, useState } from "react";
import { initKeycloak } from "../../utils/keycloakservice";
import { LoadingCircle } from "./LoadingCircle";

interface KeycloakProviderProps {
  children: React.ReactNode;
}

const KeycloakProvider = ({ children }: KeycloakProviderProps) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    initKeycloak()
      .then(() => {
        setAuthenticated(true);
      })
      .catch((error: string | Error) => {
        console.error("Failed to initialize Keycloak", error);
      });
  }, []);

  if (!authenticated) {
    return (
      <div>
        <LoadingCircle />
      </div>
    );
  }

  return <>{children}</>;
};

export default KeycloakProvider;
