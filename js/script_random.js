var random = Math.floor(Math.random() * 100)+1
document.getElementById("random_number").innerHTML = random;
document.getElementById("button").addEventListener("click", function() {
    var random = Math.floor(Math.random() * 100)+1
    document.getElementById("random_number").innerHTML = random;
});
console.log()