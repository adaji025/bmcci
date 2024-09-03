import React, { useState, cloneElement } from 'react';

const ReadMoreComponent = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Convert children to an array if it's not already one
  const childArray = React.Children.toArray(children);
  
  // Calculate the index for 1/3rd of the content
  const cutoffIndex = Math.ceil(childArray.length / 3);

  // Split the children into two parts
  const firstPart = childArray.slice(0, cutoffIndex);
  const secondPart = childArray.slice(cutoffIndex);

  // Function to toggle the text visibility
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* Render the first part of the content */}
      {firstPart.map((child, index) => (
        cloneElement(child, { key: index })
      ))}
      
      {/* Conditionally render the rest of the content */}
      {isExpanded && 
        secondPart.map((child, index) => (
          cloneElement(child, { key: index + cutoffIndex })
        ))
      }

      {/* Button to toggle the visibility */}
      <button onClick={toggleText} className="mt-3" className="text-blue-600 font-bold">
        {isExpanded ? 'View Less' : 'View More'}
      </button>
    </div>
  );
};

export default ReadMoreComponent;
