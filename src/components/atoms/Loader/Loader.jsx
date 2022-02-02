import './loader.scss';
import { ReactComponent as LoaderImg } from "./../../../assets/images/loader.svg"

function Loader() {
  return (
    <div className="loader-container">
      <figure>
        <LoaderImg className="loader-img" />
      </figure>
    </div>
  );
}

export default Loader;