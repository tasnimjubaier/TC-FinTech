import { euclideanDistance } from 'face-api.js'
import * as faceapi from 'face-api.js';

// implements nodejs wrappers for HTMLCanvasElement, HTMLImageElement, ImageData

// patch nodejs environment, we need to provide an implementation of
// HTMLCanvasElement and HTMLImageElement

const getImage = () => {

}


export const detectFace = () => {
    console.log(faceapi.nets)
}

const compareFaces = (face_1, face_2) => {
    
}

export default compareFaces