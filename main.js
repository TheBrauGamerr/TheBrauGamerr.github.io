function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '0px' || sidebar.style.right === '') {
        sidebar.style.right = '-300px';
    } else {
        sidebar.style.right = '0px';
    }
}

// Event listener para cerrar la barra lateral al hacer clic fuera de ella
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-button');
    if (event.target !== sidebar && event.target !== menuButton) {
        sidebar.style.right = '-300px';
    }
});