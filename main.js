// script.js

document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    // const time = document.getElementById('time').value;

    if (name && date) {
        const listItem = document.createElement('li');
        listItem.textContent = `Nombre: ${name}, Fecha: ${date}`;

        document.getElementById('list').appendChild(listItem);

        document.getElementById('attendanceForm').reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

document.getElementById("delete").onclick= function(){
    borrar()
    console.log("go")
}



function borrar(){
    document.getElementById("list").innerHTML='';
}