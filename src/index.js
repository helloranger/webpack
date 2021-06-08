import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement('div');

  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack', '你好', '天使'], ' ');
  element.classList.add('hello')

  const myIcon = new Image();
  myIcon.src = Icon
  document.body.appendChild(myIcon)

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());