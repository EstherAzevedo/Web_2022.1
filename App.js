import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from './atividade/Home';
import About from './atividade/About';
import Page1 from './atividade/Page1';
import Page2 from './atividade/Page2';
import CreateStudent from './atividade/students/CreateStudent';
import EditStudent from './atividade/students/EditStudent';
import ListStudent from './atividade/students/ListStudent';
import CreateProfessor from "./atividade/professor/CreateProfessor";
import EditProfessor from "./atividade/professor/EditProfessor";
import ListProfessor from "./atividade/professor/ListProfessor";
//import HelloWorld from './components/HelloWorld'
//import Atividade from './components/Atividade';
//import Questao3 from './components/Questao3';
//import Questao3 from './components/Questao1';
/*import Casa from './components/Casa';
import Personagem from './components/Personagem';
import IMC from './components/IMC';
import ReactDOM from 'react-dom';
import { DirtyJonas } from './components/Dark';
import Arena from './component/Arena';
import Hero from './component/Hero';
import Enemy from './component/Enemy';
import World from './component/World';
import Time from './exemplo/Time';
import Character from './exemplo/Character';
import Pai from './filho_pai/Pai';
import MinhaClasse from './classes/MinhaClasse';
*/
/*
function App(){
  return(//filhos de Time, definição das propriedades
    <div className='App'>
      <Time time='2056' terra='original'> 
        <Character name='Ulrich Nielson' time='1986'/> 
        <Character name='Mikkel Nielson' time='2019'/>
        <Character name='Claudia Tiedman' time='2056'/>
        <Character name='Ulrich Nielson' time='1986'/>
      </Time>
    </div>
  )
}*/

/*
function App (){
    return(
        <div className='App'>
            <World>
                <Arena Arena = "Dressrosa"/>
                <Hero nome = "Luffy"/>       
                <Enemy nome = "Jesus Burguess"/>
            </World>
            
            <World>
                <Arena Arena = "Wano"/>
                <Hero nome = "Luffy"/>       
                <Enemy nome = "Kaidou"/>
            </World>
        </div>
    )
}

*/
/*
function App (){
    return(
        <div className='App'>
            <Questão02 />
        </div>
    )
}
*/

/*
function App (){
    return(
        <div className='App'>
            <Questão03 />
        </div>
    )
}


/*
function App() {
  return (
    <div className='App'>
      <Questao3
        nome = 'Esther'
        curso = 'Si'
        turn = 'Madrugada'
        universidade = 'UFC'
      />
      <h2>Jesus</h2>
     
    </div>
    
  )
}
function App() {
  return (
    <div className='App'>
      <Questao3/>
    </div>
    
  )
}*/

/*
function App() {
  return (
    <div className='App'>
      <Arena/>
    </div>
    
  )
  }*/
/*
function App(){
  return(
    <div className='App'>
      <IMC peso='57' altura='1.62'/>
    </div>
  )
}*/
/*
function App(){
  return(
    <div className='App'>
      <Pai></Pai>
    </div>
  )
}*/

/*function App(){
  return(
    <div className='App'>
      <MinhaClasse nome='Esther'/>

    </div>
  )
}*/



function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Estudante
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="navitem">
                  <Link to="/createStudent" className="nav-link">
                    Criar Estudante
                  </Link>
                </li>
                <li className="navitem">
                  <Link to="/listStudent" className="nav-link">
                    Listar Estudante
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Professor
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="navitem">
                  <Link to="/createProfessor" className="nav-link">
                    Criar Professor
                  </Link>
                </li>
                <li className="navitem">
                  <Link to="/listProfessor" className="nav-link">
                    Listar Professor
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

export default App;
