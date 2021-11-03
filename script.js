
        // para mostrar la primera
        document.getElementsByClassName('container')[0].style.display = "block";

        // mostrando la siguiente pregunta
        function next(id) {
            document.getElementsByClassName('container')[id - 1].style.display = "none";
            document.getElementsByClassName('container')[id].style.display = "block";
 
            //tuve que juntar dos funciones para poder mostrarla luego en el resultado, para que siempre se cargara
            //pero solo al final se mostrara.
            
            
            var score = 0;
            if (document.getElementById('correct1').checked) {
                score++;
            }   
            if (document.getElementById('correct2').checked) {
                score++;
            }   
            if (document.getElementById('correct3').checked) {
                score++;
            }
            if (document.getElementById('correct4').checked) {
                score++;
            }
            if (document.getElementById('correct5').checked) {
                score++;
            }
            if (document.getElementById('correct6').checked) {
                score++;
            }
            if (document.getElementById('correct7').checked) {
                score++;
            }
            if (document.getElementById('correct8').checked) {
                score++;
            }
            if (document.getElementById('correct9').checked) {
                score++;
            }
            if (document.getElementById('correct10').checked) {
                score++;
            }
            if (document.getElementById('correct11').checked) {
                score++;
            }
            if (document.getElementById('correct12').checked) {
                score++;
            }
            if (document.getElementById('correct13').checked) {
                score++;
            }
            if (document.getElementById('correct14').checked) {
                score++;
            }
            if (document.getElementById('correct15').checked) {
                score++;
            }
            if (document.getElementById('correct16').checked) {
                score++;
            }
            if (document.getElementById('correct17').checked) {
                score++;
            }
            if (document.getElementById('correct18').checked) {
                score++;
            }
            if (document.getElementById('correct19').checked) {
                score++;
            }
            if (document.getElementById('correct20').checked) {
                score++;
            }
            if (score<=5) {
                document.getElementById("dom").innerHTML = "Tuviste menos de 5 aciertos, realmente no sabes nada del tema, no sè ni para que realizaste la trivia.";
            }
            if (score>5) {
                document.getElementById("dom").innerHTML = "Tuviste mas de 5 aciertos pero menos de 10, podriamos definirte como un Otaku promedio el cual no sabe mucho del tema pero se sabe defender.";
            }
            if (score>10) {
                document.getElementById("dom").innerHTML = "Tuviste mas de 10 aciertos pero menos de 15 aciertos, ciertamente eres una persona que conoce bastante del tema, pero aun asì te falta demasiado para ser el mejor .";
            }
            if (score>20) {
                document.getElementById("dom").innerHTML = "Tuviste mas de 15 aciertos pero menos de 20 aciertos, te felicito, eres una persona experta en el tema Anime, lograste superar las preguntas mas dificiles y solucionarlas todas satisfacctoriamente, ¡Eres el maestro otaku! .";
            }
            document.getElementById("result").innerHTML = score;
            document.getElementById("result2").innerHTML = score;
            document.getElementById("result3").innerHTML = score;
            document.getElementById("result4").innerHTML = score;
        }
        
