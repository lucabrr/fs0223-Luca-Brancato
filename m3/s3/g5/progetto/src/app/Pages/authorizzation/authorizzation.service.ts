import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { IlogUser } from 'src/app/Interface/IlogUser';
import { IregisterRes } from 'src/app/Interface/iregister-res';
import { IUserRegData } from 'src/app/Interface/iuser-reg-data';

@Injectable({
  providedIn: 'root'
})
export class AuthorizzationService {
  apiUrl:string ="http://localhost:3000/users"
  loginUrl:string ="http://localhost:3000/login"

  jwtHelper:JwtHelperService = new JwtHelperService();
  //Creo un istanza di BehaviorSubject che può essere nullo o IregisterRes(oggetto con token + user)
  private authSubject = new BehaviorSubject<null | IregisterRes>(null)
  //Creo un observable di nome user$ che si basa sul meccanismo di BehaviorSubject quindi contiene il valore null o il valore IregisterRes(oggetto con token + user)
  user$ = this.authSubject.asObservable()
  //nella variabile logged prendo un altro riferimento ma con valore boleano
  isLogged$= this.user$.pipe(map(v => !!v))

  logoutTimer:any // mi serve per creare il logout autumatico alla scandenza del token



  constructor
  (private http:HttpClient,private router:Router) {
    this.restoreUser() // ogni volta che viene utilizzato il service faccio il check dell'utente
  }

  register(formData:IUserRegData){
   return  this.http.post<IregisterRes>(this.apiUrl,formData)

  }

  login(form:IlogUser){

    return this.http.post<IregisterRes>(this.loginUrl,form)
    .pipe(tap(datiCheArriveranno=>{ //con pipe modifico il flusso di dati , con tap dico cosa fare con i dati che arriveranno dalla chiamata
      this.authSubject.next(datiCheArriveranno); // passo i dati al subject che li sparerà in user$ e isLogged$
      localStorage.setItem("userData",JSON.stringify(datiCheArriveranno)) // mi salvo nel ls i dati che arriveranno
      const expDate = this.jwtHelper.getTokenExpirationDate(datiCheArriveranno.accessToken) as Date // salvo in una costante la data di scandenza del token tramite il jwt e forzo il formato in Date
      this.autoLogout(expDate) // avvio la funzione di logout
    }
    ),catchError(this.errors))
  }

  logout(){
    this.authSubject.next(null) // per il logout semplicemente passo il valore null al subject che lo trasmetterà  a user e isloggedin
    localStorage.removeItem("userData")
     this.router.navigate(['/authorizzation', 'login']) //mando l'utente al login
    if(this.logoutTimer){
      clearTimeout(this.logoutTimer);
    }

  }

  autoLogout(dataScadenza:Date){
    const dataScadenzaInMs = dataScadenza.getTime() - new Date().getTime() // prendo i ms della data di scandenza e faccio da differenza con i ms attuali per capire se è scaduto o c'e ancora tempo
    this.logoutTimer = setTimeout(() => { //avvio un setTimeout che allo scadere dei ms lancia logout
      this.logout()
    }, dataScadenzaInMs);
  }

  restoreUser(){
    const userJson = localStorage.getItem("userData") //al caricamento della pagina cerco sul ls userData
    if(!userJson){
      return //se non c'è non fa nulla
    }
    const user:IregisterRes = JSON.parse(userJson) //se c'è lo trasformo e controllo se il token  è scaduto
    if(this.jwtHelper.isTokenExpired(user.accessToken)){ // mi torna un boleano true o false
     return // se è true vuol dire che il token è scaduto se è false è valido e pusho user al subject
    }
    this.authSubject.next(user)


  }








  errors(err: any) {
    switch (err.error) {
        case "Email and Password are required":
            return throwError('Email e password obbligatorie');
            break;
        case "Email already exists":
            return throwError('Utente esistente');
            break;
        case 'Email format is invalid':
            return throwError('Email scritta male');
            break;
        case 'Cannot find user':
            return throwError('utente inesistente');
            break;
            default:
        return throwError('Errore');
            break;
    }
  }
}


