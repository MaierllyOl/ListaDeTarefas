let tarefa_nome = [];

function renderNova_Tarefa() {

document.querySelector('.sembolinha').innerHTML = '';

tarefa_nome.forEach(task => {

    let li = document.createElement('li');

    li.innerHTML = `<input type="checkbox" name="" id="task-${task.id}">
    <label for="task-${task.id}"> ${task.title} </label>
    <button type="button"> x </button>`;

    li.querySelector('input').addEventListener("change", e => {

        if (e.target.checked) {
            li.classList.add('marcado');
        } 
        else {
            li.classList.remove('marcado');
        }
    });

        li.querySelector('button').addEventListener('click', e => {

            let button = e.target;
            let li = button.parentNode;
            let input = li.querySelector('input');
            let id = input.id;
            let idArray = id.split('-');
            let sembolinhaId = idArray[1];

            let title = li.querySelector('label').innerText;

            if (confirm(`Dejesa mesmo deletar a tarefa ${title}?`)) {

                tarefa_nome = tarefa_nome.filter(task => task.id !== parseInt(sembolinhaId));

                renderNova_Tarefa();

            }
        });
        
        document.querySelector('.sembolinha').append(li);

    });

}

document.querySelector('#nova_tarefa').addEventListener('keyup', e => {

    if (e.key === 'Enter') {

        tarefa_nome.push({

            id: tarefa_nome.length + 1,

            title: e.target.value

        });

        e.target.value = "";

        renderNova_Tarefa();
    }
});

renderNova_Tarefa();
