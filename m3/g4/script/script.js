fetch("./starter/abbigliamento.json")
    .then(function (res) { return res.json(); })
    .then(function (res) {
    var capi = res;
    var Garment = /** @class */ (function () {
        function Garment(_capo, _codprod, _collezione, _colore, _disponibile, _id, _modello, _prezzoivaesclusa, _prezzoivainclusa, _quantita, _saldo) {
            this.capo = _capo;
            this.codprod = _codprod;
            this.collezione = _collezione;
            this.colore = _colore;
            this.disponibile = _disponibile;
            this.id = _id;
            this.modello = _modello;
            this.prezzoivaesclusa = _prezzoivaesclusa;
            this.prezzoivainclusa = _prezzoivainclusa;
            this.quantita = _quantita;
            this.saldo = _saldo;
            this.mostraPrezzo = function mostraPrezzo() {
                console.log("il prezzo di ".concat(this.capo, " \u00E8 di \u20AC").concat(this.prezzoivainclusa));
            };
        }
        return Garment;
    }());
    var contenitoreCapi = [];
    for (var _i = 0, capi_1 = capi; _i < capi_1.length; _i++) {
        var articolo = capi_1[_i];
        var art = new Garment(articolo.capo, articolo.codprod, articolo.collezione, articolo.colore, articolo.disponibile, articolo.id, articolo.modello, articolo.prezzoivaesclusa, articolo.prezzoivainclusa, articolo.quantita, articolo.saldo);
        contenitoreCapi.push(art);
    }
    console.log(contenitoreCapi);
    contenitoreCapi[0].mostraPrezzo();
    contenitoreCapi[1].mostraPrezzo();
    contenitoreCapi[2].mostraPrezzo();
})
    .catch();
