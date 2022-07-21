class Forca {

  //passando a palavra por um SPLIT para separar as letras 
  constructor(Forca){
    this.caracters = Forca.split("");
   }

  chutar(letra) { 
    //passando a palavra por um MAP para poder trocar a letra por um Underline "_"
    this.boxes = this.caracters.map(char => {return "_"});
  }

  buscarEstado() { return ""; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: [], // Deve conter todas as letras chutadas
          vidas: 6, // Quantidade de vidas restantes
          palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}


module.exports = Forca;

