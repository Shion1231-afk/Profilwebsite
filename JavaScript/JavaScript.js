function showSidebar() { /*Definiert eine Funktion namens showsidebar*/
    const sidebar = document.querySelector('.sidebar'); /*Durchsucht das Dokument nachdem ersten Element mit der CSS-Klass .sidebar*/
    sidebar.classList.add('show-sidebar');  //füg die Klasse show-sidebar hinzu, um die Sidebar anzuzeigen
    sidebar.classList.remove('hide-sidebar'); // Entfernt die Klasse hide-sidebar, um sicherzustellend, dass die Sidebar sichtbar ist
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('hide-sidebar'); // Fügt die Klasse hide-sidebar hinzu, um die Sidebar zu verstecken
    sidebar.classList.remove('show-sidebar'); // Entfernt die Klasse show-sidebar, um sicherzustellen, dass die Sidebar unsichtbar ist
}
