import { Conta } from "../model/Conta";

export interface ContaRepository{

    //MÉTODO DE CRUD (CREATE, READ, UPDATE, DELETE)
    procurarPorNumero(numero: number): void;
    ListarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;
    procurarPorTitular(titular: string): void;

    // MÉTODOS BANCÁRIOS
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}