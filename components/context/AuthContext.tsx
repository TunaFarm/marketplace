import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { AccountData } from "@cosmjs/proto-signing";

const auraChainId = "serenity-testnet-001";

type User = {
  id: string;
  name: string;
};

type State = {
  user: User | undefined;
  isLoading: boolean;
  connectWallet: () => void;
  signMessage: (message: string) => Promise<string | undefined>;
  login: () => void;
};

const AuthContext = createContext<State | undefined>(undefined);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchMe = useCallback(async () => {
    setLoading(true);
    const resp = await fetch("/api/auth/me");
    if (!resp.ok) {
      setLoading(false);
      return;
    }
    const respUser = await resp.json();
    setUser(respUser);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  const value = useMemo(() => {
    const connectWallet = async (): Promise<AccountData | undefined> => {
      if (!window.keplr) {
        // eslint-disable-next-line no-console
        console.error("Coin98 or Keplr extension need to be installed");
        return undefined;
      }

      await window.keplr.enable(auraChainId);

      const offlineSigner = window.keplr.getOfflineSigner(auraChainId);
      const accounts = await offlineSigner.getAccounts();

      if (accounts.length < 1) {
        // eslint-disable-next-line no-console
        console.error("No Aura wallet detected");
        return undefined;
      }

      return accounts[0];
    };

    const signMessage = async (
      message: string
    ): Promise<string | undefined> => {
      if (!window.keplr) return undefined;

      const account = await connectWallet();
      if (!account) return undefined;

      const response = await window.keplr.signArbitrary(
        auraChainId,
        account.address,
        message
      );

      return response.signature;
    };

    const login = async () => {
      const account = await connectWallet();

      if (!account) {
        return;
      }

      // Fetch nonce
      const { nonce } = await (await fetch("/api/auth/get-nonce")).json();

      // TODO: prepend this nonce with some more verbose text
      const signature = await signMessage(nonce);

      // Send signature, fetch token(s)
      const loginResp = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: account.address, signature }),
      });

      if (!loginResp.ok) {
        // eslint-disable-next-line no-console
        console.error("Login failed");
        return;
      }

      await fetchMe();
      // TODO: some kind of notification that login was successful
    };

    return { user, isLoading, connectWallet, signMessage, login };
  }, [fetchMe, isLoading, user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      `useAuthContext must be used within a AuthContextProvider.`
    );
  }
  return context;
};

export { AuthContextProvider, useAuth };
