import { init, epilot } from "@epilot/app-bridge";
import { useLayoutEffect, useState } from "react";
import { AppBridgeContext } from "./AppBridgeContext";

export const AppBridgeProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>('');

  useLayoutEffect(() => {
    const unsubscribe = epilot.subscribeToParentMessages('app-bridge:init', (message) => {
      if (message.data?.token) {
        setToken(message.data.token);
      }
    });

    init();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AppBridgeContext.Provider value={{ token }}>
      {children}
    </AppBridgeContext.Provider>
  );
};
