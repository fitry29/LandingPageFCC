// function hideNavbar(anchor) {
//     var x = document.getElementById("nav-bar");
//     var icon = document.getElementsByClassName("fa fa-bars");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }
function hideNabBar()
{
  const menu = document.getElementById('menu');
  const navbar = document.getElementById('nav-bar');
  menu.addEventListener('click', ()=> {
    menu.classList.toggle('fa-close');
    navbar.classList.toggle('navbar-toggle');
  })
  navbar.addEventListener('click', ()=> {
    menu.classList.toggle('fa-close');
    navbar.classList.toggle('navbar-toggle');
  })

}