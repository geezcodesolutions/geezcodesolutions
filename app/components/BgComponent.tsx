// "use client";
// import React, { useState, useEffect, useCallback, useRef } from "react";

// // The set of characters to scramble through. This is now a single-line string.
// const SCRAMBLE_CHARS =
//   "ሀሁሂሃሄህሆለሉሊላሌልሎሏሐሑሒሓሔሕሖሗመሙሚማሜምሞሟሠሡሢሣሤሥሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾሿቀቁቂቃቄቅቆቋበቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲታቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኅኆኋነኑኒናኔንኖኗኘኙኚኛኜኝኞኟአኡኢኣኤእኦከኩኪካኬክኮኳኸኹኺኻኼኽኾዃወዉዊዋዌውዎዐዑዒዓዔዕዖዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮደዱዲዳዴድዶዷጀጁጂጃጄጅጆጇገጉጊጋጌግጎጓጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂፃፄፅፆፈፉፊፋፌፍፎፏፐፑፒፓፔፕፖፗ";
// // Using a font that supports the Ethiopic script for correct rendering.
// const FONT_FAMILY = "'Noto Sans Ethiopic', sansserif";

// // Helper function to get a random character from the set
// const getRandomChar = () =>
//   SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];

// /**
//  * Cell Component
//  * Represents a single character cell in the grid. It manages its own
//  * character state and scrambling animation on mouse hover.
//  */
// const Cell = () => {
//   // State to hold the character currently displayed in the cell
//   const [char, setChar] = useState(getRandomChar());

//   // Ref to hold the ID of the interval so we can clear it later
//   const intervalRef = useRef(null);

//   /**
//    * This function is called when the mouse enters the cell's area.
//    * It starts an interval that repeatedly sets a new random character,
//    * creating the "scrambling" effect.
//    */
//   const startScramble = () => {
//     // Clear any existing interval to prevent multiple animations
//     clearInterval(intervalRef.current);

//     // Start a new interval to change the character every 50ms
//     intervalRef.current = setInterval(() => {
//       setChar(getRandomChar());
//     }, 50);
//   };

//   /**
//    * This function is called when the mouse leaves the cell's area.
//    * It stops the scrambling effect and settles on a new random character.
//    */
//   const stopScramble = () => {
//     clearInterval(intervalRef.current);
//     setChar(getRandomChar());
//   };

//   // This effect hook ensures that the interval is cleared if the component
//   // is ever removed from the screen, preventing memory leaks.
//   useEffect(() => {
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return (
//     <div
//       onMouseEnter={startScramble}
//       onMouseLeave={stopScramble}
//       className="flex items-center justify-center text-lg md:text-xl
//                        text-gray-700 hover:text-green-300 cursor-default
//                        transition-colors duration-200 ease-in-out"
//       style={{
//         fontFamily: FONT_FAMILY,
//         // Add a glowing effect on hover
//         textShadow: "0 0 8px rgba(110, 231, 183, 0)", // Start with no shadow
//       }}
//       onMouseOver={(e) =>
//         (e.currentTarget.style.textShadow = "0 0 8px rgba(110, 231, 183, 0.7)")
//       }
//       onMouseOut={(e) =>
//         (e.currentTarget.style.textShadow = "0 0 8px rgba(110, 231, 183, 0)")
//       }
//     >
//       {char}
//     </div>
//   );
// };

// /**
//  * Main App Component
//  * This component calculates the required grid size to fill the screen
//  * and renders all the individual Cell components.
//  */
// export default function App() {
//   // State to store the number of columns and rows for the grid
//   const [grid, setGrid] = useState({ cols: 0, rows: 0, total: 0 });

//   // This function calculates the grid dimensions based on the window size.
//   // It's wrapped in useCallback to prevent it from being recreated on every render.
//   const calculateGrid = useCallback(() => {
//     const cellSize = 32; // The width and height of each cell in pixels
//     const cols = Math.floor(window.innerWidth / cellSize);
//     const rows = Math.floor(window.innerHeight / cellSize);
//     setGrid({ cols, rows, total: cols * rows });
//   }, []);

//   // This effect hook runs once when the component mounts and adds a resize
//   // event listener to recalculate the grid whenever the window size changes.
//   useEffect(() => {
//     // Add Google Font stylesheet to the document head for Ethiopic characters
//     const link = document.createElement("link");
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@500&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);

