function setFloat(){
    var articleArray = document.querySelectorAll("article")
    for(var i = 0; i<articleArray.length;i++){
        if((i+1) % 2 == 0){
            articleArray[i].className = "even"
        }else{
            articleArray[i].className = "odd"
        }
    }
    var qArray = document.querySelectorAll("ul")
    for(var i = 1; i<qArray.length;i++){
        if((i) % 2 == 0){
            qArray[i].className = "even"
        }else{
            qArray[i].className = "odd"
        }
    }
}
setFloat()