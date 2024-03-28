// @ts-ignore
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const SEPARATION = 100;
const AMOUNTX = 100;
const AMOUNTY = 70;

const numParticles = AMOUNTX * AMOUNTY;
const positions = new Float32Array(numParticles * 3);
const scales = new Float32Array(numParticles);

let i = 0;
let j = 0;

for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2; // z

        scales[j] = 1;

        i += 3;
        j++;
    }
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

const material = new THREE.ShaderMaterial({
    uniforms: {
        color: { value: new THREE.Color(0xffffff) },
    },
    vertexShader: /* glsl */ `
    attribute float scale;

    void main() {
      vec4 mvPosition = modelViewMatrix * vec4(position, 1);
      gl_PointSize = scale * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
    fragmentShader: /* glsl */ `
    uniform vec3 color;

    void main() {
      if (length(gl_PointCoord - 0.5) > 0.475) discard;
      gl_FragColor = vec4(color, 1);
    }
  `,
});

const Particle = () => {
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const position = geometry.attributes.position.array;
        const scale = geometry.attributes.scale.array;

        let i = 0;
        let j = 0;

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                position[i + 1] =
                    Math.sin((ix + time) * 0.3) * 50 +
                    Math.sin((iy + time) * 0.5) * 50;
                scale[j] =
                    (Math.sin((ix + time) * 0.3) + 1) * 2 +
                    (Math.sin((iy + time) * 0.5) + 1) * 2;

                i += 3;
                j++;
            }
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.scale.needsUpdate = true;
    });

    return <points geometry={geometry} material={material} />;
};

const Particles = () => {
    return (
        <Canvas
            className="!fixed top-0 left-0 -z-10"
            camera={{
                fov: 120,
                near: 1,
                far: 10000,
                position: [85, 342, 1000],
            }}
        >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Particle />
            <OrbitControls />
        </Canvas>
    );
};

export default Particles;
