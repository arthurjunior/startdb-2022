class Forca {

  
  constructor(Forca){
   
    this.characters = Forca.split(""); //Criei um array para passar a palavra por um SPLIT para separar as letras  em caracteres
    this.lives = 6;     // variavel vidas
    this.corrects = 0; // variavel de acertos
    this.chutes = [];  // 
   }

   

  chutar(letra) { 
    this.chutes += letra;
    
    gotRight = false;
    anyLeft = true;
     //array para passae a palavra por um MAP para poder trocar a letra por um Underline "_"
     this.boxes = this.characters.map(letra => {return "_"});

    do{
      
    // criando função para
    for(let i = 0; i < this.boxes.length; i++){
      
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
    if (gotRight == false) {this.lives--};
  } while (this.live > 0);
  
  }

  buscarEstado() {
    

    
    //console.log("Acertou alguma " + gotRight);
    

    if (this.lives == 0){
      return console.log("perdeu");
      
    } else {
      if(this.corrects == this.characters.length){
        return console.log("venceu");
      } else {
        console.log("Aguardando Chute");
      }
    }
   } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
   
    
    console.log("Letras Chutadas " + this.chutes);
    console.log("Vidas restantes " + this.lives); 
    console.log(this.boxes);
    
      return {
        //  letrasChutadas: [], // Deve conter todas as letras chutadas
          // vidas: 6, // Quantidade de vidas restantes
       //   palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}


module.exports = Forca;

