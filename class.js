
var itemList=document.querySelector('#items')
itemList.parentNode.style.backgroundColor='grey' 
itemList.children[1].style.backgroundColor='yellow'
 itemList.firstElementChild.textContent='hello1'
 itemList.lastElementChild.textContent='hello4'
 
itemList.previousElementSibling.style.color='pink'

 var newDiv=document.createElement('div')
 newDiv.className='hello'
 newDiv.id='hello1'
 newDiv.setAttribute('title','Hello Div')

 var newDivText=document.createTextNode('Hello World')

 newDiv.appendChild(newDivText)
 

 var container=document.querySelector('header .container')
 console.log(container)
 var h1=document.querySelector('header h1')
 

 container.insertBefore(newDiv,h1)
 newDiv.style.fontSize='30px'