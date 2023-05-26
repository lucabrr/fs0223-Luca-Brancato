var SmartPhone = /** @class */ (function () {
    function SmartPhone(_carica, _numeroChiamate, _costoMinuto) {
        if (_carica === void 0) { _carica = 20; }
        if (_numeroChiamate === void 0) { _numeroChiamate = 0; }
        if (_costoMinuto === void 0) { _costoMinuto = 0.20; }
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
        this.costoMinuto = _costoMinuto;
        this.registroChiamate = [];
    }
    SmartPhone.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    SmartPhone.prototype.numero404 = function () {
        return "il tuo credito residuo \u00E8 ".concat(this.carica, "\u20AC");
    };
    SmartPhone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SmartPhone.prototype.chiamata = function (min, numero) {
        this.carica -= min * this.costoMinuto;
        this.numeroChiamate += 1;
        var today = new Date();
        var giorno = today.getDate();
        var mese = today.getMonth() + 1;
        var anno = today.getFullYear();
        var ora = today.getHours();
        var minuti = today.getMinutes();
        var todayDateFormatted = "".concat(giorno, "/").concat(mese, "/").concat(anno);
        var orario = "".concat(ora, ":").concat(minuti);
        var obj = { id: numero,
            durata: min,
            data: todayDateFormatted,
            orario: orario };
        this.registroChiamate.push(obj);
    };
    SmartPhone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    SmartPhone.prototype.mostraRegistroChiamate = function () {
        return this.registroChiamate;
    };
    SmartPhone.prototype.filtraChiamatePerDataOra = function (x) {
        var chiamateFiltrate = this.registroChiamate.filter(function (chiamata) {
            return chiamata.data === x;
        });
        return chiamateFiltrate;
    };
    return SmartPhone;
}());
var smartPhone1 = new SmartPhone();
console.log(smartPhone1);
console.log("Check credito|||||||", smartPhone1.numero404());
console.log("Faccio la chiamata...");
console.log("Chiamata in corso...");
smartPhone1.chiamata(5, 3278853823);
console.log("Fine chiamata..");
console.log("Check credito post chiamata|||||||||||", smartPhone1.numero404());
console.log("check numero chiamate", smartPhone1.getNumeroChiamate());
console.log("azzero le chiamate...");
smartPhone1.azzeraChiamate();
console.log("check chiamate post azzeramento", smartPhone1.getNumeroChiamate());
console.log("registro chiamate smartphone1 = ", smartPhone1.mostraRegistroChiamate());
console.log("filtro chiamata", smartPhone1.filtraChiamatePerDataOra("26/5/2023"));
smartPhone1.chiamata(5, 3278853823);
smartPhone1.chiamata(5, 3278853823);
console.log("filtro chiamata post altre chiamate", smartPhone1.filtraChiamatePerDataOra("26/5/2023"));
console.error("SMARTPHONE2");
var smartPhone2 = new SmartPhone(100, 5);
console.log(smartPhone2);
console.log("Check credito|||||||", smartPhone2.numero404());
console.log("Faccio la chiamata...");
console.log("Chiamata in corso...");
smartPhone2.chiamata(15, 3278546238);
console.log("Fine chiamata..");
console.log("Check credito post chiamata|||||||||||", smartPhone2.numero404());
console.log("check numero chiamate", smartPhone2.getNumeroChiamate());
console.log("azzero le chiamate...");
smartPhone2.azzeraChiamate();
console.log("check chiamate post azzeramento", smartPhone2.getNumeroChiamate());
