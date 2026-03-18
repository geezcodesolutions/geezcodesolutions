"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

// A selection of Amharic characters
const amharicLetters = [
  "ሀ",
  "ሁ",
  "ሂ",
  "ሃ",
  "ሄ",
  "ህ",
  "ሆ",
  "ለ",
  "ሉ",
  "ሊ",
  "ላ",
  "ሌ",
  "ል",
  "ሎ",
  "ሏ",
  "ሐ",
  "ሑ",
  "ሒ",
  "ሓ",
  "ሔ",
  "ሕ",
  "ሖ",
  "ሗ",
  "መ",
  "ሙ",
  "ሚ",
  "ማ",
  "ሜ",
  "ም",
  "ሞ",
  "ሟ",
  "ሠ",
  "ሡ",
  "ሢ",
  "ሣ",
  "ሤ",
  "ሥ",
  "ሦ",
  "ሧ",
  "ረ",
  "ሩ",
  "ሪ",
  "ራ",
  "ሬ",
  "ር",
  "ሮ",
  "ሯ",
  "ሰ",
  "ሱ",
  "ሲ",
  "ሳ",
  "ሴ",
  "ስ",
  "ሶ",
  "ሷ",
  "ሸ",
  "ሹ",
  "ሺ",
  "ሻ",
  "ሼ",
  "ሽ",
  "ሾ",
  "ሿ",
  "ቀ",
  "ቁ",
  "ቂ",
  "ቃ",
  "ቄ",
  "ቅ",
  "ቆ",
  "ቋ",
  "በ",
  "ቡ",
  "ቢ",
  "ባ",
  "ቤ",
  "ብ",
  "ቦ",
  "ቧ",
  "ቨ",
  "ቩ",
  "ቪ",
  "ቫ",
  "ቬ",
  "ቭ",
  "ቮ",
  "ቯ",
  "ተ",
  "ቱ",
  "ቲ",
  "ታ",
  "ቴ",
  "ት",
  "ቶ",
  "ቷ",
  "ቸ",
  "ቹ",
  "ቺ",
  "ቻ",
  "ቼ",
  "ች",
  "ቾ",
  "ቿ",
  "ኀ",
  "ኁ",
  "ኂ",
  "ኃ",
  "ኄ",
  "ኅ",
  "ኆ",
  "ኋ",
  "ነ",
  "ኑ",
  "ኒ",
  "ና",
  "ኔ",
  "ን",
  "ኖ",
  "ኗ",
  "ኘ",
  "ኙ",
  "ኚ",
  "ኛ",
  "ኜ",
  "ኝ",
  "ኞ",
  "ኟ",
  "አ",
  "ኡ",
  "ኢ",
  "ኣ",
  "ኤ",
  "እ",
  "ኦ",
  "ከ",
  "ኩ",
  "ኪ",
  "ካ",
  "ኬ",
  "ክ",
  "ኮ",
  "ኳ",
  "ኸ",
  "ኹ",
  "ኺ",
  "ኻ",
  "ኼ",
  "ኽ",
  "ኾ",
  "ዃ",
  "ወ",
  "ዉ",
  "ዊ",
  "ዋ",
  "ዌ",
  "ው",
  "ዎ",
  "ዐ",
  "ዑ",
  "ዒ",
  "ዓ",
  "ዔ",
  "ዕ",
  "ዖ",
  "ዘ",
  "ዙ",
  "ዚ",
  "ዛ",
  "ዜ",
  "ዝ",
  "ዞ",
  "ዟ",
  "ዠ",
  "ዡ",
  "ዢ",
  "ዣ",
  "ዤ",
  "ዥ",
  "ዦ",
  "ዧ",
  "የ",
  "ዩ",
  "ዪ",
  "ያ",
  "ዬ",
  "ይ",
  "ዮ",
  "ደ",
  "ዱ",
  "ዲ",
  "ዳ",
  "ዴ",
  "ድ",
  "ዶ",
  "ዷ",
  "ጀ",
  "ጁ",
  "ጂ",
  "ጃ",
  "ጄ",
  "ጅ",
  "ጆ",
  "ጇ",
  "ገ",
  "ጉ",
  "ጊ",
  "ጋ",
  "ጌ",
  "ግ",
  "ጎ",
  "ጓ",
  "ጠ",
  "ጡ",
  "ጢ",
  "ጣ",
  "ጤ",
  "ጥ",
  "ጦ",
  "ጧ",
  "ጨ",
  "ጩ",
  "ጪ",
  "ጫ",
  "ጬ",
  "ጭ",
  "ጮ",
  "ጯ",
  "ጰ",
  "ጱ",
  "ጲ",
  "ጳ",
  "ጴ",
  "ጵ",
  "ጶ",
  "ጷ",
  "ጸ",
  "ጹ",
  "ጺ",
  "ጻ",
  "ጼ",
  "ጽ",
  "ጾ",
  "ጿ",
  "ፀ",
  "ፁ",
  "ፂ",
  "ፃ",
  "ፄ",
  "ፅ",
  "ፆ",
  "ፈ",
  "ፉ",
  "ፊ",
  "ፋ",
  "ፌ",
  "ፍ",
  "ፎ",
  "ፏ",
  "ፐ",
  "ፑ",
  "ፒ",
  "ፓ",
  "ፔ",
  "ፕ",
  "ፖ",
  "ፗ",
];

