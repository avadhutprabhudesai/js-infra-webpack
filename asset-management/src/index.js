import './style.css';
import headerStyle from './headings.css';
import App from './Comp.jsx';
import Avatar from './avatar.svg';

console.log(headerStyle);
console.log(App);

const asyncFunc = async () => {
  const value = await Promise.resolve(42);
  console.log(value?.someProp);
};

asyncFunc();

const heading = document.createElement('h1');
heading.innerText = 'Asset Management';

heading.classList.add(headerStyle.header);

const image = document.createElement('img');
image.src = Avatar;

document.body.appendChild(heading);
document.body.appendChild(image);
