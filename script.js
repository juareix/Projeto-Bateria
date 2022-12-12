//fazendo a captura da tecla acionada
document.body.addEventListener('keyup', (event) => {
    playSound( event.code.toLowerCase() );
  });

//fazendo a seleção do botão input 
  document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    if(song !== '') {
      let songArray = song.split('');
      playComposition(songArray);//manda o array pra ser executado
    }
  });
// function que vai receber a tecla acionada e relacionar ela ao audio correspondente
  function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);//selecionando o id do audio
    let keyElement = document.querySelector(`div[data-key='${sound}']`);//selcionando a data-key correspondente pra incluir a classe active
  
    if(audioElement) {//verifica se a tecla acionada é algumas das validas
      audioElement.currentTime=0;// faz com o que o audio n precise terminar caso seja acionado antes disso
      audioElement.play();//function q executabo audio
    }
  
    if(keyElement) {//verifica se a div existe e adiciona a active
      keyElement.classList.add('active');
      setTimeout(() => {//espera um time e retira a active
        keyElement.classList.remove('active');
      }, 300);
    }
  }
  
  function playComposition(songArray) {
    let wait = 0;
  
    for(let songItem of songArray) {
        setTimeout(() =>{
         playSound(`key${songItem}`)
      }, wait);
      wait += 180;
    }
  }