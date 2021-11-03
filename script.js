
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
            document.getElementById("result").innerHTML = score;
        }
        