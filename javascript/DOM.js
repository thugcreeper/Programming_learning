let currentNode;//store the currently highlighted node
let idcount=0;

function start(){
    document.getElementById("byIdButton").addEventListener("click",byId,false);
    document.getElementById("insertButton").addEventListener("click",insert,false);
    document.getElementById("appendButton").addEventListener("click",appendNode,false);
    document.getElementById("replaceButton").addEventListener("click",replaceCurrent,false);
    document.getElementById("removeButton").addEventListener("click",remove,false);
    document.getElementById("parentButton").addEventListener("click",parent,false);
    currentNode=document.getElementById("bigheading");
}
//get and highlight an element by its id attribute
function byId(){
    let id=document.getElementById("gbi").value;
    let target=document.getElementById(id);
    if(target){
        switchTo(target);
    }
}
//insert paragraph element before the current element
function insert(){
    let newNode = createNewNode(document.getElementById("ins").value);
    currentNode.parentNode.insertBefore(newNode, currentNode);
    switchTo(newNode);
}
//append a paragraph node as the child of current node
function appendNode(){
    let newNode=createNewNode(document.getElementById("append").value);
    currentNode.appendChild(newNode);
    switchTo(newNode);
}
//replace currently selected node with a paragraph node
function replaceCurrent(){
    let newNode=createNewNode(document.getElementById("replace").value);
    currentNode.parentNode.replaceChild(newNode, currentNode);
    switchTo(newNode);
}
//remove current node
function remove(){
    if(currentNode.parentNode==document.body)
        alert("Can't remove a top level element");
    else{
        let oldNode=currentNode;
        switchTo(oldNode.parentNode);
        currentNode.removeChild(oldNode);
    }
}
//highligted the parent of current node
function parent(){
    let target=currentNode.parentNode;
    if(target!=document.body)
        switchTo(target);
    else
        alert("No parent");
}

// helper function that returns a new paragraph node containing
// a unique id and the given text
function createNewNode( text )
{
    var newNode = document.createElement( "p" );
    nodeId = "new" + idcount;
    ++idcount;
    newNode.setAttribute( "id", nodeId ); // set newNode's id
    text = "[" + nodeId + "] " + text;
    newNode.appendChild( document.createTextNode( text ) );
    return newNode;
} // end function createNewNode

// helper function that switches to a new currentNode
function switchTo( newNode )
{
    currentNode.setAttribute( "class", "" ); // remove old highlighting
    currentNode = newNode;
    currentNode.setAttribute( "class", "highlighted" ); // highlight
    document.getElementById( "gbi" ).value = 
        currentNode.getAttribute( "id" );
} // end function switchTo

window.addEventListener("load",start,false);