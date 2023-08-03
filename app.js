function agregarTarea() {

  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const nuevaTareaTexto = nuevaTareaInput.value; // Obtenemos el valor del input, que será el texto que se ingreserá

  if (nuevaTareaTexto !== "") { // Validamos que el input no esté vacío
    const listaTareas = document.getElementById("listaTareas"); // Obtenemos el id del contenedor de la lista de tareas
    const nuevaTareaElemento = document.createElement("li"); // Creamos una etiqueta li en html desde javascript
    
    nuevaTareaElemento.textContent = nuevaTareaTexto; // Asignamos el contenido de texto especificado en nuevaTareaTexto al elemento HTML representado por nuevaTareaElemento.

    const completarBoton = document.createElement("button"); // Creamos un button 
    completarBoton.textContent = "Completar"; // Asignamos el texto de Completar
    completarBoton.classList.add("btn-completar"); // Asignamos una clase para estilizar el button
    completarBoton.onclick = function () { // Función que agrega la clase completada al elemento li al hacer click
      nuevaTareaElemento.classList.toggle("completada");
    };

    const eliminarBoton = document.createElement("button"); // Creamos un button  
    eliminarBoton.textContent = "Eliminar"; // Asignamos el texto de Eliminar
    eliminarBoton.classList.add("btn-eliminar");
    eliminarBoton.onclick = function () {// Función que elimina el elemento li al hacer click
      listaTareas.removeChild(nuevaTareaElemento);
    };

    // nuevaTareaElemento agregar elementos completarBoton y eliminarBoton a la nueva tarea
    nuevaTareaElemento.appendChild(completarBoton); // Agrega como hijos los elementos creados
    nuevaTareaElemento.appendChild(eliminarBoton);
    listaTareas.appendChild(nuevaTareaElemento);
    nuevaTareaInput.value = "";
  }
}
