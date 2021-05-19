import { constants } from "../../_shared/constants.js";
import LobbyController from "./controller.js";
import LoobySocketBuilder from "./util/lobbySocketBuilder.js";
import View from "./view.js";

const user = {
    img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png',
    username: 'Alan Martins ' + Date.now() 
}

const socketBuilder = new LoobySocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.lobby 
})

const dependencies = {
    socketBuilder,
    user,
    view: View
}

await LobbyController.initialize(dependencies)