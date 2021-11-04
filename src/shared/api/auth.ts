import { createUserWithEmailAndPassword, signOut, User } from '@firebase/auth';
import { auth } from '@shared/firebase';

export const login = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const getUser = (setUser: (user: User | null) => void) =>
  auth.onAuthStateChanged(setUser);
