 import _ from 'lodash';

  function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var br = document.createElement('br');
    
    btn.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(btn);
    
    btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
      var print = module.default;
      print();
    });
    return element;
  }

  document.body.appendChild(component());
  
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
