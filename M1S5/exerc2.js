document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const form = document.getElementById('serviceForm');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const confirmation = document.getElementById('confirmation');
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const newRequestBtn = document.getElementById('newRequest');
    const resultContent = document.getElementById('resultContent');

    // Validação e navegação
    nextBtn.addEventListener('click', function() {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        
        if (nome && email && email.includes('@')) {
            step1.classList.remove('active');
            step2.classList.add('active');
        } else {
            alert('Por favor, preencha todos os campos corretamente!');
        }
    });

    backBtn.addEventListener('click', function() {
        step2.classList.remove('active');
        step1.classList.add('active');
    });

    // Envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar todos os dados
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            assunto: document.getElementById('assunto').value,
            urgencia: document.querySelector('input[name="urgencia"]:checked').value,
            mensagem: document.getElementById('mensagem').value
        };

        // Mostrar confirmação
        showConfirmation(formData);
    });

    // Nova solicitação
    newRequestBtn.addEventListener('click', function() {
        form.reset();
        confirmation.classList.add('hidden');
        step1.classList.add('active');
    });

    // Exibir confirmação
    function showConfirmation(data) {
        step2.classList.remove('active');
        confirmation.classList.remove('hidden');
        
        resultContent.innerHTML = `
            <p><strong>Nome:</strong> ${data.nome}</p>
            <p><strong>E-mail:</strong> ${data.email}</p>
            <p><strong>Assunto:</strong> ${getAssuntoText(data.assunto)}</p>
            <p><strong>Urgência:</strong> ${data.urgencia.charAt(0).toUpperCase() + data.urgencia.slice(1)}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${data.mensagem}</p>
        `;
    }

    // Helper para texto do assunto
    function getAssuntoText(value) {
        const assuntos = {
            'suporte': 'Suporte Técnico',
            'consulta': 'Consulta',
            'reclamacao': 'Reclamação'
        };
        return assuntos[value] || value;
    }
});