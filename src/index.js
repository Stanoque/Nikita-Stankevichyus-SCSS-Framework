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
    else if (props.name === 'aside'){
      return (
        <div>
          <div className='button-container'>
            <button ontouchstart="" type='button' className='button'>Part-themed button</button>
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
  } else if (props.name === 'Left') {
    iconClass = 'fa-angle-double-left';
  } else if (props.name === 'Right'){
    iconClass = 'fa-angle-double-right'
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
          <li className="nav_link"><a>Horizontal</a></li>
          <li className="nav_link"><a>Part-themed</a></li>
          <li className="nav_link"><a>NavBar</a></li>
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
        <h3 className='text-color-primary'> Primary text</h3>
        <h3 className='text-color-secondary'> Secondary text </h3>
        <h3 className='text-color-success'> Success text </h3>
        <h3 className='text-color-danger'> Danger text </h3>
        <h3 className='text-color-info'> Info text </h3>
        <h3 className='text-color-light'> Light text </h3>
        <h3 className='text-color-dark'> Dark text </h3>
        <h3 className='text-color-muted'> Muted text </h3>
      </div>
    ) 
  } 
  else return null;
}

class ShowModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shown: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({ shown: !this.state })
  }

  render() {
    return (
      <div className = 'container--flex justify-center'>
        <button className = 'button button--danger'>Show/Hide Modal</button>
      </div>
    )
  }
}

function Default(props) {
  
    return (
      <div className = 'content container pd-15'>
        <h1 className = 'mg-b-10 '>
          < Icon name = {props.name} />
          <span className = 'mg-l-5'>{props.name}</span>
        </h1>
        <p className = 'mg-b-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <input className = 'mg-b-10' type='text' placeholder='Part-themed input'></input>
        <a className = 'mg-b-10' href='https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%BA_%D0%9F%D0%BE%D1%80%D1%86%D0%B8%D0%B9_%D0%9A%D0%B0%D1%82%D0%BE%D0%BD_%D0%9C%D0%BB%D0%B0%D0%B4%D1%88%D0%B8%D0%B9'>
          Дело победителей было угодно Богам, но дело побежденных — Катону.
        </a>
        <Buttons name = {props.name} />
        <NavBar name = {props.name} />
        <MainContent name = {props.name} />
      </div>
    )
  
}

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side: 'Left',
    };
    this.toggleSide = this.toggleSide.bind(this);
  }
  toggleSide() {
    if (this.state.side === 'Left') {
      this.setState({ side: 'Right' });
    } else {
      this.setState({ side: 'Left' });
    }
  }

  render() {
    return (
      <aside className = {'aside aside--to'+this.state.side}>
        <div className = 'content container pd-15'>
          <h1 className = 'mg-b-10'>
            < Icon name = {this.state.side} />
            <span className = 'mg-l-5'>aside</span>
          </h1>
          <p className = 'mg-b-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <input className = 'mg-b-10' type='text' placeholder='Part-themed input'></input>
          <a className = 'mg-b-10' href='https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%BA_%D0%9F%D0%BE%D1%80%D1%86%D0%B8%D0%B9_%D0%9A%D0%B0%D1%82%D0%BE%D0%BD_%D0%9C%D0%BB%D0%B0%D0%B4%D1%88%D0%B8%D0%B9'>
            Дело победителей было угодно Богам, но дело побежденных — Катону.
          </a>
          <Buttons name = 'aside' />
          <NavBar name = 'aside' />
        < MainContent name = 'aside' />
        </div>
        <div className='button-container container--flex justify--center mg-t-10'>
            <button ontouchstart="" type='button' className='button button--danger' onClick = {this.toggleSide}>Change Aside Side</button>
        </div>
      </aside>
    )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
    };
    this.toggleFix = this.toggleFix.bind(this);
  }
  toggleFix() {
    this.setState({ fixed: !this.state.fixed });
  }

  render() {
    return (
      <header className = {'pd-b-100 pd-r-15 header '+ (this.state.fixed ? 'header--fixed' : 'header--regular')}>
        <div className = 'content container pd-15'>
          <h1 className = 'mg-b-10'>
            < Icon name = 'header' />
            <span className = 'mg-l-5'>header</span>
          </h1>
          <p className = 'mg-b-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <input className = 'mg-b-10' type='text' placeholder='Part-themed input'></input>
          <a className = 'mg-b-10' href='https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%BA_%D0%9F%D0%BE%D1%80%D1%86%D0%B8%D0%B9_%D0%9A%D0%B0%D1%82%D0%BE%D0%BD_%D0%9C%D0%BB%D0%B0%D0%B4%D1%88%D0%B8%D0%B9'>
            Дело победителей было угодно Богам, но дело побежденных — Катону.
          </a>
          <Buttons name = 'header' />
          <NavBar name = 'header' />
        < MainContent name = 'header' />
        </div>
        <div className='button-container container--flex justify--center mg-t-10'>
            <button ontouchstart="" type='button' className='button button--danger' onClick = {this.toggleFix}>Fix/Release Header</button>
        </div>
      </header>
    )
  }
}


class Framework extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      shown: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ shown: !this.state.shown })
  }

  

  render() {
    return (
      <div className="body">
        <div className = {'modal_fade '+ (this.state.shown ? 'modal_fade_trick' : '')}></div>
        <div className = {'test-modal container--flex justify--center items--center modal_window '+ (this.state.shown ? '' : 'hidden')}>
          
            <button className = 'button--warning' onClick={this.toggleModal}>Close</button>
          
        </div>
        <Header />
        {/* <header className="header header--regular pd-b-100 pd-r-15">
          <Default name='header' />
        </header> */}
        <main className="main main--regular">
          <Default name='main' />
          <div className = 'container--flex justify--center align--center mg-v-50 mg-r-10'>
            <button className = 'button button--danger' onClick={this.toggleModal}>Show/Hide Modal</button>
          </div>
          <Aside />
          {/* <aside className="aside aside--toLeft">
            <Default name='aside' />
          </aside> */}
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
