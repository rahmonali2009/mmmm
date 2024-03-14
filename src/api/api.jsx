import React from 'react'


function apiFun(){
    // console.log("Salom"); 
    fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(json => {
        var img = document.getElementById('img');
        img.setAttribute('src', json.data[0].avatar)
    });  

 
}

export default function api() {
  return (
    <div>
         
         <img id='img' src="" alt="" />
         <button onClick={apiFun}>api tugma</button>

    </div>
  )
}