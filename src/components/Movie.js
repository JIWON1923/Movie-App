import PropType from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
    return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
      <ul>
        {genres.map((g) =>
          (<li key={g}> {g} </li>))
        }
      </ul>
    </div>
  );
}

Movie.PropType = {
    id: PropType.string.isRequired,
    coverImg: PropType.string.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired
}

export default Movie;