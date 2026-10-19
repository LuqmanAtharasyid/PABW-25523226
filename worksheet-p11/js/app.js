import { ambilProyek } from "./api.js";
import { render, tampilkanGalat, aturMemuat } from "./dom.js";

async function muatProyek() {
  aturMemuat(true);

  try {
    const data = await ambilProyek();
    render(data);
  } catch (galat) {
    tampilkanGalat(galat);
  } finally {
    aturMemuat(false);
  }
}

muatProyek();
