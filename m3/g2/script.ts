class SonAccount {
    nome:string
    cognome:string
    balanceInit:number
    constructor(_nome:string, _cognome:string,_balanceInit:number=500){
        this.nome = _nome 
        this.cognome = _cognome
        this.balanceInit = _balanceInit
    }
    deposita (add:number):void{
        this.balanceInit += add
        console.log(`sono stati aggiunti ${add}€ al tuo saldo, il tuo saldo corrente adesso è ${this.balanceInit}€ `);
        
    }
    preleva(pickUp:number):void{
        if(this.balanceInit <= 0 || this.balanceInit < pickUp){
            console.log("non è stato possibile concludere l'operazione");
        }else{
            this.balanceInit -= pickUp
        console.log(`sono stati prelevati ${pickUp}€ dal tuo saldo, il tuo saldo corrente adesso è ${this.balanceInit}€ `);

        }

    }
    showBalance ():void{
        console.log(`il tuo saldo corrente è ${this.balanceInit}€`);
        
    }

}

let user1 = new SonAccount("mario","rossi")
 user1.deposita(300)
 user1.preleva(900)

 class MotherAccount extends SonAccount{
    statoCivile:string | undefined
    constructor(_nome:string, _cognome:string,_balanceInit:number=500,_statoCivile?:string){
        super(_nome,_cognome,_balanceInit)
        this.statoCivile = _statoCivile
        
    }
    addInterest(){
        console.log("bho");
        
    }

 }
 let user2 = new MotherAccount("angelina","jolie",3000,"sposata")
 console.log(user2);
 

