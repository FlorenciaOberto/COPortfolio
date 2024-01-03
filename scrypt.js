document.getElementById('navbarOffcanvasLg').addEventListener('show.bs.offcanvas', function () {
    document.getElementById('closeButton').classList.remove('d-none');
});

document.getElementById('navbarOffcanvasLg').addEventListener('hide.bs.offcanvas', function () {
    document.getElementById('closeButton').classList.add('d-none');
});
