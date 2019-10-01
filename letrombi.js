const darkMode = document.querySelector('.sun');

darkMode.onclick = function(){
    window.location.href = "letrombidark.html"
}

// const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;


// darkMode.onclick = function(){
//     document.documentElement.setAttribute('data-theme', 'light');
//     lightMode.style = "display: block";
//     darkMode.style = "display: none";
//     localStorage.setItem('theme', 'light');     
// }

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         lightMode.style = "display: none";
//         darkMode.style = "display: block";
//     }
// }