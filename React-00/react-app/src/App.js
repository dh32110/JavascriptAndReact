import logo from './logo.svg';
import './App.css';
// state를 사용하기 위해서 useState라는 훅을 사용하여야 한다. 
// 훅은 리엑트에서 제공하는 기본적인 함수이다. 
import { useState } from 'react';

function Header(props){
  console.log('props', props, props.title);
  return <header>
    {/* 여기서 a tags는 유사HTML이다. */}
  <h1><a href="/" onClick={(event) => {
    // preventDefault는 a태그의 기본 동작을 방지한다.
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
</header>
}

function Nav(props){
  const lis = []
  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      {/* 내가 지정한 id의 값은 숫자였지만 태그를 거치면 그 값은 문자열이 된다. */}
    <a id={t.id} href={'/read/'+t.id} onclick = {
      event => {
        event.preventDefault();
        // 그래서 id값을 숫자로 컨버팅 해주어야 한다.
        props.onChangeMode(Number(event.target.id));
      }
    }>{t.title}</a>
    </li>)
  }
  return <nav>
          <ol>
            {lis}
          </ol>
      </nav>
}

function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}
function App() {
  // useState는 배열을 return하고 
  // 배열의 0번째 원소는 상태의 값을 읽을 때 쓰는 데이터 
  // 1번쨰 데이터는 그 상태가 값을 변경할 때 사용하는 함수이다.
  // const _mode = useState('WELCOME');
  // useState의 인자('WELCOME')는 그 state의 초기 값이다.
  // const mode = _mode[0];
  // state의 값은 0번쨰 인덱스 값으로 읽는다.
  // const setMode = _mode[1];
  // state를 바꿀 때에는 1번째 인덱스의 함수로 바꾼다.
  // 위의 코드를 간단하게 바꾼게 아래의 코드이다.
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] =useState(null);
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){
    let title, body = null;
    for (let i = 0; i < topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode = {() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode = {(_id) => {
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <Article title="Hi" body="Hello, React"></Article>
    </div>
  );
}

export default App;
