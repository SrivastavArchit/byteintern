import React, { useState, useEffect } from 'react';
import './CustomCursor.css'; // Import CSS for styling

const Cursor = () => {
  // State to store the cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  const updateCursorPosition = (event) => {
    const { clientX: x, clientY: y } = event;
    setCursorPosition({ x, y });
  };

  // Add mouse move event listener
  useEffect(() => {
    window.addEventListener('mousemove', updateCursorPosition);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
      {/* Custom cursor content */}

    </div>
  );
};

export default Cursor;
