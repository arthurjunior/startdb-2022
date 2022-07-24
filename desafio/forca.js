
gotRight = false;// sinalizador de letra acertada

class Forca {

  constructor(Forca){ //criando objeto
   
    this.characters = Forca.split(""); //Criei um array para passar a palavra por um SPLIT para separar as letras  em caracteres
    this.boxes = this.characters.map(letra => {return "_"});  //array para passar a palavra por um MAP para poder trocar a letra por um Underline "_"
    this.vidas = 6;     //  vidas
    this.corrects = 0; //  acertos
    this.letrasChutadas = "" ;//  letras chutadas
   }
  
  chutar(letra) { 
    this.letrasChutadas += letra;

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

  buscarEstado() {   // verificação de estado de jogo ->  Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
    if (this.vidas == 0){
      
      return console.log("perdeu!!!");   
    } else {
      if(this.corrects == this.characters.length){
        return console.log("venceu!!!");
      } 
    }
   } 

  buscarDadosDoJogo() {
    console.log("Letras Chutadas: " + this.letrasChutadas);  //letras chutadas
    console.log("Vidas: " + this.vidas);  //Quantidade de vidas restantes
    console.log("Palavra: [" + this.boxes + "]");  //letras que já foram acertadas ou o valor "_" para as letras não identificadas
  }
}


module.exports = Forca;

