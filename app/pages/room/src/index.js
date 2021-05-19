import { constants } from "../../_shared/constants.js"
import RoomController from "./controller.js"
import RoomSocketBuilder from "./util/roomSocket.js"
import View from "./view.js"

const urlParams = new URLSearchParams(window.location.search)
const keys = ['id','topic']

const urlData = keys.map((key) => [key,urlParams.get(key)])



const room ={
    id: '0001',
    topic: 'JS expert'
}

const user = {
    img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png',
    username: 'Alan Martins ' + Date.now() 
}

const roomInfo = {room: {...Object.fromEntries(urlData)},user}

const socketBuilder = new RoomSocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
})

const dependencies = {
    view: View,
    socketBuilder,
    roomInfo
}



await RoomController.initialize(dependencies);