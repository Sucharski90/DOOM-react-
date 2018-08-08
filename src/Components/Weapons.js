import React, { Component } from 'react';


class Weapons extends Component {
  render() {
    return (
      <div className="Weapons">
        <h1 id="games">WEAPONS</h1>
        <div id="weapon-image"></div>
        <p>A weapon is used by the player to attack opponents. It is displayed onscreen as part of the body of the player character to simulate a first person perspective. In Doom, it is the main aspect of the game action.
Each appears in the form of an item that, when picked up, provides the player with an additional weapon with which to attack opponents, as well as some ammo for the corresponding weapon. Normally, weapons are either placed in levels by the designers or dropped by dying opponents (such as zombies in the Doom games). Once a weapon is picked up during a game, any additional weapons of the same type will count only as ammunition.

Each weapon has advantages and disadvantages when used against a given monster. Broadly speaking, however, the larger weapons do more damage but are harder to find and harder to keep stocked with ammunition. In each game, one or two weak weapons require no ammo and are therefore always available.

In multiplayer co-op (In Doom I and Doom II) Since the game doesnt restart the level when any player dies and players can easily respawn, any weapons that were placed in the level won't dissappear after its been picked up. This allow this to be an infinite source for that kind of weapon. However this does not make it an infinite source for ammo. Because of this all available players can repeatedly pick the weapon up either during the first time in level in the current playthrough or to regain it after the player had respawned after their character died. Any weapons dropped by enemies will dissappear when pick up.</p>
      </div>
    );
  }
}

export default Weapons;