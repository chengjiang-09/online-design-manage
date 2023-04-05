import CanvasHeaderMenu from "../models/CanvasHeaderMenu"

class CanvasHeaderMenuServer {
    getCanvasHeaderMenu(){
        return CanvasHeaderMenu.findAll()
    }
}

export default new CanvasHeaderMenuServer()