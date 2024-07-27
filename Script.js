document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    // Obtém os valores do formulário
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();

    // Verifica se os campos não estão vazios
    if (name !== "" && password !== "") {
        // Armazena os valores no localStorage (opcional)
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);

        // Esconde o formulário e exibe o resultado
        document.getElementById('initialForm').style.display = 'none';
        document.getElementById('resultContent').innerHTML = `
            <strong>Nome:</strong> ${name}<br>
            <strong>Senha:</strong> ${password}
        `;
        document.getElementById('result').style.display = 'block';

        // Mostra o segundo formulário para o jogo
        setTimeout(() => {
            document.getElementById('result').style.display = 'none';
            document.getElementById('gameForm').style.display = 'block';
        }, 2000); // Tempo de exibição do primeiro resultado
    } else {
        alert("Quer passar sem preencher todos os campos? preenche ai mano.");
    }
});

document.getElementById('yesButton').addEventListener('click', function() {
    playGame('yes');
});

document.getElementById('noButton').addEventListener('click', function() {
    playGame('no');
});

function playGame(option) {
    const name = localStorage.getItem('name');
    let message = "";

    if (option === 'yes') {
        message = `
            Isso é ótimo <strong>${name}</strong>, continue assim!
        `;
    } else if (option === 'no') {
        message = `
            Quer morrer <strong>${name}</strong>?<br>
            ........................./´¯/)<br>
            ......................,/¯..// <br>
            ...................../..../ /<br> 
            ............./´¯/´...´´/´¯¯\`·¸<br> 
            ........../´/.../..../......./¨¯\\<br>
            ........(´(...´(..´......,~/´...´)<br>
            .........\\.................\\/..../ <br>
            ..........´´...\\.......... _.·´ <br>
            ............\\..............( <br>
            ..............\\.............\\ <br>
            .......<br>
        `;
    }

    document.getElementById('gameForm').style.display = 'none';
    document.getElementById('finalResultContent').innerHTML = message;
    document.getElementById('finalResult').style.display = 'block';
}
