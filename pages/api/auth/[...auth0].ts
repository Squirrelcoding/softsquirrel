import { handleAuth, handleCallback  } from '@auth0/nextjs-auth0';

/** import accountExists function from lib, */
import {accountExists} from "../../../lib/account";
const afterCallback = (_a: any, _b: any, session: any, _c: any) => {
  /** The accountExists function takes in an email, searches for it in the database, 
   * and if it doesn't find it it creates a new account. Doesn't affect whether the
   * session is returned or not.
  */
    accountExists(session.user.email);
    return session;
  };
  export default handleAuth({
    async callback(req, res) {
      try {
        await handleCallback(req, res, { afterCallback });
      } catch (error: any) {
        res.status(error.status || 500).end(error.message);
      }
    }
  });