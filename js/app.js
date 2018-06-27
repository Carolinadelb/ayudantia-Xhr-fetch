const display = document.getElementById('display');
const url = 'https://api.github.com/users/Carolinadelb';

const getJSON = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true)
  request.onload = function(){
    let users = JSON.parse(request.responseText);
    if(request.readyState == 4 && request.status == "200"){
      console.table(users);
    }else{
      console.error(users);
    }
  }
  request.send(null);
}

getJSON(url, response => {
  let information = JSON.parse(response);
  console.log(information);



})
