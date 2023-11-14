import { error } from "console";
import * as THREE from "three";
import GLTFLoader from "three-gltf-loader";

const scenePath = "/public/scene.gltf";

export const LoadGLTFByPath = (scene) => {
  return new Promise((resolve, reject) => {
    // Create a loader
    const loader = new GLTFLoader();
    // Load the GLTF file
    loader.load(
      scenePath,
      (gltf) => {
        scene.add(gltf.scene);
        resolve(scene);
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
};
