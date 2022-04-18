const heading = document.createElement('h1');
heading.innerText = 'Output Management';

const button = document.createElement('button');
button.innerText = 'Click me';
button.addEventListener('click', async () => {
  const R = await import('ramda');

  console.log(R.add(1, 3));
});
document.body.appendChild(button);
document.body.appendChild(heading);
