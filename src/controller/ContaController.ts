import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{
    
    procurarPorTitular(Titular: any) {
        let listaContasPorTitular = this.listaContas.filter(c =>
            c.titular.toUpperCase().includes(Titular.toUpperCase()))

        for ( let conta of listaContasPorTitular){
            conta.visualizar();
        }
    }

    private listaContas: Array<Conta> = new Array<Conta>();
    
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null)
            buscaConta.visualizar();
        else
        console.log("\nConta não foi encontrada");
    }

    ListarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("\nA conta número: "+ conta.numero + ", foi criada com sucesso!");
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(`A conta atualizada ${conta.numero} com sucesso!`);
        } 
        else
            console.log("\nConta não foi encontrada");
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
            console.log(`A conta número ${numero} foi excluida com sucesso!`);
        } 
        else
            console.log("\nConta não foi encontrada");
    }

    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            if(buscaConta.sacar(valor) === true)
            console.log(`O saque na conta número ${numero} foi efetuado com sucesso!`);
        } 
        else
            console.log("\nConta não foi encontrada");
    }

    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            buscaConta.depositar(valor)
            console.log(`O Deposito na conta número ${numero} foi efetuado com sucesso!`);
        } 
        else
            console.log("\nConta não foi encontrada");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if(contaOrigem !== null && contaDestino !== null ){
            if(contaOrigem.sacar(valor) === true)
            contaDestino.depositar(valor)
            console.log(`A transferencia na conta número ${numeroOrigem} para a conta ${numeroDestino} foi efetuado com sucesso!`);
        } 
        else
            console.log("\nConta de origem e/ou a conta de destino não foi encontrada");
    }

    //METODOS AUXILIARES
    public gerarNumero(): number{
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Conta | null{
        for (let conta of this.listaContas){
            if(conta.numero === numero)
                return conta;
        }

        return null;
    }
    
}