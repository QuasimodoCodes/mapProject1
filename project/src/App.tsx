import { MutableRefObject, useEffect, useRef } from "react";
import { useGeographic } from "ol/proj";
import { OSM } from "ol/source";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";

function App() {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    useGeographic();

    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [10, 59],
        zoom: 8,
      }),
    });

    map.setTarget(mapRef.current);
  }, []);

  return (
    <div className={"map"} ref={mapRef} style={{ height: "100vh", width: "100vw" }}>
      I am a map
    </div>
  );
}

export default App;