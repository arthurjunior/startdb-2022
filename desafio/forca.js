class Forca {

  //passando a palavra por um SPLIT para separar as letras 
  constructor(Forca){
    this.characters = Forca.split("");
    this.life = 0;
   }

  chutar(letra) { 
    //passando a palavra por um MAP para poder trocar a letra por um Underline "_"
    this.boxes = this.characters.map(char => {return "_"});
    // criando função para
    for(var i = 0; i < this.boxes.length; i++){
      if(letra == this.characters[i]){
        this.boxes[i] = letra;
        console.log(this.boxes[i]);
      } else {
        console.log(this.boxes[i]);
        life++;
      }
    }
  
  }

  buscarEstado() { return ""; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
   
    console.log(this.boxes);
    console.log(life)

      //return {
        //  letrasChutadas: [], // Deve conter todas as letras chutadas
         // vidas: 6, // Quantidade de vidas restantes
       //   palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      //}
  }
}


module.exports = Forca;

