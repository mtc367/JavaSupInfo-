class CompteBancaire{
    #solde=0
    constructor(titulaire){
        this.titulaire = titulaire;
    }
    deposer(argent){
        if(argent<0){
            console.log("montant invalide")
            return
        }
        this.#solde+=argent;
    }
    retirer(argent){
        this.#solde-=argent;
    }
    get solde(){
        return this.#solde;
    }


}

const bill = new CompteBancaire("bill");
//console.log(bill.solde);
bill.deposer(1000);
console.log(bill.solde);