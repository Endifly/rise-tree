import { useCallback, useEffect, useRef, useState } from "react";
import { BaseChildren, BaseStyle } from "types/style";

interface Props extends BaseStyle, BaseChildren {}
const position = { x: 0, y: 0 };
let scrollLeft: any;
let isDragable = false;

const Slider: React.FC<Props> = ({ children, className, style }) => {
  const [dragable, setDragable] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const addOnClick = useCallback(() => {
    const slider = document.getElementById("slider");
    if (slider === null) return;
    console.log("add mousedown");
    slider.addEventListener("mousedown", (e) => {
      console.log("mousedown");
      setDragable(true);
      isDragable = true;
      slider.classList.add("dragable");
      position.x = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseup", () => {
      console.log("mouseup");
      setDragable(false);
      isDragable = false;
      slider.classList.remove("dragable");
    });
  }, []);

  //   const onMouseDown = () => {
  //     console.log("mousedown");
  //     setDragable(true);
  //     // ref.current?.classList.add("dragable");
  //     document.getElementById("slider")?.classList.add("dragable");
  //   };

  //   const onMouseUp = () => {
  //     console.log("mouseup");
  //     setDragable(false);
  //     document.getElementById("slider")?.classList.remove("dragable");
  //     // ref.current?.classList.remove("dragable");
  //   };

  const addMouseMove = useCallback(() => {
    const slider = document.getElementById("slider");
    if (!slider) return;
    // if (isDragable === false) return;
    slider?.addEventListener("mousemove", (e: any) => {
      if (!isDragable) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      // const y = e.pageY - slider.offsetTop;
      const walk = (x - position.x) * 2; //scroll-fast
      // const walkY = (y - startY) * 2; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      //   console.log(walk);
    });
  }, []);

  useEffect(() => {
    addOnClick();
    addMouseMove();
  }, []);

  return (
    <div
      className={`flex ${className}`}
      style={{
        ...style,
        // cursor: dragable ? "grab" : "pointer",
      }}
      //   onMouseDown={onMouseDown}
      //   onMouseUp={onMouseUp}
      id="slider"
    >
      {children}
    </div>
  );
};

export default Slider;
