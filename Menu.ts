import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors"; //Importamos a Classe Colors, que permite adicionar Cores nos comandos de saída de dados.

export function main() {
    let opcao: number;

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
        "                  9- Sair                                \n", colors.reset +
        "                                                           \n", colors.fg.green+
        "***********************************************************\n" +
        "                                                           \n",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.yellow, "\nBanco do Brazil com Z", colors.fg.cyan, "- O seu Futuro começa aqui!", colors.fg.cyanstrong);
            sobre()
            console.log(colors.reset, "")
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da conta - por numero\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

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
    console.log(colors.fg.cyanstrong,"\nPressione enter para continuar...");
    console.log(colors.reset);
    readlinesync.prompt();
}

main();





