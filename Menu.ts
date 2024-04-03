import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors"; //Importamos a Classe Colors, que permite adicionar Cores nos comandos de saída de dados.
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca']

    //Instância da classe ContaController
    const contas: ContaController = new ContaController();

    const contaCorrente: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 456, 1, "Natalia", 1000, 1000);
    contas.cadastrar(contaCorrente);

    const contaPoupanca: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 789, 2, "Elias", 1000, 5);
    contas.cadastrar(contaPoupanca);

    while (true) {

        console.log(colors.fg.green,
            "***********************************************************\n", colors.fg.yellow +
            "                   BANCO DO BRAZIL COM Z                   \n" +
        "                                                           \n", colors.fg.green +
        "***********************************************************\n" +
        "                                                           \n", colors.fg.cyanstrong +
        "                 1- Criar conta                         \n" +
        "                  2- Listar todas as contas              \n" +
        "                  3- Buscar conta por numero             \n" +
        "                  4- Atualizar Dados da Conta            \n" +
        "                  5- Apagar Conta                        \n" +
        "                  6- Sacar                               \n" +
        "                  7- Depositar                           \n" +
        "                  8- Transferir valores entre contas     \n" +
        "                  9- Consultar Conta por titular         \n" +
        "                  0- Sair                                \n", colors.reset +
        "                                                           \n", colors.fg.green +
        "***********************************************************\n" +
        "                                                           \n",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.yellow, "\nBanco do Brazil com Z", colors.fg.cyan, "- O seu Futuro começa aqui!", colors.fg.cyanstrong);
            sobre()
            console.log(colors.reset, "")
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                console.log("digite o número da agência: ");
                agencia = readlinesync.questionInt("")

                console.log("digite o nome do titular: ");
                titular = readlinesync.question("")

                console.log("informe o tipo da conta: ");
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1

                console.log("digite o saldo da conta: ");
                saldo = readlinesync.questionFloat("")

                switch (tipo) {
                    case 1:
                        console.log("digite o limite da conta: ");
                        limite = readlinesync.questionFloat("")
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break;

                    case 2:
                        console.log("digite o dia do aniversario da conta: ");
                        aniversario = readlinesync.questionInt("")
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log("\n\nListar todas as contas\n\n");

                contas.ListarTodas();

                keyPress()
                break;
            case 3:
                console.log("\n\nConsultar dados da conta - por numero\n\n");

                console.log("digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar dados da conta\n\n");

                console.log("digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero)

                if (conta !== null) {

                    console.log("digite o número da agência: ");
                    agencia = readlinesync.questionInt("")

                    console.log("digite o nome do titular: ");
                    titular = readlinesync.question("")

                    tipo = conta.tipo

                    console.log("digite o saldo da conta: ");
                    saldo = readlinesync.questionFloat("")

                    switch (tipo) {
                        case 1:
                            console.log("digite o limite da conta: ");
                            limite = readlinesync.questionFloat("")
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;

                        case 2:
                            console.log("digite o dia do aniversario da conta: ");
                            aniversario = readlinesync.questionInt("")
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }

                }
                else {
                    console.log("A conta não foi encontrada!")
                }

                keyPress()
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                console.log("digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log("\n\nSaque\n\n");

                console.log("digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("digite o valor do saque: ");
                valor = readlinesync.questionFloat("")

                contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                console.log("digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("digite o valor do Depósito: ");
                valor = readlinesync.questionFloat("")

                contas.depositar(numero, valor);

                keyPress()
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                console.log("digite o número da Conta de origem : ");
                numero = readlinesync.questionInt("");

                console.log("digite o número da Conta de destino: ");
                numeroDestino = readlinesync.questionInt("");

                console.log("digite o valor do Depósito: ");
                valor = readlinesync.questionFloat("")

                contas.transferir(numero, numeroDestino, valor)


                keyPress()
                break;
            case 9:
                console.log("\n\nConsultar Conta por titular\n\n");

                console.log("digite o nome do titular: ");
                titular = readlinesync.question("")

                contas.procurarPorTitular(titular);

                keyPress()
                break;
            default:
                console.log(colors.fg.redstrong,
                    "\nOpção Inválida!\n", colors.reset)

                keyPress();
                break;
        }

    }
}

export function sobre(): void {
    console.log("\n******************************************************");
    console.log("projeto Desenvolvido por: Maria Eduarda Benites Jones");
    console.log("Generation Brasil - mariaeduardabmrj@gmail.com");
    console.log("github.com/MariaBenitesJones");
    console.log("******************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log(colors.fg.cyanstrong, "\nPressione enter para continuar...");
    console.log(colors.reset);
    readlinesync.prompt();
}

main();





