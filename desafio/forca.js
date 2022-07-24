
gotRight = false;// sinalizador de letra acertada

class Forca {
  letrasChutadas = [];//  letras chutadas
  vidas = 6; //  vidas
  

  constructor(Forca){ //criando objeto
   
    this.characters = Forca.split(""); //Criei um array para passar a palavra por um SPLIT para separar as letras  em caracteres
    this.boxes = this.characters.map(letra => {return "_"});  //array para passar a palavra por um MAP para poder trocar a letra por um Underline "_"
    this.corrects = 0; //  acertos
    
   }
  
  chutar(letra) { 

    if (letra.length > 1) return; //caso o chute contenha mais de uma letra nao retorna nada
    if (this.letrasChutadas.includes(letra)) return; //caso o chute uma letra ja chutada anteriormente retorna nada
    this.letrasChutadas += letra; // gravando letras ja chutadas

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
    return {
			LetrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
			Vidas: this.vidas, // Quantidade de vidas restantes
			Palavra: this.boxes, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
		};
  }
}


module.exports = Forca;

