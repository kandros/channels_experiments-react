import {Socket} from './phoenix'

const socket = new Socket('ws://localhost:4000/socket', {params: {token: window.userToken}})
window.socket = socket
console.log(socket)
socket.connect()

export default socket