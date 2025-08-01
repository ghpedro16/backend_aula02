/****************************************************************************************************************************************
 * Objetivo: Realizar o calculo de médias escolares, trabalhando com entrada de dados, variaveis, e condicionais
 * Autor: Pedro Henrique
 * Data: 01/08/2025
 * Versão: 1.0
 * *************************************************************************************************************************************/

/* Formas de conversão de dados
 * String() -> Permite converter um objeto ou variavel em String
 * Number() -> Permite converter um objeto ou variavel em numero (Inteiro ou float)
 * parseInt() -> Permite converter um objeto ou variavel em inteiro
 * parseFloat() -> Permite converter um objeto ou variavel em decimal
 * Boolean() -> Permite converter um objeto valor booleano (true/false)
 * Object() -> Permite converter uma variavel em objeto (ARRAY, JSON, Classe)
 * 
 * toUpperCase() -> converte uma string para MAIUSCULO
 * toLowerCase() -> converte uma string para minusculo
 * toFixed() -> limita a quantidade de casas decimais
 * 
 * Operadores de comparação
 * > -> Validação de maior valor
 * < -> Validação de menor valor
 * == -> Validação de igualdade entre conteúdos
 * >= -> Validação de maior valor ou igualdade
 * <= -> Validação de menor valor ou igualdade
 * != -> Validação de diferença de conteúdos
 * === -> Validação de igualdade entre conteúdos e igualdade nos tipos de dados
 * !== -> Validação de diferença entre conteúdos e igualdade nos tipos de dados
 * !=! -> Validação de diferença entre conteúdos e diferença entre tipos de dados
 * 
 * Operadores lógicos
 * E   AND  &&
 * OU  OR   ||
 * NÃO NOT  !
 * 
 * */

// Import da biblioteca do readline
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

// Entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    // Recebe o call back e converte MAIUSCULO
    let nomeAluno = String(nome).toUpperCase()

    // Entrada de dados das notas
    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1

        entradaDeDados.question('Digite a nota 2: ', function(valor2){
            let nota2 = valor2

            entradaDeDados.question('Digite a nota 3: ', function(valor3){
                let nota3 = valor3

                entradaDeDados.question('Digite a nota 4: ', function(valor4){
                    let nota4 = valor4

                    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' || nomeAluno == ''){
                        console.log('ERRO: Existem campos que não foram preenchidos.')

                    }else if(isNaN(nota1) == true || isNaN(nota2) == true || isNaN(nota3) == true || isNaN(nota4) == true){
                        console.log('ERRO: Não é possivel calcular com a entrada de letras.')

                    }else if(Number(nota1) < 0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2) > 10 || Number(nota3) < 0 || Number(nota3) > 10 || Number(nota4) < 0 || Number(nota4) > 10){
                        console.log('ERRO: Os valores informados precisam ser entre 0 e 10.')
                        
                    }else{
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
                        let statusAluno
                        if(media < 5){
                            statusAluno = 'REPROVADO'
                        }else if(media >= 5 && media < 7){
                            statusAluno = 'EXAME'
                        }else if(media >= 7 && media <= 10){
                            statusAluno = 'APROVADO'
                        }

                        console.log(`O aluno(a) ${nomeAluno} teve a média ${media.toFixed(1)} e está: ${statusAluno}`)
                    }

                })
            })
        })
    })
})