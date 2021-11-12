
window.addEventListener("resize", function(e) {
    if (window.matchMedia("(max-width: 400px)").matches) {
     var spin = document.querySelectorAll('.fas');
for (var i = 0; i < spin.length; i++) {
    spin[i].classList.add('fa-spin');
}
    } 
  })