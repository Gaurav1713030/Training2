window.addEventListener("load",function()
{
    let name_input = document.getElementById("userInput");
    name_input.addEventListener("keyup",function(event)
    {
        searchUser(event);
    })
 
    window.userSearchXHR = new XMLHttpRequest();
})
 
function searchUser(event)
{   function closeExistingLists(element)
    {
        var foo = document.getElementById("userSuggestion");
        while(foo.firstChild)
        {
            foo.removeChild(foo.firstChild);
        }
    }
    let input = event.target;
    const min_char = 4;
    if(input.value.length<min_char){
        closeExistingLists();
        return undefined;
    }
    else
    {
        console.log(input.value);
        window.userSearchXHR.abort();
        let autodiv = document.getElementById("userSuggestion");
        window.userSearchXHR.onreadystatechange = function()
        {
            // console.log(this);
            if(this.readyState == 4 && this.status == 200)
            {
                console.log(this.responseText);
                var response = JSON.parse(this.responseText);
                console.log(response);
                response.items.forEach(item=>{
                    let divItem = document.createElement('div');
                    divItem.setAttribute("class",'col-md-12');
                    divItem.innerHTML = "<span class='name details'>"+"Name: "+item.login+"</span>";
                    //divItem.innerHTML += "<span class='followers'>"+" Github Link:"+item.html_url+"</span>";
                    divItem.innerHTML += "<img class='img-thumbnail' src='"+item.avatar_url+"'/>";
                    divItem.addEventListener("click",function(event)
                    {
                        alert("Clicked the entry in the list");
                        closeExistingLists();
                    })
                    autodiv.appendChild(divItem);
                })
            }
 
        }
        window.userSearchXHR.open("GET","https://api.github.com/search/users?q="+input.value,true);
        window.userSearchXHR.send();
    }
}