function FloatingLetter({ letter, initialPosition }) {
  const textRef = useRef();

  // Randomize rotation speed and floating speed for organic movement
  const [speed, rotSpeedX, rotSpeedY] = useMemo(
    () => [
      Math.random() * 0.02 + 0.005,
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.02,
    ],
    [],
  );

  // useFrame hooks into the Three.js render loop for animation
  useFrame((state) => {
    if (!textRef.current) return;

    // Gentle floating up and down
    textRef.current.position.y +=
      Math.sin(state.clock.elapsedTime * speed) * 0.05;

    // Slow 3D rotation
    textRef.current.rotation.x += rotSpeedX;
    textRef.current.rotation.y += rotSpeedY;
  });

  return (
    <Text
      ref={textRef}
      position={initialPosition}
      fontSize={0.5}
      color="#a78bfa" // Light purple/violet color
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.02}
      outlineColor="#4c1d95" // Darker purple outline for a glowing effect
    >
      {letter}
    </Text>
  );
}

export default function AmharicBackground() {
  // Generate a random spread of letters on mount
  const lettersData = useMemo(() => {
    return Array.from({ length: 266 }).map(() => ({
      letter: amharicLetters[Math.floor(Math.random() * amharicLetters.length)],
      position: [
        (Math.random() - 0.5) * 25, // Spread across X axis
        (Math.random() - 0.5) * 20, // Spread across Y axis
        (Math.random() - 0.5) * 15 - 5, // Spread across Z axis (pushing back slightly)
      ],
    }));
  }, []);

  return (
    // Fixed positioning ensures it stays behind your standard React content
    <div
      //   style={{
      //     width: "full",
      //     height: "full",
      //     position: "fixed",
      //     top: 0,
      //     left: 0,
      //     zIndex: -1,
      //     background: "#020617",
      //   }}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        // This maps exactly to: bg-linear-to-b from-slate-950 via-blue-950 to-blue-800
        background: "linear-gradient(to bottom, #020617, #082f49, #1e40af)",
      }}
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#8b5cf6"
        />

        {/* Map through data and render the letters */}
        {lettersData.map((data, index) => (
          <FloatingLetter
            key={index}
            letter={data.letter}
            initialPosition={data.position}
          />
        ))}

        {/* Fog helps letters fade out naturally as they get further from the camera */}
        <fog attach="fog" args={["#020617", 5, 20]} />
      </Canvas>
    </div>
  );
}
