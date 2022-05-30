import FixedNote from './components/FixedNote/FixedNote';
import AddNote from './components/AddNote/AddNote';

import styles from './App.module.css';
import InputNote from './components/InputNote/InputNote';
import FinalNote from './components/FinalNote/FinalNote';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes</h1>
      </header>
      <div className={styles.gridNotes}>
        <FinalNote state="Fixed State" heading="16.2.2000" content="This happened today"/>
        <FinalNote state="Fixed State" heading="12.2.2003" content="Something else"/>
        <FinalNote state="Fixed State" heading="14.2.2003" content="Never ever"/>
        <FinalNote state="Fixed State" heading="17.2.2003" content="whatever it is"/>
        <FinalNote state="Fixed State" heading="Final Note" content="Something" />
        <FinalNote state="Fixed State" heading="Final Note" content="Something" />
        <FinalNote state="Fixed State" heading="Final Note" content="Something" />
        <FinalNote state="Fixed State" heading="Final Note" content="Something" />
        <FinalNote state="Fixed State" heading="Final Note" content="Something" />
        <FinalNote state="Fixed State" heading="Final Note" content="Something" />
        <FinalNote state="Fixed State" heading="Final Note" content="Something" />
        <FinalNote state="Fixed State" heading="Final Note" content="Something" />
        <FinalNote state="Fixed State" heading="Final Note" content="Something" />

        <AddNote/>
      </div>
    </div>
  );
}

export default App;
