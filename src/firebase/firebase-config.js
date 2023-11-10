import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};


class Firebase {
  constructor() {
    const app = initializeApp(config);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
    this.storage = getStorage(app);
  }

  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async signup(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Signin error:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  async getUserState() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
