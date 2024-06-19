import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  // Método para registrar un nuevo usuario con email y contraseña
  register({ email, password }: any) {
    // Utiliza el método de Firebase Auth para iniciar sesión
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Método para iniciar sesión con email y contraseña
  login({ email, password }: any) {
  // Utiliza el método de Firebase Auth para iniciar sesión
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Método para iniciar sesión con una cuenta de Google
  loginWithGoogle() {
    // Utiliza el método de Firebase Auth para iniciar sesión con Google
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  // Método para cerrar sesión
  logout() {
    // Utiliza el método de Firebase Auth para cerrar la sesión del usuario actual
    return signOut(this.auth);
  }

}
