const editar = document.getElementsByClassName("editar");
const deletar = document.getElementsByClassName("deletar")

const editarMembro = function() {
    
}

if (editar && deletar) {
    editar.addEventListener("click", function (event) {
    event.preventDefault();
    editarMembro();
  });
}