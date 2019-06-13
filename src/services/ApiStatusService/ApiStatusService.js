//TODO: decide on SSE vs WS
import generateMock from "./mock";
const register = []

const notify = (data) => register.forEach(fn => fn(data))

window.setInterval(() => {
  notify(generateMock())
}, 500)

const ApiStatusService = {
  register(cb) {
    if(register.indexOf(cb) < 0) {
      register.push(cb)
    }
  },
  unregister(cb) {
    if(register.indexOf(cb) >= 0) {
      register.splice(register.indexOf(cb), 1);
    }
  }
}




export default ApiStatusService;
