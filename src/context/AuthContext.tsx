//for states like if the person is logged in or not

import { useContext, useEffect, useState, type ReactNode } from 'react';
import { createContext } from 'react';
import { checkAuthStatus, loginUser, logoutUser, signupUser } from '../helpers/api-communicator';
// import { toast } from 'react-hot-toast/headless';

type User ={
    name : string;
    email: string;
}
type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    login:(email:string, password:string) => Promise<void>;
    signup:(name: string, email:string, password:string) => Promise<void>;
    logout: () => Promise<void>;
}
const AuthContext = createContext<UserAuth | null>(null);
export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        //fetch if users cookies are valid then skip login
        async function checkStatus(){
            const data = await checkAuthStatus();
            if(data){
            setUser({email:data.email, name:data.name});
            setIsLoggedIn(true);
            }
        }        
        checkStatus();
    }, []);
    //login function
    const login = async (email:string, password:string) => {

        const data = await loginUser(email,password);
        if(data){
            setUser({email:data.email, name:data.name});
            setIsLoggedIn(true);
        }
//      try {
//     const data = await loginUser(email, password);

//     if (data.message === "OK") {
//       setUser({ name: data.name, email: data.email });
//       setIsLoggedIn(true);
//       toast.success("Login successful!");
//       return true;
//     } else {
//       toast.error(data.message || "Login failed");
//       return false;
//     }
//   } catch (error) {
    
//     toast.error("Login failed");
//     return false;
//   }
    };
    //Signup function
    const signup = async (name:string, email:string, password:string) => {
        const data = await signupUser(name,email,password);
        if(data){
            setUser({email:data.email, name:data.name});
            setIsLoggedIn(true);
        }
    };
    //Logout function
    const logout = async () => {
        await logoutUser();
        setIsLoggedIn(false);
        setUser(null);
        window.location.reload();
    };

    const value = {
        user,
        isLoggedIn,
        login,
        logout,
        signup
    };
    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
export type { User, UserAuth };
