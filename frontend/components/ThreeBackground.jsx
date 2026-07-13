import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const W = window.innerWidth;
    const H = window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    camera.position.set(0, 0, 28);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x1e90ff, 0.4);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);
    const pointLight1 = new THREE.PointLight(0x1e90ff, 1.5, 60);
    pointLight1.position.set(-15, 10, 5);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xffd700, 1.0, 60);
    pointLight2.position.set(15, -10, 5);
    scene.add(pointLight2);

    // Materials
    const navyMat = new THREE.MeshStandardMaterial({ color: 0x0f2a5e, metalness: 0.8, roughness: 0.3 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x1e90ff, metalness: 0.9, roughness: 0.2, emissive: 0x0a3a7a, emissiveIntensity: 0.3 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xc0922a, metalness: 1.0, roughness: 0.2 });
    const wireMat = new THREE.MeshBasicMaterial({ color: 0x2a52a0, wireframe: true });

    // Gear shape builder
    function makeGear(teeth, outerR, innerR, toothH, depth) {
      const shape = new THREE.Shape();
      const total = teeth * 2;
      for (let i = 0; i <= total; i++) {
        const angle = (i / total) * Math.PI * 2;
        const r = i % 2 === 0 ? outerR : outerR - toothH;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }
      // Hole
      const hole = new THREE.Path();
      for (let i = 0; i <= 32; i++) {
        const a = (i / 32) * Math.PI * 2;
        if (i === 0) hole.moveTo(Math.cos(a) * innerR, Math.sin(a) * innerR);
        else hole.lineTo(Math.cos(a) * innerR, Math.sin(a) * innerR);
      }
      shape.holes.push(hole);
      const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 2 });
      return geo;
    }

    // Create gears
    const gears = [];

    const gearConfigs = [
      { teeth: 16, outerR: 3.2, innerR: 1.2, toothH: 0.5, depth: 0.6, mat: navyMat,   pos: [ -6,  6, -8],  speed: 0.008 },
      { teeth: 10, outerR: 2.0, innerR: 0.8, toothH: 0.35, depth: 0.5, mat: accentMat, pos: [  4,  5, -6],  speed: -0.013 },
      { teeth: 20, outerR: 4.2, innerR: 1.8, toothH: 0.6, depth: 0.7, mat: goldMat,   pos: [  8, -4, -10], speed: 0.006 },
      { teeth: 12, outerR: 2.5, innerR: 1.0, toothH: 0.4, depth: 0.5, mat: navyMat,   pos: [ -4, -6, -7],  speed: -0.010 },
      { teeth: 8,  outerR: 1.6, innerR: 0.6, toothH: 0.3, depth: 0.4, mat: accentMat, pos: [  6,  2, -5],  speed: 0.015 },
      { teeth: 14, outerR: 3.0, innerR: 1.1, toothH: 0.45, depth: 0.6, mat: wireMat,  pos: [  0, -8, -12], speed: 0.005 },
      { teeth: 18, outerR: 3.8, innerR: 1.5, toothH: 0.55, depth: 0.65, mat: goldMat, pos: [ -8, -3, -9],  speed: -0.007 },
      { teeth: 6,  outerR: 1.2, innerR: 0.4, toothH: 0.25, depth: 0.35, mat: navyMat, pos: [  2,  8, -4],  speed: 0.020 },
    ];

    gearConfigs.forEach(cfg => {
      const geo = makeGear(cfg.teeth, cfg.outerR, cfg.innerR, cfg.toothH, cfg.depth);
      const mesh = new THREE.Mesh(geo, cfg.mat);
      mesh.position.set(...cfg.pos);
      mesh.rotation.x = Math.random() * 0.5;
      mesh.userData.speed = cfg.speed;
      mesh.userData.floatOffset = Math.random() * Math.PI * 2;
      scene.add(mesh);
      gears.push(mesh);
    });

    // Floating bolts/cylinders
    const boltGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.6, 8);
    const boltHeadGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.15, 6);
    for (let i = 0; i < 20; i++) {
      const bolt = new THREE.Mesh(boltGeo, goldMat);
      const head = new THREE.Mesh(boltHeadGeo, goldMat);
      head.position.y = 0.375;
      const group = new THREE.Group();
      group.add(bolt); group.add(head);
      group.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 24,
        (Math.random() - 0.5) * 10 - 5
      );
      group.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      group.userData.speed = (Math.random() - 0.5) * 0.01;
      group.userData.floatOffset = Math.random() * Math.PI * 2;
      scene.add(group);
      gears.push(group);
    }

    // Floating hex nuts
    const nutShape = new THREE.Shape();
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      if (i === 0) nutShape.moveTo(Math.cos(a) * 0.3, Math.sin(a) * 0.3);
      else nutShape.lineTo(Math.cos(a) * 0.3, Math.sin(a) * 0.3);
    }
    const nutHole = new THREE.Path();
    for (let i = 0; i <= 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      if (i === 0) nutHole.moveTo(Math.cos(a) * 0.13, Math.sin(a) * 0.13);
      else nutHole.lineTo(Math.cos(a) * 0.13, Math.sin(a) * 0.13);
    }
    nutShape.holes.push(nutHole);
    const nutGeo = new THREE.ExtrudeGeometry(nutShape, { depth: 0.18, bevelEnabled: false });

    for (let i = 0; i < 18; i++) {
      const nut = new THREE.Mesh(nutGeo, i % 2 === 0 ? accentMat : navyMat);
      nut.position.set(
        (Math.random() - 0.5) * 34,
        (Math.random() - 0.5) * 26,
        (Math.random() - 0.5) * 8 - 4
      );
      nut.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      nut.userData.speed = (Math.random() - 0.5) * 0.012;
      nut.userData.floatOffset = Math.random() * Math.PI * 2;
      scene.add(nut);
      gears.push(nut);
    }

    // Particle field
    const particleCount = 300;
    const pPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3]     = (Math.random() - 0.5) * 60;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({ color: 0x2a52a0, size: 0.08, transparent: true, opacity: 0.6 });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Scroll parallax
    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', onScroll);

    // Mouse parallax
    let mouseX = 0, mouseY = 0;
    const onMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse);

    // Resize
    const onResize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    let animId;
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      gears.forEach(obj => {
        obj.rotation.z += obj.userData.speed || 0;
        obj.position.y += Math.sin(t + obj.userData.floatOffset) * 0.003;
      });

      particles.rotation.y = t * 0.02;

      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 1.5 - camera.position.y + scrollY * 0.003) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'linear-gradient(135deg, #091d45 0%, #0f2a5e 50%, #1a3a7a 100%)',
      }}
    />
  );
}
