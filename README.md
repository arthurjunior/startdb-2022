# O desafio da forca

![forca](docs/forca.gif) 

> **Observação:** *Dia das mães* no gif acima é a dica sobre a palavra secreta

É um jogo que antigamente necessitava de duas pessoas, uma para selecionar a palavra secreta e outra para tentar acertar. A pessoa que escolhia a palavra desenhava/registrava tudo no papel, desde o desenho da forca, as letras acertadas e letras erradas. Algo muito próximo do gif acima.

o Projeto ainda nao tem interface grafica!

## Instalando o Node e rodando localmente

1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar dependencias do projeto com o seguinte comando:
```bash
npm install
```
3. Para interagir com o jogo durante o desenvolvimento, você pode executar `desafio.js`, que irá iniciar o jogo no terminal, com o seguinte comando:
```bash
npm start
```

## Regras do jogo

As regras estão descritas [nesse arquivo](docs/Regras.md).

# staks realizadas

- [x]  1 - O jogo deve iniciar com 6 vidas
- [x]  2 - O jogo deve iniciar com o estado `aguardando chute`
- [ ]  3 - Todo chute deve conter apenas uma letra, caso tenha mais de uma a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.
- [ ]  4 - Caso a letra chutada esteja errada mas já foi chutada anteriormente a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.
- [x]  5 - Toda chamada ao método chutar deve registrar a letra em letrasChutadas
- [x]  6 - Se a letra chutada não estiver contida na palavra, deve subtrair uma vida
- [x]  7 - Se a letra chutada estiver contida na palavra, deve ser substituida na 
"palavra" em sua respectiva posição.
Ex.: A palavra secreta é "bala" e o jogador chutou a letra "b", então a 
palavra que é retornada no método buscarDadosDoJogo, deve ser ["b", "*", "*
", "_" ].
- [x]  8 - Caso a quantidade de vidas chegue a 0 (zero), o estado do jogo deve mudar para `perdeu`
- [x]  9 - Caso a quantidade de vidas seja maior que zero e o jogador acerte a última letra, o estado do jogo deve mudar para `ganhou`


