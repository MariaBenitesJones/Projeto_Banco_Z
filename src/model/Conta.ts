export class Conta {

    // Atributos do objeto da Classe Conta 
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Método Construtor - Instanciar um novo Objeto da Classe Conta
    constructor(_numero: number, _agencia: number, _tipo: number, _titular: string, _saldo: number) {
        this._numero = _numero;
        this._agencia = _agencia;
        this._tipo = _tipo;
        this._titular = _titular;
        this._saldo = _saldo;
    }


    /**
     * Getter numero
     * @return {number}
     */
    public get_numero(): number {
        return this._numero;
    }

    /**
     * Getter agencia
     * @return {number}
     */
    public get_agencia(): number {
        return this._agencia;
    }

    /**
     * Getter tipo
     * @return {number}
     */
    public get_tipo(): number {
        return this._tipo;
    }

    /**
     * Getter titular
     * @return {string}
     */
    public get_titular(): string {
        return this._titular;
    }

    /**
     * Getter saldo
     * @return {number}
     */
    public get_saldo(): number {
        return this._saldo;
    }

    /**
     * Setter numero
     * @param {number} value
     */
    public set_numero(value: number) {
        this._numero = value;
    }

    /**
     * Setter agencia
     * @param {number} value
     */
    public set_agencia(value: number) {
        this._agencia = value;
    }

    /**
     * Setter tipo
     * @param {number} value
     */
    public set_tipo(value: number) {
        this._tipo = value;
    }

    /**
     * Setter titular
     * @param {string} value
     */
    public set_titular(value: string) {
        this._titular = value;
    }

    /**
     * Setter saldo
     * @param {number} value
     */
    public set_saldo(value: number) {
        this._saldo = value;
    }

    public sacar(valor: number): boolean{
        if(this._saldo >= valor){
            this.set_saldo(this._saldo - valor);
            return true;
        }

        console.log("Saldo é insufuciente!");
        return false;
    }

    public depositar(valor: number): void{
        this.set_saldo(this._saldo + valor);
    }

    public visualizar(): void{

        let tipo: string = "";

        switch(this._tipo){
            case 1:
                tipo = "Conta Corrente";
                break
            case 2:
                tipo = "Conta Poupansa";
                break;
        }

        console.log("***********************************");
        console.log("Dados da conta")
        console.log("***********************************");
        console.log(`Numero da coonta: ${this._numero}`);
        console.log(`Numero da agencia: ${this._agencia}`);
        console.log(`Tipo da conta: ${tipo}`);
        console.log(`Titular da coonta: ${this._titular}`);
        console.log(`saldo da conta: ${this._saldo}`);
    }
}


