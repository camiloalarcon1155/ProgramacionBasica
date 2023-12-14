function aleatorio(min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min)
                }
                    function eleccion(jugada) { //aqui se creó funcion que tendra a jugada como parametro de trabajo
                        let resultado = ""
                        if(jugada == 1){
                            resultado = "Piedra 🥌"
                        } else if(jugada == 2) {
                            resultado = "Papel 📃"
                        } else if(jugada == 3) {
                            resultado = "Tijera ✂"
                        } else {
                            resultado = "ELECCIÓN INCORRECTA"    
                        }
                        return resultado
                }
                // 1 es para piedra, 2 es papel, 3 es tijera
                let jugador = 0
                let pc = 0
                let triunfos= 0
                let perdidas= 0
        
                
                while (triunfos < 3 && perdidas < 3) {

                
                    pc = aleatorio(1,3)
                    jugador = prompt("Elige: 1 para Piedra, 2 para papel, 3 para tijera")//esta funcion me entrega la eleccion de usuario

                    //alert("elegiste "+ jugador)
                                                                //eleccion trae el retorno de resultado
                    alert("Tu eliges: " + eleccion(jugador)) //aqui le envió el parametro a la funcion 
                    alert("PC elige: " + eleccion(pc)) //aqui le envió el parametro a la funcion
                
                    //COMBATE

                
                        if(pc == jugador) {
                            alert("EMPATE")
                        }else if(jugador == 1 && pc == 3) {
                            alert("GANASTE MY PERR")
                            triunfos = triunfos + 1
                        }else if(jugador == 2 && pc == 1) {
                            alert("GANASTE MY PERR")
                            triunfos = triunfos + 1
                        }else if(jugador == 3 && pc == 2) {
                            alert("GANASTE MY PERR")
                            triunfos = triunfos + 1
                        }else{
                            alert("PERDISTE MI RUCO")
                            perdidas = perdidas + 1
                        }
    
                }
                
                alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")