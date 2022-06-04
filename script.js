// window.addEventListener('load', function(){
//     const pullDownButton = document.getElementById("lists");
// });

// window.addEventListener('mouseover', function(){
//     const pullDownButton = document.getElementById("lists");
//     console.log(pullDownButton);
// });

// window.addEventListener('mouseout', function(){
//     const pullDownButton = document.getElementById("lists");
//     console.log(pullDownButton);
//     pullDownButton.addEventListener('mouseover', function(){
//         pullDownButton.setAttribute("style","background-color:blue");
//     });
//     pullDownButton.addEventListener('mouseout', function(){
//         pullDownButton.removeAttribute("style", "background-color:red;");
//     });
//     pullDownButton.addEventListener('click', function(){
//         pullDownButton.setAttribute("style", "background-color: green;");
//     });
// });


window.addEventListener('mouseout', function(){
    const pullDownButton = document.getElementById("lists");
    const pullDownParents = document.getElementById("pull-down");

    pullDownButton.addEventListener('mouseover', function(){
        this.setAttribute("style", "background-color: blue;");
    });
    pullDownButton.addEventListener('mouseout', function(){
        this.removeAttribute("style", "background-color: red;");
    });
    pullDownButton.addEventListener('click', function(){
        if(pullDownParents.getAttribute("style") == "display: block;"){
            pullDownParents.removeAttribute("style", "display: block;");
            console.log("非表示");
        } else {
            pullDownParents.setAttribute("style", "display: block;");
            console.log("表示");
        };
    });
});
