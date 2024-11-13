import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { UserCredential } from 'firebase/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private firestore: Firestore) { }

  // Método para cerrar sesión
  async logout() {
    return signOut(this.auth);
  }

  // Método para iniciar sesión
  async login(email: string, password: string) {
    console.log('Email:', email, 'Password:', password);

    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const token = await userCredential.user.getIdToken();

      localStorage.setItem('token', token);
      console.log('Token almacenado:', token);

      return userCredential;
    } catch (error) {
      console.error('No se pudo iniciar sesión correctamente:', error);
      throw new Error('No se pudo iniciar sesión correctamente'); 
    }
  }

// Método para registrar un nuevo usuario y guardar datos en Firestore
async register(email: string, password: string, usuario: string) {
  try {
    // Crear usuario en Firebase Authentication
    const userCredential: UserCredential = await createUserWithEmailAndPassword(this.auth, email, password);

    const token = await userCredential.user.getIdToken();
    localStorage.setItem('token', token);
    console.log('Token almacenado:', token);

    // Guardar los datos del usuario en Firestore
    await setDoc(doc(this.firestore, 'users', userCredential.user.uid), {
      id: userCredential.user.uid,
      email: userCredential.user.email,
      usuario: usuario,
    });

    console.log('Usuario registrado y guardado en Firestore');

    return userCredential;
  } catch (error) {
    console.error('No se pudo registrar el usuario correctamente:', error); 
    throw new Error('No se pudo registrar el usuario correctamente'); 
  }
}
}
