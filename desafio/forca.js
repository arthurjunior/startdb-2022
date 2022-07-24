class Forca {

  
  constructor(Forca){
   
    this.characters = Forca.split(""); //Criei um array para passar a palavra por um SPLIT para separar as letras  em caracteres
    this.vidas = 6;     //  vidas
    this.corrects = 0; //  acertos
    this.chutes = [];  //  letras chutadas
   }


  chutar(letra) { 
    this.chutes += letra;
    
    gotRight = false;
    anyLeft = true;
     //array para passae a palavra por um MAP para poder trocar a letra por um Underline "_"
     
     this.boxes = this.characters.map(letra => {return "_"});
     this.boxes = this.boxes.valueOf();
    

    // criando laço para verificar se letra chutada tem na palavra 
    for(let i = 0; i < this.boxes.length; i++){
      
      if(letra == this.characters[i]){
        if(letra !== this.boxes[i]){
          this.corrects++    // contador de acertos
        }
        this.boxes[i] = letra;
        console.log(this.boxes[i]);
        gotRight = true;   // sinalizador de acerto
      } else {
        console.log(this.boxes[i]);
        
      }
    }
    if (gotRight == false) {this.vidas--};  //se o sinalizador de acerto for false entao -1 vida
  }

  buscarEstado() {
    if (this.vidas == 0){
      
      return console.log("perdeu!!!");   
    } else {
      if(this.corrects == this.characters.length){
        return console.log("venceu!!!");
      } 
    }
   } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    console.log("Letras Chutadas: " + this.chutes);  //letras chutadas
    console.log("Vidas: " + this.vidas);  //Quantidade de vidas restantes
    console.log("Palavra: [" + this.boxes + "]");  //letras que já foram acertadas ou o valor "_" para as letras não identificadas
  }
}


module.exports = Forca;

