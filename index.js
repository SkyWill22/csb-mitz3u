import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import GlowP from "./GlowP/GlowP.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  GlowP: new GlowP({
    x: 35.00000311533633,
    y: 7,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
