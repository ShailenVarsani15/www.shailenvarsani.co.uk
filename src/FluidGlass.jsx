/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, useEffect, memo } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  useGLTF,
  Preload,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei';
import { easing } from 'maath';

export default function FluidGlass({ text = "REACT\nBITS", lensProps = {} }) {
  // We keep the uppercase transformation, but ensure it's a string first
  // The \n character survives .toUpperCase() just fine!
  const upperText = text.toUpperCase();

  return (
    <Canvas 
      camera={{ position: [0, 0, 20], fov: 15 }} 
      gl={{ alpha: true, antialias: true, toneMapping: THREE.NoToneMapping }}
    >
      <Lens modeProps={lensProps}>
        <Typography content={upperText} />
        <Preload />
      </Lens>
    </Canvas>
  );
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  modeProps = {},
  ...props
}) {
  const ref = useRef();
  const { nodes } = useGLTF(glb);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const geoWidthRef = useRef(1);

  useEffect(() => {
    const geo = nodes[geometryKey]?.geometry;
    if (geo) {
      geo.computeBoundingBox();
      geoWidthRef.current = geo.boundingBox.max.x - geo.boundingBox.min.x || 1;
    }
  }, [nodes, geometryKey]);

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = (pointer.x * v.width) / 2;
    const destY = (pointer.y * v.height) / 2;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    if (modeProps.scale == null) {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      ref.current.scale.setScalar(Math.min(0.15, desired));
    }

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    gl.setClearColor(0xffffff, 1); // Pure white
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps;

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh ref={ref} scale={scale ?? 0.15} rotation-x={Math.PI / 2} geometry={nodes[geometryKey]?.geometry} {...props}>
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, children }) {
  // Path updated with your base URL
  const modelPath = "/www.shailenvarsani.co.uk/3d/lens.glb";
  return (
    <ModeWrapper glb={modelPath} geometryKey="Cylinder" modeProps={modeProps}>
      {children}
    </ModeWrapper>
  );
}

function Typography({ content }) {
  const [fontSize, setFontSize] = useState(window.innerWidth <= 639 ? 0.2 : window.innerWidth <= 1023 ? 0.1 : 0.3);
  const [maxWidth, setMaxWidth] = useState(window.innerWidth <= 639 ? 1.5 : 4);

  // Path updated with your base URL
  const appFont = "/www.shailenvarsani.co.uk/fonts/google-robotto-font.ttf";

  useEffect(() => {
    const onResize = () => {
      const isMobile = window.innerWidth <= 639;
      setFontSize(isMobile ? 0.2 : window.innerWidth <= 1023 ? 0.4 : 0.6);
      setMaxWidth(isMobile ? 1.5 : 4);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <Text
      font={appFont}
      position={[0, 0, 12]}
      fontSize={fontSize}
      maxWidth={maxWidth}
      textAlign="center"
      lineHeight={1}
      letterSpacing={-0.02}
      color="black"
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.005}
      outlineColor="black"
      outlineOpacity={1}
    >
      {content}
    </Text>
  );
}