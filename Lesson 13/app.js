document.addEventListener('DOMContentLoaded',function(){
    const list=document.querySelector('#movie-list ul');
    const forms=document.forms;


    list.addEventListener('click',(e)=>{
        if(e.target.className=='delete'){
           const li= e.target.parentElement;
           li.parentNode.removeChild(li)
        }
    });

    const addFrom=forms['add-movie'];
    addFrom.addEventListener('submit',function(e){
        e.preventDefault();

        const value=addFrom.querySelector('input[type="text"]').value
        const li=document.createElement('li')
        const moviename=document.createElement('span')
        const deletebutton=document.createElement('span')

        moviename.textContent=value
        deletebutton.textContent='delete'

        moviename.classList.add('name')
        deletebutton.classList.add('delete')

        li.appendChild(moviename);
        li.appendChild(deletebutton);
        list.appendChild(li);
        
    });


})