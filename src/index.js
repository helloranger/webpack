import _ from 'lodash'

async function getComponent() {
  const element = document.createElement('div');

  const {defualt: _} = await import('lodash')
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  
  return element;
  
}

getComponent().then((component) => {
  document.body.appendChild(component)
})