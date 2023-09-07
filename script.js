<<<<<<< HEAD
localStoragekey = 'to-do-list'
=======
localStoragekey = 'list'
>>>>>>> 8cdd4387b9081e95da056528472641a56edb907e
const localStorageName = 'lista-de-compras'
//função de validar se existe mesmo item
function validadeIfExistNewTask() {
    let values = JSON.parse(localStorage.getItem(localStorageName) || '[]')
    let inputValue = document.getElementById('input-new-task').value
    let exists = values.find(x => x.name == inputValue )
    return !exists ? false : true;
}

<<<<<<< HEAD
const newTask = () => {

    let input = document.getElementById('input-new-task')// nome do produto
    input.style.border = '';
=======
const newTask =() =>
{
    let input = document.getElementById('input-new-task')
    let inputPreco = document.getElementById("value-product")//pegando nome do produto digitado
    input.style.border = ''
>>>>>>> 8cdd4387b9081e95da056528472641a56edb907e

    //validação
    if (!input.value) {
        input.style.border = '2px solid red'//inserindo borda vermelha caso não digite nada
        alert('digite algo para inserir em sua lista')
    }
    else if (validadeIfExistNewTask()) {
        alert('Já existe um item com essa descrição')
    }
<<<<<<< HEAD
  

    //increment to localStorage(armazenar dados)
    let values = JSON.parse(localStorage.getItem(localStorageName) || '[]')
    values.push({
        name: input.value,
    })

    localStorage.setItem(localStorageName, JSON.stringify(values))
    showValues()  //adicina
=======
    else 
    {
        if(!inputPreco.value){
            alert('digite Também o Preço do Produto')
        }
    
        
        //increment to localStorage(armazenar dados)
        let values = JSON.parse(localStorage.getItem(localStorageName) || '[]')
        values.push({
                name: input.value,
                preco: inputPreco.value
            })

        localStorage.setItem(localStorageName,JSON.stringify(values))
        showValues()  
    }
>>>>>>> 8cdd4387b9081e95da056528472641a56edb907e
    input.value = ''
    inputPreco.value =''
    input.focus()//implementoFocus
<<<<<<< HEAD
  
=======
    inputPreco.focus()
   
    
>>>>>>> 8cdd4387b9081e95da056528472641a56edb907e

    
}

<<<<<<< HEAD
function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageName) || '[]')
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']}<ul></ul><button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
      </svg></button></li>`//realizando ação de listar intems e preços

    }


=======


function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageName) || '[]')
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i =0; i <values.length; i++)
    {
        list.innerHTML += `<li>${values[i]['name']}<ul>${values[i]['preco']}</ul><button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
      </svg></button></li>`//realizando ação de listar intems e preços
    
    }
    
      
>>>>>>> 8cdd4387b9081e95da056528472641a56edb907e
}
function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localStorageName) || '[]')
    let index = values.findIndex(x => x.name == data);
    values.splice(index, 1)
    localStorage.setItem(localStorageName, JSON.stringify(values))
    showValues()
}

showValues()


