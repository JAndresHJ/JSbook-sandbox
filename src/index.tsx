import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
//import CodeCell from './components/CodeCell';
import TextEditor from './components/TextEditor';
import { store } from './state';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
