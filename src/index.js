import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

function Buttons(props) {
  if (props.name === 'main') 
  {
    return ( 
    <div className='buttons'>
        <div className='button-container'>
            <button ontouchstart="" type='button' className='button'>Part-themed button</button>
        </div>
        <div className='button-container'>
            <button ontouchstart="" type='button' className='button--primary'>Button Primary</button>
        </div>
        <div className='button-container'>
            <button ontouchstart="" type='button' className='button--secondary'>Button Secondary</button>
        </div>
        <div className='button-container'>
            <button ontouchstart="" type='button' className='button--success'>Button Success</button>
        </div>
        <div className='button-container'>
            <button ontouchstart="" type='button' className='button--danger'>Button Danger</button>
        </div>
        <div className='button-container'>
            <button ontouchstart="" type='button' className='button--warning'>Button Warning</button>
        </div>
        <div className='button-container'>
            <button ontouchstart="" type='button' className='button--info'>Button Info</button>
        </div>
        <div className='button-container'>
            <button ontouchstart="" type='button' className='button--light'>Button Light</button>
        </div>
        <div className='button-container'>
            <button ontouchstart="" type='button' className='button--dark'>Button Dark</button>
        </div>
        <div className='button-container'>
            <button ontouchstart="" type='button' className='button--muted'>Button Muted</button>
        </div>
    </div>

  )
    }
    else {
      return (
      <div className='button-container'>
            <button ontouchstart="" type='button' className='button'>Part-themed button</button>
      </div>
      )
    }
}

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

function NavBar(props) {

  if (props.name === 'header') {
    return (
      <nav className='nav--horizontal mg-t-15'>
        <ul>
          <li className="nav_link"><a>Menu 1</a></li>
          <li className="nav_link"><a>Menu 2</a></li>
          <li className="nav_link"><a>Menu 3</a></li>
        </ul>
      </nav>
    )
  } else {
    return null;
  }
}

function MainContent(props) {
  if(props.name==='main') {
    return (
      <div className='container examples'>
        <code> this.is => code.example</code>
        <p className='text-color-primary'> Primary text, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
        <p className='text-color-secondary'> Secondary text, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
        <p className='text-color-success'> Success text, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
        <p className='text-color-danger'> Danger text, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
        <p className='text-color-info'> Info text, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
        <p className='text-color-light'> Light text, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
        <p className='text-color-dark'> Dark text, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
        <p className='text-color-muted'> Muted text, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
      </div>
    ) 
  } 
  else return null;
}

function Default(props) {
  
    return (
      <div className = 'content container pd-15'>
        <h1 className = 'mg-b-10'>
          < Icon name = {props.name} />
          <span className = 'mg-l-5'>{props.name}</span>
        </h1>
        <p className = 'mg-b-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <a className = 'mg-b-10' href='https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%BA_%D0%9F%D0%BE%D1%80%D1%86%D0%B8%D0%B9_%D0%9A%D0%B0%D1%82%D0%BE%D0%BD_%D0%9C%D0%BB%D0%B0%D0%B4%D1%88%D0%B8%D0%B9'>
          Дело победителей было угодно Богам, но дело побежденных — Катону.
        </a>
        <Buttons name = {props.name} />
        <NavBar name = {props.name} />
        <MainContent name = {props.name} />
      </div>
    )
  
}


class Framework extends React.Component {
  render() {
    return (
      <div className="body">
        <header className="header header--regular pd-b-100 pd-r-15">
          <Default name='header' />
        </header>
        <main className="main main--regular">
          <Default name='main' />
          <aside className="aside aside--toLeft">
            <Default name='aside' />
          </aside>
        </main>
        <footer className="footer">
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
