import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
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

  constructor(private http:HttpClient) {}

  register(formData:IUserRegData){
   return  this.http.post<IregisterRes>(this.apiUrl,formData)

  }
  login(form:IlogUser){
    this.http.post<IregisterRes>(this.loginUrl,form)
    .pipe(tap(datiCheArriveranno=>{ //con pipe modifico il flusso di dati , con tap dico cosa fare con i dati che arriveranno dalla chiamata
      this.authSubject.next(datiCheArriveranno); // passo i dati al subject che li sparerà in user$ e isLogged$
      localStorage.setItem("userData",JSON.stringify(datiCheArriveranno)) // mi salvo nel ls i dati che arriveranno
      const expDate = this.jwtHelper.getTokenExpirationDate(datiCheArriveranno.accessToken) as Date // salvo in una costante la data di scandenza del token tramite il jwt è forzo il formato in Date
    }))
  }
}
