/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowP extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./GlowP/costumes/costume1.svg", {
        x: 197.25,
        y: 97.5
      })
    ];

    this.sounds = [
      new Sound("pop", "./GlowP/sounds/pop.wav"),
      new Sound("recording1", "./GlowP/sounds/recording1.wav"),
      new Sound("recording2", "./GlowP/sounds/recording2.wav"),
      new Sound("recording3", "./GlowP/sounds/recording3.wav"),
      new Sound("recording4", "./GlowP/sounds/recording4.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement videoSensing_videoToggle */ null;
    yield* this.sayAndWait("Hello!", 2);
    while (!this.keyPressed("a")) {
      yield* this.startSound("pop");
      this.audioEffects.pitch = 100;
      yield;
    }
    yield* this.sayAndWait("LOL Bye!", 6);
    yield* this.sayAndWait(
      "The Game Is Over To Play A 2 Time click the flag",
      6
    );
    /* TODO: Implement videoSensing_videoToggle */ null;
  }
}
