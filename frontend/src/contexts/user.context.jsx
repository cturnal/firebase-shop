import { createContext, useEffect, useReducer } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      throw new Error(`Unhandled type ${action.type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, { currentUser: null });
  // const [currentUser, setCurrentUser] = useState(null);
  // const value = { currentUser, setCurrentUser };
  const setCurrentUser = (user) => {
    dispatch({
      type: 'SET_CURRENT_USER',
      payload: user,
    });
  };

  useEffect(() => {
    async function fetchData() {
      const unsubscribe = await onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });
      return unsubscribe;
    }
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
