let tags;

function loadsearch(){
    if(!sessionStorage.getItem("here Previously")){//The sessionStorage object is used to determine whether the
                                                   //user has already visited the page during this browsing session.
    sessionStorage.setItem("here Previously",true);
    document.getElementById("welcomeMessages").innerHTML=
    "Welcome to the favorite tweet searches app";
    }
    let length=localStorage.length;//number of key/value pairs
    tags=[];//empty array
    for(let i=0;i<length;i++){
        tags[i]=localStorage.key(i);
    }
    tags.sort();//sort by characters
    let markup="<ul>";
    let url="https://x.com/search?q=";
    for(let tag in tags){
        let query=url+localStorage.getItem(tags[tag]);
        markup+="<li><span><a href='"+query+"'>"+tags[tag]+
        "</a></span>"+
        "<input id='"+tags[tag]+"'type='button'"+"value='Edit' onclick='editTag(id)'>"+
        "<input id='"+tags[tag]+"'type='button'"+"value='Delete' onclick='deleteTag(id)'>";
    }
    markup+="</ul>";
    document.getElementById("searches").innerHTML=markup;
}

function clearAllSearch(){
    localStorage.clear();
    loadsearch();
}

function saveSearch(){
    let query=document.getElementById("query");
    let tag=document.getElementById("tag");
    localStorage.setItem(tag.value,query.value);
    tag.value="";//clear tag input
    query.value="";
    loadsearch();
}

function deleteTag(tag){
    localStorage.removeItem(tag);
    loadsearch();
}

function editTag(tag){
    document.getElementById("query").value=localStorage[tag];
    document.getElementById("tag").value=tag;
    loadsearch();
}

function start(){
    let savebutton=document.getElementById("savebutton");
    savebutton.addEventListener("click",saveSearch,false);
    let clearbutton=document.getElementById("clearbutton");
    clearbutton.addEventListener("click",clearAllSearch,false);
    loadsearch();
}

window.addEventListener("load",start,false);