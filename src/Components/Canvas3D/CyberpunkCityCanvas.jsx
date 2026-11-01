import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const CyberpunkCityCanvas = ({ fxMode = 'high' }) => {
  const mountRef = useRef(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    if (fxMode === 'static') {
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch (e) {
      setWebGLSupported(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050811);
    scene.fog = new THREE.FogExp2(0x050811, 0.022);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 4, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: fxMode === 'high', powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, fxMode === 'high' ? 2 : 1));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Neon Cyber Grid Floor
    const gridHelper = new THREE.GridHelper(120, 60, 0x00f3ff, 0x1e293b);
    gridHelper.position.y = -1;
    scene.add(gridHelper);

    // Cyberpunk Skyline Monoliths (Procedural Buildings)
    const buildingGroup = new THREE.Group();
    const buildingCount = fxMode === 'high' ? 45 : 22;
    const buildingGeom = new THREE.BoxGeometry(1, 1, 1);
    
    // Wireframe edge materials
    const cyanWireMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, wireframe: true, transparent: true, opacity: 0.35 });
    const purpleWireMat = new THREE.MeshBasicMaterial({ color: 0xb026ff, wireframe: true, transparent: true, opacity: 0.35 });
    const solidDarkMat = new THREE.MeshBasicMaterial({ color: 0x070b16 });

    for (let i = 0; i < buildingCount; i++) {
      const bHeight = 4 + Math.random() * 16;
      const bWidth = 2 + Math.random() * 3;
      const bDepth = 2 + Math.random() * 3;

      const mesh = new THREE.Mesh(buildingGeom, solidDarkMat);
      mesh.scale.set(bWidth, bHeight, bDepth);
      
      // Position along horizon left and right
      const side = i % 2 === 0 ? 1 : -1;
      const x = side * (8 + Math.random() * 25);
      const z = -5 - Math.random() * 45;
      mesh.position.set(x, bHeight / 2 - 1, z);

      // Add wireframe cage
      const wire = new THREE.Mesh(buildingGeom, (i % 3 === 0) ? purpleWireMat : cyanWireMat);
      wire.scale.copy(mesh.scale);
      wire.position.copy(mesh.position);

      buildingGroup.add(mesh);
      buildingGroup.add(wire);
    }
    scene.add(buildingGroup);

    // Floating Data Particles (Cyber Embers)
    const particleCount = fxMode === 'high' ? 280 : 120;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = Math.random() * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      // Random Cyan or Purple or Yellow
      const isCyan = Math.random() > 0.4;
      colors[i * 3] = isCyan ? 0.0 : 0.7; // R
      colors[i * 3 + 1] = isCyan ? 0.95 : 0.15; // G
      colors[i * 3 + 2] = 1.0; // B
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Atmospheric lights
    const cyanLight = new THREE.PointLight(0x00f3ff, 2, 40);
    cyanLight.position.set(-15, 8, 5);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xb026ff, 2.5, 40);
    purpleLight.position.set(15, 10, -5);
    scene.add(purpleLight);

    // Mouse tilt interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera orientation lerp
      targetX += (mouseX * 1.5 - targetX) * 0.04;
      targetY += (mouseY * 0.8 - targetY) * 0.04;

      camera.position.x = targetX;
      camera.position.y = 4 + targetY;
      camera.lookAt(0, 3, -15);

      // Grid scroll simulation
      gridHelper.position.z = (elapsedTime * 4) % 2;

      // Particle float motion
      const pos = particleGeom.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += 0.03;
        if (pos[i * 3 + 1] > 25) {
          pos[i * 3 + 1] = 0;
        }
      }
      particleGeom.attributes.position.needsUpdate = true;

      // Slow pulse lights
      cyanLight.intensity = 1.8 + Math.sin(elapsedTime * 2) * 0.4;
      purpleLight.intensity = 2.2 + Math.cos(elapsedTime * 2.5) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.innerHTML = '';
      }
      renderer.dispose();
      buildingGeom.dispose();
      particleGeom.dispose();
      cyanWireMat.dispose();
      purpleWireMat.dispose();
      solidDarkMat.dispose();
      particleMat.dispose();
    };
  }, [fxMode]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        background: fxMode === 'static' || !webGLSupported
          ? 'radial-gradient(ellipse at 50% 20%, #0c1833 0%, #050811 75%)'
          : undefined,
      }}
    >
      {fxMode !== 'static' && webGLSupported && (
        <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      )}
      {/* Horizon glow divider line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 243, 255, 0.4), rgba(176, 38, 255, 0.4), transparent)',
          boxShadow: '0 0 10px rgba(0, 243, 255, 0.5)',
        }}
      />
    </div>
  );
};

export default CyberpunkCityCanvas;

