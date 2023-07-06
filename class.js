
var header=document.querySelector('#main-header')
header.style.borderBottom='solid 4px #ccc'
var input=document.querySelector('input')
input.value='hello world'

var submit=document.querySelector('input[type="submit"]')
submit.value='SEND'
var item=document.querySelector('.list-group-item')
item.style.color='red'


var lastitem=document.querySelector('.list-group-item:last-child')
lastitem.style.color='blue'


var seconditem=document.querySelector('.list-group-item:nth-child(2)')
seconditem.style.color='cyan'



var titles=document.querySelectorAll('.title')
titles[0].textContent='Hello'
var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green"
}