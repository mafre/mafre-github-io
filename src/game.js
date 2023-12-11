import Sprite from 'openfl/display/Sprite'
import Engine from './engine'
import Physics from './physics'
import View from './view'
import Overlay from './overlay'
import States from './states'
import AppState from './constant/appState'
import Helper from './util/helper'
import Input from './entity/input'
import Menu from './entity/menu'

class Game extends Sprite {
  constructor () {
    super()

    this.view = new View()
    this.overlay = new Overlay()
    this.engine = new Engine(this.view)
    this.states = new States()

    this.addChild(this.view)
    this.addChild(this.overlay)

    this.engine.start()

    Helper.addEntity(new Physics())
    Helper.addEntity(new Input())
    //Helper.addEntity(new Menu())
    Helper.setState(AppState.Suica)
  }
}

export default Game
