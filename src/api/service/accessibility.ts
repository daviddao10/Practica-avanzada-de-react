import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/api";

import storage from "../../utils/storage";


/*
export const login = (credentials:string)  => {
  return client.post('/api/auth/login', credentials).then(({ accessToken}) => {
    setAuthorizationHeader(accessToken);
    storage.set('auth', accessToken );
  });
};
*/

export const logout = () => {
    return Promise.resolve().then(() => {
      removeAuthorizationHeader();
      storage.remove('auth');
    });
  };

  export const relogin =()=>{
    const accessToken= storage.get('auth') 
    console.log(accessToken)
    setAuthorizationHeader(accessToken)
 
   }