const titulo = document.querySelector('h1');
const listaNaoOrdenada = document.querySelector('ul');
const listaOrdenada = document.querySelector('ol');

titulo.textContent = 'Pudim de Leite';

const imagem = document.createElement('img');
imagem.setAttribute('src', 'https://s2-receitas.glbimg.com/Rk9SgtGOMV4--rt2mdDUXAI35z4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/z/0/RsipkzTEu0Y1PGiavCpA/pudim-de-leite-condensado.jpg');
imagem.setAttribute('alt', 'Pudim de Leite Condensado');
imagem.setAttribute('width', '300px');
imagem.setAttribute('height', '200px');

document.body.insertBefore(imagem, titulo);

const ingredientes = document.createElement('h2');
ingredientes.textContent = 'Ingredientes';
listaNaoOrdenada.insertAdjacentElement('beforebegin', ingredientes);

const ulItem1 = document.getElementById('ulitem1');
ulItem1.textContent = '1 lata de leite condensado';
const ulItem2 = document.getElementById('ulitem2');
ulItem2.textContent = '1 lata de leite (a mesma medida do leite condensado)';

const ulItem3 = document.createElement('li');
ulItem3.textContent = '3 ovos';
ulItem2.insertAdjacentElement('afterend', ulItem3);

const modoPreparo = document.createElement('h2');
modoPreparo.textContent = 'Modo de preparo';
listaOrdenada.insertAdjacentElement('beforebegin', modoPreparo);

const olItem1 = document.getElementById('olitem1');
olItem1.textContent = 'Primeiro, bata bem os ovos no liquidificador.';
const olItem2 = document.getElementById('olitem2');
olItem2.textContent = 'Primeiro, bata bem os ovos no liquidificador.)';

const olItem3 = document.createElement('li');
olItem3.textContent = 'Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar';
olItem2.insertAdjacentElement('afterend', olItem3);