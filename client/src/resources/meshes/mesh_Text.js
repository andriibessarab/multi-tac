import {FontLoader} from "three/addons/loaders/FontLoader";
import {TextGeometry} from "three/addons/geometries/TextGeometry";
import * as THREE from "three";

const fontLoader = new FontLoader();

function mesh_Text(text, fontSize, z, fontHeight, xOffset, yOffset, zOffset = 0, setScaleToZeros = false) {
    return new Promise((resolve, reject) => {
        fontLoader.load("/assets/fonts/changa_one_regular.json", (loadedFont) => {
            const textGeometry = new TextGeometry(text, {
                font: loadedFont,
                size: fontSize,
                height: fontHeight,
            });
            const textMaterial = new THREE.MeshNormalMaterial()
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.position.x = xOffset;
            textMesh.position.y = yOffset;
            textMesh.position.z = zOffset;

            textMesh.scale.z = z;
            if (setScaleToZeros) {
                textMesh.scale.x = 0;
                textMesh.scale.y = 0;

            }
            resolve(textMesh);
        }, undefined, reject);
    });
}

export default mesh_Text;
