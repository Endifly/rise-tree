import React, { useEffect, useState, useRef } from "react";
import usePrevious from "hooks/usePrevious";

interface VertisProps {
  children: any;
}

const calculateBoundingBoxes = (children: any) => {
  const boundingBoxes: any = {};

  console.log(children);

  React.Children.forEach(children, (child) => {
    if (child?.ref?.current) {
      const domNode = child.ref.current;
      const nodeBoundingBox = domNode.getBoundingClientRect();
      console.log(child.key);
      boundingBoxes[child.key] = nodeBoundingBox;
    }
  });
  console.log(boundingBoxes);
  return boundingBoxes;
};

// var scrolled = false

const Vertis: React.FC<VertisProps> = ({ children }) => {
  const [boundingBox, setBoundingBox] = useState({});
  const [prevBoundingBox, setPrevBoundingBox] = useState({});
  const prevChildren = usePrevious(children);
  const scrolled = useRef(false);

  useEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children);
    setBoundingBox(newBoundingBox);
  }, [children]);

  useEffect(() => {
    const prevBoundingBox = calculateBoundingBoxes(prevChildren);
    setPrevBoundingBox(prevBoundingBox);
  }, [prevChildren]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrolled.current = true;
      const prevBoundingBox = calculateBoundingBoxes(prevChildren);
      setPrevBoundingBox(prevBoundingBox);
    });
  }, [prevChildren]);

  useEffect(() => {
    console.log(prevBoundingBox);
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;

    if (true) {
      if (hasPrevBoundingBox) {
        React.Children.forEach(children, (child) => {
          //@ts-ignore
          const domNode = child.ref.current;
          //@ts-ignore
          const firstBox = prevBoundingBox[child.key];
          //@ts-ignore
          const lastBox = boundingBox[child.key];
          const changeInX = firstBox.left - lastBox.left;

          console.log(changeInX);

          //translateY transform ...
          if (changeInX) {
            requestAnimationFrame(() => {
              // Before the DOM paints, invert child to old position
              domNode.style.transform = `translateX(${changeInX}px) scale(0.8)`;
              domNode.style.transition = "transform 0s";

              // domNode.style.transform = `scale(0.9)`;
              // domNode.style.opacity = 0.0;
              // domNode.style.transition = "all 0s";

              requestAnimationFrame(() => {
                // After the previous frame, remove
                // the transistion to play the animation
                domNode.style.transform = "";
                // domNode.style.opacity = 1.0;
                domNode.style.transition = "transform 800ms";
              });
            });
          }
        });
      }
    }

    if (false) {
      if (hasPrevBoundingBox) {
        React.Children.forEach(children, (child) => {
          //@ts-ignore
          const domNode = child.ref.current;
          //@ts-ignore
          const firstBox = prevBoundingBox[child.key];
          //@ts-ignore
          const lastBox = boundingBox[child.key];
          const changeInY = firstBox.top - lastBox.top;

          requestAnimationFrame(() => {
            // domNode.style.transform = `scale(0.9)`;
            // domNode.style.opacity = 0.0;
            // domNode.style.transition = "all 0s";

            requestAnimationFrame(() => {
              // domNode.style.opacity = 1.0;
              // domNode.style.transform = `scale(1)`;
              // domNode.style.transition = `all 500ms`;
              // domNode.style.transitionDelay = `${child.props.order*100}ms`;
            });
          });
        });
        scrolled.current = false;
      }
    }
  }, [boundingBox, children]);

  return children;
};

export default Vertis;