//     calculateGrid();
//     window.addEventListener("resize", calculateGrid);

//     // Cleanup function to remove the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("resize", calculateGrid);
//       document.head.removeChild(link);
//     };
//   }, [calculateGrid]);

//   return (
//     <div className="min-h-screen w-full overflow-hidden">
//       <div
//         className="w-full h-screen"
//         style={{
//           display: "grid",
//           gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
//           gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
//         }}
//       >
//         {/* Create an array from the total number of cells and map over it to render each Cell */}
//         {Array.from({ length: grid.total }).map((_, i) => (
//           <Cell key={i} />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

const SCRAMBLE_CHARS =
  "ሀሁሂሃሄህሆለሉሊላሌልሎሏሐሑሒሓሔሕሖሗመሙሚማሜምሞሟሠሡሢሣሤሥሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾሿቀቁቂቃቄቅቆቋበቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲታቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኅኆኋነኑኒናኔንኖኗኘኙኚኛኜኝኞኟአኡኢኣኤእኦከኩኪካኬክኮኳኸኹኺኻኼኽኾዃወዉዊዋዌውዎዐዑዒዓዔዕዖዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮደዱዲዳዴድዶዷጀጁጂጃጄጅጆጇገጉጊጋጌግጎጓጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂፃፄፅፆፈፉፊፋፌፍፎፏፐፑፒፓፔፕፖፗ";

const FONT_FAMILY = "'Noto Sans Ethiopic', sans-serif";
const getRandomChar = () =>
  SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];

const Cell = () => {
  const [char, setChar] = useState(getRandomChar());
  const intervalRef = useRef<number | null>(null);

  const startScramble = () => {
    if (intervalRef.current !== null) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setChar(getRandomChar());
    }, 50);
  };

  const stopScramble = () => {
    if (intervalRef.current !== null) clearInterval(intervalRef.current);
    setChar(getRandomChar());
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
      className="flex items-center justify-center text-lg md:text-xl text-gray-700 hover:text-green-300 cursor-default transition-colors duration-200 ease-in-out"
      style={{
        fontFamily: FONT_FAMILY,
        textShadow: "0 0 8px rgba(110, 231, 183, 0)",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.textShadow = "0 0 8px rgba(110, 231, 183, 0.7)")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.textShadow = "0 0 8px rgba(110, 231, 183, 0)")
      }
    >
      {char}
    </div>
  );
};

export default function AppBackground() {
  const [grid, setGrid] = useState({ cols: 0, rows: 0, total: 0 });

  const calculateGrid = useCallback(() => {
    const cellSize = 32;
    const cols = Math.floor(window.innerWidth / cellSize);
    const pageHeight = Math.max(document.body.scrollHeight, window.innerHeight);
    const rows = Math.floor(pageHeight / cellSize);
    setGrid({ cols, rows, total: cols * rows });
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    calculateGrid();
    window.addEventListener("resize", calculateGrid);

    // Recalculate when page content changes
    const observer = new MutationObserver(calculateGrid);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", calculateGrid);
      observer.disconnect();
      document.head.removeChild(link);
    };
  }, [calculateGrid]);

  return (
    <div
      style={{
        position: "absolute", // allows interactivity with elements
        top: 0,
        left: 0,
        zIndex: 0, // keep it behind main UI but still interactive
        width: "100%",
        height: Math.max(document.body.scrollHeight, window.innerHeight),
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
          gridTemplateRows: `repeat(${grid.rows}, 32px)`,
        }}
      >
        {Array.from({ length: grid.total }).map((_, i) => (
          <Cell key={i} />
        ))}
      </div>
    </div>
  );
}
