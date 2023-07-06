console.log("hello")
var items=document.getElementsByClassName('list-group-item')
console.log(items)
items[1].textContent='hello2'
items[1].style.fontWeight='bold'
items[1].style.backgroundColor='yellow'

for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='grey'
}