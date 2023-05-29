var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(_nome, _cognome, _balanceInit) {
        if (_balanceInit === void 0) { _balanceInit = 500; }
        this.nome = _nome;
        this.cognome = _cognome;
        this.balanceInit = _balanceInit;
    }
    SonAccount.prototype.deposita = function (add) {
        this.balanceInit += add;
        console.log("sono stati aggiunti ".concat(add, "\u20AC al tuo saldo, il tuo saldo corrente adesso \u00E8 ").concat(this.balanceInit, "\u20AC "));
    };
    SonAccount.prototype.preleva = function (pickUp) {
        if (this.balanceInit <= 0 || this.balanceInit < pickUp) {
            console.log("non è stato possibile concludere l'operazione");
        }
        else {
            this.balanceInit -= pickUp;
            console.log("sono stati prelevati ".concat(pickUp, "\u20AC dal tuo saldo, il tuo saldo corrente adesso \u00E8 ").concat(this.balanceInit, "\u20AC "));
        }
    };
    SonAccount.prototype.showBalance = function () {
        console.log("il tuo saldo corrente \u00E8 ".concat(this.balanceInit, "\u20AC"));
    };
    return SonAccount;
}());
var user1 = new SonAccount("mario", "rossi");
user1.deposita(300);
user1.preleva(900);
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_nome, _cognome, _balanceInit, _statoCivile) {
        if (_balanceInit === void 0) { _balanceInit = 500; }
        var _this = _super.call(this, _nome, _cognome, _balanceInit) || this;
        _this.statoCivile = _statoCivile;
        return _this;
    }
    MotherAccount.prototype.addInterest = function () {
        console.log("bho");
    };
    return MotherAccount;
}(SonAccount));
var user2 = new MotherAccount("angelina", "jolie", 3000, "sposata");
console.log(user2);
