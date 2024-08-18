import "./App.css";
import { SeccionBox } from "./components/Seccion";
import { SeccionSongs } from "./components/Seccion";
import { SeccionCircle } from "./components/Seccion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faPlay,
  faForward,
  faBackward,
  faVolumeUp,
  faVolumeMute,
  faRandom,
  faRedo,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

const user = {
  name: "Melina Saucedo",
  img: "/src/assets/perfil2.jpeg",
};
type playlist = {
  img: string;
  texto1: string;
  texto2: string;
  songs?: string;
};

const arrayPL: playlist[] = [
  {
    img: "/src/assets/portada.jpeg",
    texto1: "PlayList Name 1",
    texto2: "Artist Name",
    songs: "20 songs",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "PlayList Name 2",
    texto2: "Artist Name",
    songs: "20 songs",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "PlayList Name 3",
    texto2: "Artist Name",
    songs: "20 songs",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "PlayList Name 4",
    texto2: "Artist Name",
    songs: "20 songs",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "PlayList Name 5",
    texto2: "Artist Name",
    songs: "20 songs",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "PlayList Name 6",
    texto2: "Artist Name",
    songs: "20 songs",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "PlayList Name 7",
    texto2: "Artist Name",
    songs: "20 songs",
  },
];
const arrayALB: playlist[] = [
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "Listen Again",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "Listen Again",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "Listen Again",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "Listen Again",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "Listen Again",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "Listen Again",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "Listen Again",
  },
];
const arrayART: playlist[] = [
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "4,53 suscribers",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "4,53 suscribers",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "4,53 suscribers",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "4,53 suscribers",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "4,53 suscribers",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "4,53 suscribers",
  },
  {
    img: "/src/assets/portada.jpeg",
    texto1: "Listen Again",
    texto2: "4,53 suscribers",
  },
];
const arrayCAN: playlist[] = [
  {
    img: "/src/assets/elvis.jpeg",
    texto1: "Nombre de cancion",
    texto2: "Nombre de Artista",
  },
  {
    img: "/src/assets/elvis.jpeg",
    texto1: "Nombre de cancion",
    texto2: "Nombre de Artista",
  },
  {
    img: "/src/assets/elvis.jpeg",
    texto1: "Nombre de cancion",
    texto2: "Nombre de Artista",
  },
  {
    img: "/src/assets/elvis.jpeg",
    texto1: "Nombre de cancion",
    texto2: "Nombre de Artista",
  },
  {
    img: "/src/assets/elvis.jpeg",
    texto1: "Nombre de cancion",
    texto2: "Nombre de Artista",
  },
  {
    img: "/src/assets/elvis.jpeg",
    texto1: "Nombre de cancion",
    texto2: "Nombre de Artista",
  },
  {
    img: "/src/assets/elvis.jpeg",
    texto1: "Nombre de cancion",
    texto2: "Nombre de Artista",
  },
  {
    img: "/src/assets/elvis.jpeg",
    texto1: "Nombre de cancion",
    texto2: "Nombre de Artista",
  },
  {
    img: "/src/assets/elvis.jpeg",
    texto1: "Nombre de cancion",
    texto2: "Nombre de Artista",
  },
  {
    img: "/src/assets/elvis.jpeg",
    texto1: "Nombre de cancion",
    texto2: "Nombre de Artista",
  },
  {
    img: "/src/assets/elvis.jpeg",
    texto1: "Nombre de cancion",
    texto2: "Nombre de Artista",
  },
];

function App() {
  return (
    <>
      <header>
        <FontAwesomeIcon icon={faYoutube} size="4x" color="red" />
        <input className="buscador" type="text" placeholder="Search"></input>
        <img className="share" src="./src/assets/tv.png"></img>
        <img className="avatar" src="./src/assets/perfil2.jpeg"></img>
      </header>

      <main>
        <SeccionBox
          user={user}
          texto1={user.name}
          texto2="Listen Again"
          arrayCard={arrayPL}
        />
        <SeccionSongs
          user={user}
          texto1="START RADIO FROM A SONG"
          texto2="Quick picks"
          arrayCard={arrayCAN}
        />
        <SeccionBox
          user={user}
          texto1=""
          texto2="Recommended albums"
          arrayCard={arrayALB}         
        />
        <SeccionCircle
          user={user}
          texto1="SIMILAR TO"
          texto2="A GENERIC ARTIST"
          arrayCard={arrayART}
        />
      </main>

      <footer className="reproductor">
        <div className="music-player">
          <div className="controls">
            <FontAwesomeIcon icon={faBackward} />
            <FontAwesomeIcon icon={faPlay} />
            <FontAwesomeIcon icon={faForward} />
          </div>
          <div className="cancion">
            <img src="/src/assets/Elvis.jpeg" alt="" />
            <div className="text">
              <h4>Can't Help Falling in Love</h4>
              <p>Elvis Presley - 100K views - 80k likes</p>
            </div>
            <img className="botonesMed" src="/src/assets/likes.png" alt="" />
          </div>

          <div className="like-dislike">
            <FontAwesomeIcon icon={faThumbsUp} />
            <FontAwesomeIcon icon={faThumbsDown} />
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>


          <div className="volume">
            <FontAwesomeIcon icon={faVolumeUp} />
            <FontAwesomeIcon icon={faVolumeMute} />
          </div>

          

          <div className="other-controls">
            <FontAwesomeIcon icon={faRandom} />
            <FontAwesomeIcon icon={faRedo} />
          </div>

          
        </div>
      </footer>
    </>
  );
}
export default App;
