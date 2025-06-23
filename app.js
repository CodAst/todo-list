document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-tarea');
    const listaTareas = document.getElementById('lista-tareas');


    formulario.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value;
      const fecha = document.getElementById('fecha').value;
      const descripcion = document.getElementById('descripcion').value;
      const tipo = document.getElementById('tipo').value;
      const prioridad = document.querySelector('input[name="prioridad"]:checked').value;
      
      //ALERTA DE OBLIGATORIOp
      if (!nombre || !fecha || !prioridad) {
        alert('Por favor complete todos los campos obligatorioss');
        return;
      }
      const tarea = {
        nombre,
        fecha,
        descripcion,
        tipo,
        prioridad
      };
      agregarTareaALista(tarea);
      formulario.reset();
    });
    
    function agregarTareaALista(tarea) {
      //CREAR TAREA
      const elementoTarea = document.createElement('div');
      elementoTarea.className = 'tarea';
      
      const fechaFormateada = tarea.fecha ? new Date(tarea.fecha).toLocaleDateString('es-ES') : 'Sin fecha';
      
      //CLASE DE PRIORIDAD
      let clasePrioridad = '';
      switch(tarea.prioridad) {
        case 'Urgente':
          clasePrioridad = 'prioridad-urgente';
          break;
        case 'Normal':
          clasePrioridad = 'prioridad-normal';
          break;
        case 'Baja':
          clasePrioridad = 'prioridad-baja';
          break;
      }
      
      elementoTarea.innerHTML = `
        <h3>${tarea.nombre}</h3>
        <p><strong>Fecha de entrega:</strong> <span class="fecha">${fechaFormateada}</span></p>
        ${tarea.descripcion ? `<p><strong>Descripción:</strong> ${tarea.descripcion}</p>` : ''}
        ${tarea.tipo ? `<p><strong>Tipo:</strong> <span class="tipo">${tarea.tipo}</span></p>` : ''}
        <p><strong>Prioridad:</strong> <span class="prioridad ${clasePrioridad}">${tarea.prioridad}</span></p>
      `;
      
      //AGREGAR TARREA
      listaTareas.appendChild(elementoTarea);
    }
  });

  