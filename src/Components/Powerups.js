import React, { Component } from 'react';


class Powerups extends Component {
  render() {
    return (
      <div className="Powerups" id="power">
        <h1 id="games">POWER UPS</h1>
        <div id="power-ups"></div>
        <p>The berserk powerup (called berserk pack in the manuals) item resembles a regular medikit in a dark gray (rather than white) box. Containing advanced strength enhancers and stimulants, picking one up greatly increases the damage the player inflicts with his fists (ten times normal) and also fills the screen with a gradually decreasing red haze. Note that though the red haze disappears in seconds, the damage boost to fist attacks lasts till the player exits the level or dies. When the pack is picked up it also immediately heals the player's health to 100%, unless a player's health is already 100% or more, in which case there is no change to health level.

Of the available items, it is the only one that affects the player's ability to attack in a direct way, by increasing fist damage, and it can thus be considered as an additional attack mode, akin to a weapon.

However it is still considered a powerup item as, unlike weapons, when it is picked up the sound for powerups being obtained is played, only a short name-only HUD message confirming the acquisition is shown, and it is counted in the items percentage displayed at the end of each level.</p>
      </div>
    );
  }
}

export default Powerups;