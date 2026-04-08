

  function generateExcuse() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = [
    'before the class',
    'when I was sleeping',
    'while I was exercising',
    'during my lunch',
    'while I was praying'
  ];

  // Función auxiliar para obtener un elemento aleatorio
  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Construcción de la excusa
  let excuse = `${randomItem(who)} ${randomItem(action)} ${randomItem(what)} ${randomItem(when)}.`;

  return excuse;
}
document.addEventListener('DOMContentLoaded', () => {
  const excuseElement = document.querySelector('#excuse');
  const button = document.querySelector('.btn');

  // Inicial
  excuseElement.innerHTML = generateExcuse();

  // Evento
  button.addEventListener('click', () => {
    excuseElement.innerHTML = generateExcuse();
  });
});
