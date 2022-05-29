import Note from './components/Note/Note';
import AddNote from './components/AddNote/AddNote';

import styles from './App.module.css';
import InputNote from './components/InputNote/InputNote';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes</h1>
      </header>
      <div className={styles.gridNotes}>
        <Note heading="16.2.2000" content="This happened today"/>
        <Note heading="12.2.2003" content="Something else"/>
        <Note heading="14.2.2003" content="Never ever"/>
        <Note heading="17.2.2003" content="whatever it is"/>
        <AddNote/>
        <InputNote/>
      </div>
    </div>
  );
}

export default App;
