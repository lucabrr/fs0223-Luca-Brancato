var whoWins = function (p1, p2) {
    var numeroCasuale = Math.floor(Math.random() * 100) + 1;
    console.log(numeroCasuale);
    if (numeroCasuale === p1) {
        return "il p1 ha indovinato il numero!";
    }
    else if (numeroCasuale === p2) {
        return "il p2 ha indovinato il numero!";
    }
    else {
        var differenzaP1 = Math.abs(numeroCasuale - p1);
        console.log("differenzaP1", differenzaP1);
        var differenzaP2 = Math.abs(numeroCasuale - p2);
        console.log("differenzaP2", differenzaP2);
        if (differenzaP1 < differenzaP2) {
            return "P1 si \u00E8 avvicinato di pi\u00F9 a ".concat(numeroCasuale);
        }
        else if (differenzaP2 < differenzaP1) {
            return "P2 si \u00E8 avvicinato di pi\u00F9 a ".concat(numeroCasuale);
        }
        else if (differenzaP1 === differenzaP2) {
            return "i numeri P1:".concat(p1, " e P2:").concat(p2, " sono distanti da ").concat(numeroCasuale, " allo stesso modo");
        }
    }
};
console.log(whoWins(10, 90));
