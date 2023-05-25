fetch("./starter/abbigliamento.json")
.then((res)=> res.json())
.then((res)=> {let capi = res

class Garment {
    capo:string
    codprod:number
    collezione:string
    colore:string
    disponibile:string
    id:number
    modello:number
    prezzoivaesclusa:number
    prezzoivainclusa:number
    quantita:number
    saldo:number
    mostraPrezzo:Function
    constructor(
        _capo:string,
        _codprod:number,
        _collezione:string,
        _colore:string,
        _disponibile:string,
        _id:number,
        _modello:number,
        _prezzoivaesclusa:number,
        _prezzoivainclusa:number,
        _quantita:number,
        _saldo:number,
        ){
            this.capo = _capo
            this.codprod = _codprod
            this.collezione=_collezione
            this.colore=_colore
            this.disponibile=_disponibile
            this.id=_id
            this.modello=_modello
            this.prezzoivaesclusa=_prezzoivaesclusa
            this.prezzoivainclusa=_prezzoivainclusa
            this.quantita=_quantita
            this.saldo=_saldo

            this.mostraPrezzo = function mostraPrezzo():void{
                console.log(`il prezzo di ${this.capo} è di €${this.prezzoivainclusa}`);
                
            }
            
        }
        
    }
    let contenitoreCapi:Garment[] = []
for (const articolo of capi) {
    let art:Garment =
         new Garment(articolo.capo,
        articolo.codprod,
        articolo.collezione,
        articolo.colore,
        articolo.disponibile,
        articolo.id,
        articolo.modello,
        articolo.prezzoivaesclusa,
        articolo.prezzoivainclusa,
        articolo.quantita,
        articolo.saldo)
        
        contenitoreCapi.push(art)
        
}
console.log(contenitoreCapi);

contenitoreCapi[0].mostraPrezzo()
contenitoreCapi[1].mostraPrezzo()
contenitoreCapi[2].mostraPrezzo()



})

.catch()