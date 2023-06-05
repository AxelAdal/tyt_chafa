/*Api twiter*/
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
  var contenedor = document.getElementById('contenedor');

  data.forEach(post => {
    var div = document.createElement('div');

    var title = document.createElement('h3');
    title.textContent = post.title;
    div.appendChild(title);

    var body = document.createElement('p');
    body.textContent = 'Body: ' + post.body;
    div.appendChild(body);

    contenedor.appendChild(div);
  });
})
.catch(error => {
});