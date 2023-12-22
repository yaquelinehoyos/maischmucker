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
          <div className="first-half_comming-soon">
            <p>Ihr Lieben,</p>
            <p>am 29. Juni 2024 wollen wir mit euch in der <a className="webpage-link" href='https://www.alte-turnhalle-berlin.de/' target="_blank" rel="noreferrer">Alten Turnhalle</a> in Berlin Friedrichshain unsere Hochzeit feiern.</p>
            <p>Auf dieser Website werdet ihr schon ganz bald alle Informationen zur Feier, zu den Übernachtungsmöglichkeiten und die Möglichkeit zur Zu-und Absage finden. Aktuell arbeiten wir noch daran, alles wichtige zusammenzutragen und für euch hier zur Verfügung zu stellen. Schaut einfach die Tage nochmal hier vorbei.</p>
            <p>Bis dahin wünschen wir euch frohe Weihnachten und einen guten Start ins neue Jahr!</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
