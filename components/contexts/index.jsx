import { AuthContextProvider, AuthContext } from "./AuthContext";
import { NotifyContextProvider, notifyContext } from "./NotifyContext";
import { TokenContextProvider, tokenContext } from "./TokenContext";
import { UserContextProvider, userContext } from "./UserContext";

function ContextProviders({ children }) {
  return (
    <>
      <TokenContextProvider>
        <AuthContextProvider>
          <UserContextProvider>
            <NotifyContextProvider>{children}</NotifyContextProvider>
          </UserContextProvider>
        </AuthContextProvider>
      </TokenContextProvider>
    </>
  );
}

export {
  ContextProviders,
  AuthContext,
  notifyContext,
  tokenContext,
  userContext,
};
