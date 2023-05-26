interface ISmartphone {
     carica:number
     numeroChiamate:number
     registroChiamate:Array<{id:number, durata:number,data:string, orario:string}>
   readonly costoMinuto:number
    ricarica(euro:number):void
    numero404():string
    getNumeroChiamate():number
    chiamata(min:number,numero:number):void
    azzeraChiamate():void
    mostraRegistroChiamate():Array<{id:number, durata:number , data:string, orario:string}>
    filtraChiamatePerDataOra(x:string):Array<{id:number, durata:number , data:string, orario:string}>
}
class SmartPhone implements ISmartphone{
     carica:number
     numeroChiamate:number
     costoMinuto:number
     registroChiamate:Array<{id:number, durata:number , data:string, orario:string}>
    constructor(_carica:number = 20, _numeroChiamate:number = 0, _costoMinuto:number = 0.20){
        this.carica = _carica
        this.numeroChiamate = _numeroChiamate
        this.costoMinuto = _costoMinuto
        this.registroChiamate= []
    }
    ricarica(euro: number): void {
        this.carica += euro
    }
    numero404(): string {
        return `il tuo credito residuo è ${this.carica}€`
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    chiamata(min: number,numero:number): void {
        this.carica -= min* this.costoMinuto;
        this.numeroChiamate += 1

        const today:Date = new Date()
        const giorno:number = today.getDate()
        const mese:number = today.getMonth() + 1
        const anno:number = today.getFullYear()
        const ora:number = today.getHours()
        const minuti:number = today.getMinutes()
        const todayDateFormatted:string = `${giorno}/${mese}/${anno}`
        const orario:string =`${ora}:${minuti}`
        
        let obj:{id:number, durata:number , data:string, orario:string} = 
        {id : numero,
        durata : min,
        data : todayDateFormatted,
        orario: orario}
        this.registroChiamate.push(obj)
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
    mostraRegistroChiamate():{ id: number; durata: number; data: string , orario:string}[] {
        return this.registroChiamate
        
    }
    filtraChiamatePerDataOra(x:string):Array<{id:number, durata:number , data:string, orario:string}>{
        const chiamateFiltrate = this.registroChiamate.filter((chiamata) => {
        return chiamata.data === x;
      });
    
      return chiamateFiltrate;
    }
    
}

let smartPhone1 = new SmartPhone()
console.log(smartPhone1);
console.log("Check credito|||||||",smartPhone1.numero404());
console.log("Faccio la chiamata...");
console.log("Chiamata in corso...");
smartPhone1.chiamata(5,3278853823)
console.log("Fine chiamata..");
console.log("Check credito post chiamata|||||||||||",smartPhone1.numero404());
console.log("check numero chiamate", smartPhone1.getNumeroChiamate());
console.log("azzero le chiamate...");
smartPhone1.azzeraChiamate()
console.log("check chiamate post azzeramento",smartPhone1.getNumeroChiamate());
console.log("registro chiamate smartphone1 = ", smartPhone1.mostraRegistroChiamate());
console.log("filtro chiamata",smartPhone1.filtraChiamatePerDataOra("26/5/2023"));
smartPhone1.chiamata(10,32745454545)
smartPhone1.chiamata(4,999324546)
console.log("filtro chiamata post altre chiamate",smartPhone1.filtraChiamatePerDataOra("26/5/2023"));





console.error("SMARTPHONE2");

let smartPhone2 = new SmartPhone(100,5)
console.log(smartPhone2);
console.log("Check credito|||||||",smartPhone2.numero404());
console.log("Faccio la chiamata...");
console.log("Chiamata in corso...");
smartPhone2.chiamata(15,3278546238)
console.log("Fine chiamata..");
console.log("Check credito post chiamata|||||||||||",smartPhone2.numero404());
console.log("check numero chiamate", smartPhone2.getNumeroChiamate());
console.log("azzero le chiamate...");
smartPhone2.azzeraChiamate()
console.log("check chiamate post azzeramento",smartPhone2.getNumeroChiamate())













