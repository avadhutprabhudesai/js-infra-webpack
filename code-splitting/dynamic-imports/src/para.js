import { add } from './math';

console.log(add(2, 3));

const para = document.createElement('p');
para.innerText = 'This is a paragraph';

const button = document.createElement('button');
button.innerText = 'Click me';
button.addEventListener('click', async () => {
  const R = await import('ramda');

  console.log('Ramda Dynamic import', R.add(1, 3));
});
document.body.appendChild(para);
document.body.appendChild(button);
