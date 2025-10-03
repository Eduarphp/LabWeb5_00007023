import ScientistCard from "./ScientifiCard";   // o ScientificCard.jsx si lo renombras
import { scientists } from "./scientificos";


function App() {
  return (
    <div className="container">
      <h1>Ejercicio Final – Guía 5</h1>
      {scientists.map((sci) => (
        <ScientistCard
          key={sci.id}
          name={sci.name}
          image={sci.image}
          profession={sci.profession}
          awards={sci.awards}
          discoveries={sci.discoveries}
        />
      ))}
    </div>
  );
}

export default App;
