import {createContext, type ReactNode, useContext, useState} from "react";

interface AuthState {
    id: number | null;
    setId: (id: number | null) => void;
}

const AuthContext = createContext<AuthState>({
    id: null,
    setId: () => {},
});

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [id, setId] = useState<number | null>(null);

    return(
        <AuthContext.Provider value={{id, setId}}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);