var socket = io.connect('http://45.55.173.148:8080', { 'forceNew': true });

socket.on('messages', function(data) {  
    console.log(data);
});

function render(data) {  
    var html = data.map(function(elem, index){
        return(`<div>
                 <strong>${elem.author}</strong>:
                 <em>${elem.text}</em>
        </div>`)
    }).join(" ");

    document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function(data) {  
    render(data);
});
function addMessage(e) {  
    var mensaje = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };
  socket.emit('new-message', mensaje);
  return false;
}
