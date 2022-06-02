// window.addEventListener('load', function(){
//     const pullDownButton = document.getElementById("lists");
// });

// window.addEventListener('mouseover', function(){
//     const pullDownButton = document.getElementById("lists");
//     console.log(pullDownButton);
// });

window.addEventListener('mouseout', function(){
    const pullDownButton = document.getElementById("lists");
    console.log(pullDownButton);
    pullDownButton.addEventListener('mouseover', function(){
        pullDownButton.setAttribute("style","background-color:blue");
    });
    pullDownButton.addEventListener('mouseout', function(){
        pullDownButton.removeAttribute("style", "background-color:red;");
    });
    pullDownButton.addEventListener('click', function(){
        pullDownButton.setAttribute("style", "background-color: green;");
    });
});

