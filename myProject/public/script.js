var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('http://localhost:3000/home',myInit);

fetch(myRequest,myInit)
.then(response => response.json())
.then(function(data) {
    let body = document.querySelector('body');
    body.innerHTML = data.data;
    console.log(data);
  });
