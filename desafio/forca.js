class Forca {

  //passando a palavra por um SPLIT para separar as letras 
  constructor(Forca){
    this.characters = Forca.split("");
    this.lives = 6;     // variavel vidas
    this.corrects = 0; // variavel de acertos
    
   }

  chutar(letra) { 
    let gotRight = false;
    let anyLeft = true;
    //passando a palavra por um MAP para poder trocar a letra por um Underline "_"
    this.boxes = this.characters.map(char => {return "_"});
    // criando função para
    for(var i = 0; i < this.boxes.length; i++){
      if(letra == this.characters[i]){
        if(letra !== this.boxes[i]){
          this.corrects++    // contador de acertos
        }
        this.boxes[i] = letra;
        console.log(this.boxes[i]);
        gotRight = true;
      } else {
        console.log(this.boxes[i]);
      }
    }

    
  
  }

  buscarEstado() {
    let gotRight = false;

    if (gotRight == false) {this.lives--};
    console.log("Acertou alguma" + gotRight);
    console.log("Vidas restantes" + this.lives)

    if (this.lives == 0){
      console.log("Voce predeu");
    } else {
      if(this.corrects == this.characters.length){
        console.log("Voce venceu");
      } else {
        console.log("Faltam letras ainda");
      }
    }
   } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
   
    console.log(this.boxes);
    

      //return {
        //  letrasChutadas: [], // Deve conter todas as letras chutadas
         // vidas: 6, // Quantidade de vidas restantes
       //   palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      //}
  }
}


module.exports = Forca;

