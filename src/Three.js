import * as THREE from "three";
import * as dat from "dat.gui";
import textureImg from "./static/texture.jpg";
import heightImg from "./static/height.png";
import alphaImg from "./static/alpha.png";
import { createRef, useEffect } from "react";
import "./Three.css";

function Three() {
  const divRef = createRef();
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const height = loader.load(heightImg);
    const texture = loader.load(textureImg);
    const alpha = loader.load(alphaImg);

    // const objectColor = "#" + "009ccd";
    // const lightColor = "00bcf7";

    // Debug
    const gui = new dat.GUI({ autoPlace: false });
    gui.domElement.id = "gui";
    // dat.GUI.toggleHide();

    // Canvas
    // const canvas = document.querySelector("canvas.webgl");

    // Scene
    const scene = new THREE.Scene();

    // Objects
    const geometry = new THREE.PlaneBufferGeometry(3, 3, 64, 64);

    // Materials
    const material = new THREE.MeshStandardMaterial({
      color: "#009ccd",
      map: texture,
      displacementMap: height,
      displacementScale: 0.6,
      alphaMap: alpha,
      transparent: true,
      depthTest: false,
    });

    gui.addColor({ color: "#009ccd" }, "color").onChange((colorValue) => {
      material.color.set(colorValue);
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    plane.rotation.x = 5;
    gui
      .add(plane.rotation, "x")
      .min(0)
      .max(2 * Math.PI);

    // // Mesh
    // const sphere = new THREE.Mesh(geometry, material);
    // scene.add(sphere);

    //Lights
    const pointLight = new THREE.PointLight(0x00bcf7, 2);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    gui.add(pointLight.position, "x");
    gui.add(pointLight.position, "y");
    gui.add(pointLight.position, "z");

    gui.addColor({ color: "#00bcf7" }, "color").onChange((colorValue) => {
      pointLight.color.set(colorValue);
    });

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    plane.position.set(sizes.width / 2000, 0.4, 0);

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      const ttt = sizes.width / 2000;
      console.log(ttt);
      plane.position.set(ttt, 0.4, 0);
    });

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 4;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // document.body.appendChild(renderer.domElement);

    // document.body.appendChild(renderer.domElement);
    divRef.current.appendChild(renderer.domElement);
    // console.log(helpo);

    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // camera.position.z = 5;

    // Animate

    const animateTerrain = (event) => {
      mouseY = event.clientY;
    };

    document.addEventListener("mousemove", animateTerrain);

    let mouseY = 0;

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update objects
      // plane.rotation.y = 0.5 * elapsedTime;

      plane.rotation.z = 0.5 * elapsedTime;
      plane.material.displacementScale = 1 + mouseY * 0.0008;

      // requestAnimationFrame(animate);

      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;

      // Render
      renderer.render(scene, camera);

      // Call animate again on the next frame
      window.requestAnimationFrame(animate);
    };

    animate();
  }, [divRef]);

  return (
    <>
      <div className="three" ref={divRef} />;
    </>
  );
}

export default Three;
