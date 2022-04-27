import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { EmailProvider } from "./EmailContext";
import { UserProvider } from "./UserContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//
root.render(
  <StrictMode>
    <UserProvider>
      <EmailProvider>
        <App />
      </EmailProvider>
    </UserProvider>
  </StrictMode>
);
