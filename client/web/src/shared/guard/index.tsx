import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { localStorageKeys, RouterPaths } from "@core/constant";
import { checkToken } from "@core/services/auth.service";
import { setUser } from "@modules/auth/state/auth.actions";
import { LinearProgress } from "@mui/material";
import jwt_decode from "jwt-decode";
import { redirectTo } from "@core/utils";
import { useRouter } from "next/router";
import { isConnected } from "@core/utils/auth-verification";

interface GuardRouterProps {
  children: React.ReactNode;
}
const GuardRouter = ({ children }: GuardRouterProps) => {
  const dispatch = useDispatch();
  const [canAccess, setCanAccess] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
    (async () => {
      const isAuthenticated = isConnected();

      if (asPath === RouterPaths.EntryPaths.userLoginPath || asPath === RouterPaths.EntryPaths.partnerLoginPath) {
        if (isAuthenticated) {
          const user = await checkToken();
          dispatch(setUser(user));
          redirectTo([RouterPaths.RootPaths.rootPath]);
        } else {
          localStorage.removeItem(localStorageKeys.token);
        }
        setCanAccess(true);
      } else {
        if (!isAuthenticated) {
          setCanAccess(true);
        } else {
          try {
            const user = await checkToken();
            dispatch(setUser(user));
            setCanAccess(true);
          } catch (error) {
            localStorage.removeItem(localStorageKeys.token);
            setCanAccess(true);
          }
        }
      }
    })();
  }, []);

  if (canAccess) {
    return <>{children}</>;
  } else {
    return <LinearProgress />;
  }
};

export default GuardRouter;
