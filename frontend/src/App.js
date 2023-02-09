import { 
    onAuthStateChanged 
} from "firebase/auth"
import { useEffect, useState } from "react";
import Books from "./components/Books";
import { auth } from "./config/firebase-config";
import { fetchAllBooks, loginWithEmailAndPassWord, loginWithGoogle } from "./services";
const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("");
    const [books, setBooks] = useState();

    useEffect(() => {
        if (token) {
            fetchAllBooks(token)
            .then((data) => {
                setBooks(data);
            })
            ;
        }
    }, [token]);

    useEffect(() => {
        onAuthStateChanged(auth, (userCredentials) => {
            if(userCredentials) {
                setIsAuth(true)
                userCredentials.getIdToken().then((userToken) => {
                    setToken(userToken);
                })
            }
        })
    }, [])

    const handleLoginWithGoogleBtn = () => {
        loginWithGoogle().then((userCredentials) => {
            setIsAuth(true)
        })
    }
    const handleLoginWithEmailAndPasswordBtn = () => {
        loginWithGoogle().then((userCredentials) => {
            setIsAuth(true)
        })
    }
    return (
        <div className="app">
            {
                isAuth ? (
                    <Books books={books}/>
                ) : 
                <button onClick={handleLoginWithEmailAndPasswordBtn}>Login with Google</button>
            }
        </div>
    )
} 

export default App;