localStorage.setItem("dog", "max");

var dog = localStorage.getItem("dog");

localStorage.removeItem("dog");

var obj = {
    name: "ian"
}

var srtingObj = JSON.stringify(obj)

var objFromLocalStorage = localStorage.getItem("obj");
 var toobj=   JSON.parse(objFromLocalStorage)
localStorage("obj", obj)