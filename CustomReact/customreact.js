// function customRender(ReactElement, container) {
//   const domElement = document.createElement(ReactElement.type);
//   domElement.innerHTML = ReactElement.children;
//   domElement.setAttribute('href', ReactElement.props.href);
//   domElement.setAttribute('target', ReactElement.props.target);
//   container.appendChild(domElement);
// }

const ReactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank'
  },
  children: 'Click me to visit Google'
};

function customRender(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;

  for (const prop in element.props) {
    if (prop === 'children') continue; 
    domElement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(domElement);
}

// Target a specific div for your manual render
const manualRoot = document.getElementById('manual-root'); 
customRender(ReactElement, manualRoot);

// Target a different div for actual React
const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
);

ReactDOM.createRoot(document.getElementById('root')).render(anotherElement);