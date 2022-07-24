
class Forca {
  letrasChutadas = [];//  letras chutadas
  vidas = 6; //  vidas
  
  constructor(Forca){ //criando objeto
    this.characters = Forca.split(""); //Criei um array para passar a palavra por um SPLIT para separar as letras  em caracteres
    this.boxes = this.characters.map(letra => {return "_"});  //array para passar a palavra por um MAP para poder trocar a letra por um Underline "_"
    this.corrects = 0; //  contador de acertos
   }
  
  chutar(letra) { 
    
    if (letra.length > 1) return; //caso o chute contenha mais de uma letra nao retorna nada
    if (this.letrasChutadas.includes(letra)) return; //caso o chute uma letra ja chutada anteriormente retorna nada
    this.letrasChutadas += letra; // gravando letras ja chutadas

    // criando laço para verificar se letra chutada tem na palavra 
    for(let i = 0; i < this.boxes.length; i++){
      if(letra == this.characters[i]){
        if(letra !== this.boxes[i]){
          this.corrects++    // contador de acertos de acordo com o tamanho da palavra
        }
        this.boxes[i] = letra;
        console.log(this.boxes[i]);
      } else {
        console.log(this.boxes[i]);
      }
    }

    if (!this.boxes.includes(letra)){
      this.vidas--; // caso chute uma letra que nao esteje na palavra secreta então -1 vida
    };  
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
/* 
───▄▄─▄████▄▐▄▄▄▌
──▐──████▀███▄█▄▌ king Arthur</>
▐─▌──█▀▌──▐▀▌▀█▀
─▀───▌─▌──▐─▌
─────█─█──▐▌█
*/

