import './App.css';
import './fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="first-half">
          <div className="first-half_header">
            <div className="first-half_header_line"></div>
            <div className="first-half_header_title">Seite im Aufbau...</div>
          </div>
          <div className="first-half_info">
            Verena <span className="first-half_info_and">&</span> Alexander
          </div>
          <div className="first-half_comming-soon">Wir feiern am 29. Juni 2024. Du bist hier richtig. Wir genießen gerade die Feiertage und arbeiten daran euch alle Informationen zur Hochzeit bereit zu stellen. Bis dahin wünschen wir euch frohe Weihnachten</div>
        </div>
        {/* <div className="second-half">Photos are here</div> */}
      </header>
    </div>
  );
}

export default App;
