import { useState } from "react";

import "./styles.css";
const resimler = [
  "https://fastly.picsum.photos/id/324/400/250.jpg?hmac=v7PaBJcEybmDLH0NDGmBbNhQnu7mw4-7lyJgo_PU17M",
  "https://fastly.picsum.photos/id/612/400/250.jpg?hmac=XxLnx_nEV0aFEN-4nhPZiaCccbBIU0843mtONPqZKQ4",
  "https://fastly.picsum.photos/id/377/400/250.jpg?hmac=YW5m2UDR4Djbs7p8CeJ142DPaPijdNFBPSK00gRFzVg",
];

export default function App() {
  const [order, setOrder] = useState(0);

  /*hatalı
  function next() {
    if (order.length < 2) {
      setOrder(order + 1);
    } else setOrder(order);
  }
    
    */

  function next() {
    if (order < resimler.length - 1) {
      setOrder(order + 1);
    } else {
      setOrder(0);
    }
  }

  function prev() {
    setOrder((order - 1 + resimler.length) % resimler.length);
  }

  return (
    <div className="App">
      <h1>{order}</h1>
      <div className="cerceve">
        <img src={resimler[order]} alt="manzara" />
      </div>
      <p>
        <button onClick={prev}>önceki</button>
        <button onClick={next}>sonraki</button>
      </p>
    </div>
  );
}
