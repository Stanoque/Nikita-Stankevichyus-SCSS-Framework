import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

function Icon(props) {
  let iconClass;

  if (props.name === 'header'){
    iconClass = 'fa-angle-double-up';
  } else if (props.name === 'main') {
    iconClass = 'fa-align-justify';
  } else if (props.name === 'aside') {
    iconClass = 'fa-angle-double-left';
  } else {
    iconClass = 'fa-angle-double-down';
  }

  return (
    <i className = {'fas ' + iconClass}></i>
  )
}

function Default(props) {
  
    return (
      <div className = 'container pd-15'>
        <h1 className = 'mg-b-10'>
          < Icon name = {props.name} />
          <span className = 'mg-l-5'>{props.name}</span>
        </h1>
        <p className = 'mg-b-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <a>Дело победителей было угодно Богам, но дело побежденных — Катону.</a>
      </div>
    )
  
}


class Framework extends React.Component {
  render() {
    return (
      <div className="body mg-l-100 mg-r-100">
        <header className="header mg-t-50">
          <Default name='header' />
        </header>
        <main className="main mg-t-50">
          <Default name='main' />
        </main>
        <aside className="aside mg-t-50">
          <Default name='aside' />
        </aside>
        <footer className="footer mg-t-50">
          <Default name='footer' />
        </footer>
      </div>
    )
  }
}


ReactDOM.render(
  <Framework />,
  document.getElementById('root')
);
