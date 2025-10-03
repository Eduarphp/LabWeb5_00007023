export default function ScientifiCard({
  name = "Sin nombre",
  image = "",
  profession = "—",
  awards = [],   // 👈 valor por defecto siempre array
  discoveries = "—",
}) {
  const awardsCount = awards.length; // ahora siempre seguro
  const awardsText = awards.join(", ");

  return (
    <article className="card">
      <div className="card-header">
        <img
          className="photo"
          src={image || "https://via.placeholder.com/120?text=No+image"}
          alt={name}
        />
        <h2 className="card-title">{name}</h2>
      </div>
      <ul className="card-list">
        <li>
          <strong>Profesión:</strong> {profession}
        </li>
        <li>
          <strong>Premios:</strong> {awardsCount}
          {awardsCount > 0 ? ` (${awardsText})` : ""}
        </li>
        <li>
          <strong>Descubrió:</strong> {discoveries}
        </li>
      </ul>
    </article>
  );
}
