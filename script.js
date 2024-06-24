var arr=[
    {name:"Peaky Blinder" , image:"https://i.pinimg.com/236x/22/98/43/22984366c6e5e88201cc72ec45fb5c3b.jpg"},
    {name:"Steve Smith" , image:"https://i.pinimg.com/236x/e6/1a/ea/e61aea4f069b490d6ab9b8834d9540ac.jpg"},
    {name:"Brock Lesnar",image:"https://i.pinimg.com/236x/c2/8d/97/c28d97926279569a3dbc8d6de1891023.jpg"},
    {name:"Roman Regins", image:"https://i.pinimg.com/236x/b8/da/14/b8da14f2ea0bdfb1750deb8c4b0cf3df.jpg"},
    {name:"Ertugrul Ghazi",image:"https://i.pinimg.com/236x/be/20/20/be2020acf3fff14a9c037bd74987ff84.jpg"},
    {name:"Peaky Blinder",image:"https://i.pinimg.com/236x/fa/34/ed/fa34ed655563a4559c37c49f8721289f.jpg"},
    {name:"Peaky Blinder",image:"https://i.pinimg.com/236x/ff/ac/bc/ffacbcd9b61c82b64e23497768a8a197.jpg"},
    {name:"Ertugrul Ghazi",image:"https://i.pinimg.com/236x/58/29/e2/5829e230127e1f10aeb508853a8d84a5.jpg"},
];



function showfunction() {
    var clutter="";
    arr.forEach(function(obj){
        clutter+=`<div class="box"> 
        <img class="cursor-pointer" src="${obj.image}" alt="image> 
        <div class="caption"></div>
        </div>`
    })

    document.querySelector(".container").innerHTML=clutter;
}

function searchimage() {

    var input =document.querySelector("#searchinput");

    input.addEventListener("focus",function(){
        document.querySelector(".overlay").style.display="block";
    });

    input.addEventListener("blur",function(){
        document.querySelector(".overlay").style.display="none";
    });

    input.addEventListener("input",function () {
        const filterArr=arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter="";
        filterArr.forEach(function (obj) {
            clutter +=`<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
            </div>`
        })

        document.querySelector(".searchdata").style.display="block";
        document.querySelector(".searchdata").innerHTML=clutter;
    })
}

searchimage();
showfunction();