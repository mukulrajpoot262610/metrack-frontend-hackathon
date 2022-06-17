import { AuthContextProvider, AuthContext } from "./AuthContext";
import {
  MenuToggleContextProvider,
  MenuToggleContext,
} from "./MenuToggleContext";
import { NotifyContextProvider, notifyContext } from "./NotifyContext";
import { TokenContextProvider, tokenContext } from "./TokenContext";
import { UserContextProvider, userContext } from "./UserContext";

function ContextProviders({ children }) {
  return (
    <>
      <TokenContextProvider>
        <AuthContextProvider>
          <UserContextProvider>
            <NotifyContextProvider>
              <MenuToggleContextProvider>{children}</MenuToggleContextProvider>
            </NotifyContextProvider>
          </UserContextProvider>
        </AuthContextProvider>
      </TokenContextProvider>
    </>
  );
}

export {
  ContextProviders,
  AuthContext,
  MenuToggleContext,
  notifyContext,
  tokenContext,
  userContext,
};
