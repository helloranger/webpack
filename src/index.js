import _ from 'lodash'
import {printContent} from './print'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');


  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack', '你好', '天使'], ' ');
  btn.innerHTML = "点我打印"
  btn.onclick = printContent

  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());