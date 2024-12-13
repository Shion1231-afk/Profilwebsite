// Wählt alle Content Elemente aus
const contents = document.querySelectorAll('.content');
let currentIndex = 0; //Nur Inhalt 1 wird angezeigt

function showContent(index) {    //
    contents.forEach((content, i) => {
        content.classList.remove('active'); //Alle Inhalte ausblenden
        if (i === index) {
            content.classList.add('active'); //macht den Inhalt aktiv, der dem angegebenen Index entspricht
        }
        if (currentIndex === 0){  //Falls der Wert 0 ist, wird der PrevBtn entfernt
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'inline-block';
        }
        if (currentIndex === 4){  // Falls der Wert 4 ist, wird der nextBtn entfernt
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'inline-block';
        }
    });
}


nextBtn.onclick = () => currentIndex < contents.length - 1 && showContent(++currentIndex);
prevBtn.onclick = () => currentIndex > 0 &&/*Wenn die Bedingung vor && wahr ist, wird showContetn ausgeführt*/ showContent(--currentIndex);



        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") document.getElementById("prevBtn").click();
            if (event.key === "ArrowRight") document.getElementById("nextBtn").click();
        });

