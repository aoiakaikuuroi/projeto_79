menuListArray = ["Pizza Vegetariana",
                 "Pizza de frango" , 
                 "Pizza Portuguesa" , 
                 "Pizza quatro queijos" , 
                 "Pizza de Calabresa" , 
                 "Pizza extravaganza"];

function getMenu(){
    var htmldata = "";
    menuListArray.sort();
    for(var i="0" ; i<menuListArray.lenght ; i++){
        htmldata=htmldata + menuListArray[i] + '<br>'
    }
    document.getElementById("displayMenu").innerHTML = htmldata
}

function addItem(){
    var htmldata;
    var item=document.getElementById("addItem").value;
    var imgtags = '<img id="1" src="pizzaImg.png">';
    menuListArray.sort();
    htmldata = "";
    for(var i="0" ; i<menuListArray.lenght ; i++){
        htmldata=htmldata +imgtags + menuListArray[i] + '<br>'
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata
}

function addTop(){
    var item = document.getElementById(addItem).value;
    menuListArray.push(item);
    addItem();
}