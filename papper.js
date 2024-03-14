//0. INICIAR EL JUEGO
alert("INICIA EL JUEGO")
alert("ELIGE TUS ATAQUE")

//1. elegir ataques de los jugadores
const player = prompt('Escribe 0 para piedra, 1 para papel y 2 para tijeras');

if(player == 0){
    alert('Elegiste piedra');
}else if(player == 1){
    alert('Elegiste papel');
}else if(player == 2){
    alert('Elegiste tijeras');
}else if(player > 2 || player < 0){
    alert('SELECCION NO ACEPTADA, RECARGUE EL NAVEGADOR PARA VOLVER A JUGAR');
};
//2. elegir ataque aleatorio de los enemigos
const npc = Math.round(Math.random()*2);

if(npc == 0){
    alert('La IA a jugado piedra');
}else if(npc == 1){
    alert('La IA a jugado papel');
}else if(npc == 2){
    alert('La IA a jugado tijeras');
}else if(npc > 2 || npc < 0){
    alert('Tu adversario no a podido seleccionar, usted gana!');
};

//3. mostrar los resultados

if(player == 0 && npc == 1){
    alert("Has perdido:" + npc + "Le gana a" + player)
}else if(player == 1 && npc == 2){
    alert("Has perdido:" + npc + "Le gana a" + player)
}else if(player == 2 && npc == 0){
    alert("Has perdido:" + npc + "Le gana a" + player)
//
}else if(player == 2 && npc == 1){
    alert("VICTORIA!!!:" + player + "Le gana a" + npc)
}else if(player == 0 && npc == 2){
    alert("VICTORIA!!!:" + player + "Le gana a" + npc)
}else if(player == 1 && npc == 0){
    alert("VICTORIA!!!:" + player + "Le gana a" + npc)
}
//
else if(player == npc){
    alert("EMPATE:" + player + "SON IGUALES" + npc)
}