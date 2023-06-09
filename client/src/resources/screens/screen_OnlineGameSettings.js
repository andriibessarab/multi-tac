import mesh_Text from "../meshes/mesh_Text";


import * as THREE from "three";
import mesh_DecorCross from "../meshes/mesh_DecorCross";
import mesh_DecorCircle from "../meshes/mesh_DecorCircle";
import mesh_hiddenButtonTile from "../meshes/mesh_hiddenButtonTile";

function screen_Menu() {
    const screenComponents = new THREE.Group();

    const buttonTiles = new THREE.Group();

    const waitRoomElement = new THREE.Group();

    screenComponents.add(buttonTiles);
    screenComponents.add(waitRoomElement);

    screenComponents.name = "screenComponents";
    buttonTiles.name = "buttonTiles";
    waitRoomElement.name = "waitRoom";


    mesh_Text("Play Online", 10, 2, 2, -35, 39, -2, true)
        .then((textMesh) => {
            screenComponents.add(textMesh);
        })
        .catch((error) => {
            console.error(error);
        });

    buttonTiles.add(mesh_hiddenButtonTile(25, 10, 1, 0, -14, "join-game"));

    mesh_Text("Join Game", 4, 1, 2, -12.7, -15, -1, true)
        .then((textMesh) => {
            screenComponents.add(textMesh);
        })
        .catch((error) => {
            console.error(error);
        });

    buttonTiles.add(mesh_hiddenButtonTile(31, 10, 1, 0, 11, "create-game"));

    mesh_Text("Create Game", 4, 1, 2, -16, 10, -1, true)
        .then((textMesh) => {
            screenComponents.add(textMesh);
        })
        .catch((error) => {
            console.error(error);
        });

    buttonTiles.add(mesh_hiddenButtonTile(10, 4, 1, 0, -49, "back"));

    mesh_Text("Back", 3, 1, 1.5, -5, -50, -1, true)
        .then((textMesh) => {
            screenComponents.add(textMesh);
        })
        .catch((error) => {
            console.error(error);
        });

    const decorMarkers = new THREE.Group();
    screenComponents.add(decorMarkers);
    decorMarkers.name = "decorMarkers";

    generateRandomCrosses(25);
    generateRandomCircles(25);

    return screenComponents;

    function generateRandomCrosses(n) {
        for (let i = 0; i < n; i++) {
            let x, y, z;
            do {
                x = (Math.random() - 0.5) * 300;
                y = (Math.random() - 0.5) * 200;
                z = (Math.random() - 0.5) * 300;
            } while (
                (x > -50 && x < 50 && z > -80 && z < 80) ||
                (x > -40 && x < 40 && z > -120 && z < 150)
                );
            const xOffset = x;
            const yOffset = y;
            const zOffset = z;
            const xRot = (Math.random() - 0.5) * Math.PI * 2;
            const yRot = (Math.random() - 0.5) * Math.PI * 2;
            const zRot = (Math.random() - 0.5) * Math.PI * 2;
            const opacity = Math.random() * 0.5 + 0.5;
            const scale = Math.random() * 1 + 1;

            const circle = mesh_DecorCross(xOffset, yOffset, zOffset, xRot, yRot, zRot, opacity, false);
            circle.scale.set(scale, scale, scale);
            decorMarkers.add(circle);
        }
    }

    function generateRandomCircles(n) {
        for (let i = 0; i < n; i++) {
            let x, y, z;
            do {
                x = (Math.random() - 0.5) * 300;
                y = (Math.random() - 0.5) * 200;
                z = (Math.random() - 0.5) * 300;
            } while (
                (x > -50 && x < 50 && z > -80 && z < 80) ||
                (x > -40 && x < 40 && z > -120 && z < 150)
                );
            const xOffset = x;
            const yOffset = y;
            const zOffset = z;
            const xRot = (Math.random() - 0.5) * Math.PI * 2;
            const yRot = (Math.random() - 0.5) * Math.PI * 2;
            const zRot = (Math.random() - 0.5) * Math.PI * 2;
            const opacity = Math.random() * 0.5 + 0.5;
            const scale = Math.random() * 1 + 1;

            const circle = mesh_DecorCircle(xOffset, yOffset, zOffset, xRot, yRot, zRot, opacity, false);
            circle.scale.set(scale, scale, scale);
            decorMarkers.add(circle);
        }
    }


}

export default screen_Menu;



