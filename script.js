var names = []
var cont = 0 
var isDraw = false

function addName(){
    var nameInput = document.getElementById("names").value
    
    if(nameInput == ""){
        alert("Please enter a name!")
        
    }else if(names.includes(nameInput)){
        alert("You had already entered this name! Please enter some other name.")
        
    }else{
        var nameList = document.getElementById("nameList").innerHTML += `<li>${nameInput}</li>`
        names.push(nameInput) 
        document.getElementById("reset").style.display = "block"
        cont++
        if(cont>1){
            document.getElementById("sort").style.display = "block"
        }
    }
    document.getElementById("names").value = ""
    
}


function sort(){
   if(isDraw == false){
        var finalName = names[parseInt(Math.random() * (names.length))]
        document.getElementById("drawnName").innerHTML = `<p style="color:green;">The winner was ${finalName}</p>`
        var finalName = names[parseInt(Math.random() * (names.length))]
        isDraw = true
        document.getElementById("divAddNames").style.display = "none"
        document.getElementById("sort").style.display = "none"
    }
    
        

}   


function reset(){
    document.getElementById("nameList").innerHTML = ""
    document.getElementById("names").value = ""
    document.getElementById("drawnName").innerHTML = ""
    document.getElementById("sort").style.display = "none"
    document.getElementById("reset").style.display = "none"
    document.getElementById("divAddNames").style.display = "block"
    
    
    names = []
    cont = 0
    isDraw = false
}