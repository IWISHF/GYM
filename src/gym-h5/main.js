import _ from 'lodash';
import './styles/index.less';
import avatar from './images/avatar.jpg';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  btn.innerHTML = 'click me';
  btn.onclick = printMe;
  element.appendChild(btn);
  var myIcon = new Image();
  myIcon.src = avatar;
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());