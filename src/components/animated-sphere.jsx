import { useRef, useEffect, useState } from "react";

export default function AnimatedSphere() {
  const canvasRef = useRef(null);
  const rulerRef = useRef(null);
  const handleRef = useRef(null);
  const [speed, setSpeed] = useState(1); // Controls animation speed
  const isDragging = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    let L = Math.min(W, H) / 2;
    const { sin, cos, PI } = Math;
    let n = 15;

    class Point {
      constructor() {
        this.ang = 2 * PI * Math.random();
        this.dang = ((-0.5 + Math.random()) / 20) * speed; // Adjusted for speed control
        this.r = (2 * L) / 3;
        this.updatePosition();
      }
      updatePosition() {
        this.x = W / 2 + this.r * cos(this.ang);
        this.y = H / 2 + this.r * sin(this.ang);
      }
      update() {
        this.ang += this.dang;
        this.updatePosition();
      }
    }

    let ctrls = Array.from({ length: n }, () => new Point());

    function init() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      L = Math.min(W, H) / 2;
    }

    function draw() {
      ctx.clearRect(60, 40, W, H);
      ctx.fillStyle = "transparent";
      ctx.fillRect(60, 60, W, H);

      ctx.beginPath();
      ctx.moveTo(
        (ctrls[0].x + ctrls[n - 1].x) / 2,
        (ctrls[0].y + ctrls[n - 1].y) / 2
      );
      for (let p = 0; p < n; p++) {
        let q = (p + 1) % n;
        ctx.quadraticCurveTo(
          ctrls[p].x,
          ctrls[p].y,
          (ctrls[p].x + ctrls[q].x) / 2,
          (ctrls[p].y + ctrls[q].y) / 2
        );
        ctrls[p].update();
      }

      ctx.fillStyle = "#2f87f0";
      ctx.shadowBlur = 60; // Increased shadow blur for thicker lines
      ctx.shadowColor = "#2f87f0";
      ctx.lineWidth = 60; // Increased line width for thicker lines
      ctx.globalCompositeOperation = "lighter";
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [speed]);

  // Handle dragging the ruler handle
  useEffect(() => {
    const handle = handleRef.current;
    const ruler = rulerRef.current;

    if (!handle || !ruler) return;

    // Set the initial position of the handle based on the speed
    const rulerWidth = ruler.offsetWidth;
    const initialPosition = (speed / 5) * rulerWidth; // Speed range: 0 to 5
    handle.style.transform = `translateX(${initialPosition}px)`;

    const onMouseDown = (e) => {
      isDragging.current = true;

      // Prevent text selection
      document.body.style.userSelect = "none";
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;

      const rulerRect = ruler.getBoundingClientRect();
      const offsetX = e.clientX - rulerRect.left;
      const rulerWidth = rulerRect.width;

      // Clamp the handle position within the ruler bounds
      const handlePosition = Math.max(0, Math.min(rulerWidth, offsetX));
      const newSpeed = (handlePosition / rulerWidth) * 5; // Speed range: 0 to 5

      // Update handle position using transform for smooth movement
      handle.style.transform = `translateX(${handlePosition}px)`;

      // Update speed state in real-time
      setSpeed(newSpeed);
    };

    const onMouseUp = (e) => {
      if (!isDragging.current) return;

      isDragging.current = false;

      // Re-enable text selection
      document.body.style.userSelect = "auto";
    };

    handle.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      handle.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      // Ensure text selection is re-enabled when the component unmounts
      document.body.style.userSelect = "auto";
    };
  }, [speed]); // Add `speed` as a dependency to update the handle's position when speed changes

  return (
    <div
      className="relative rounded-lg overflow-hidden"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(90deg, #192235 14.76%, #0059FF 41.01%, #6FADFF 51.27%, #0059FF 61.52%, #192235 89.1%)",
        borderImageSlice: 1,
        maskImage: "linear-gradient(white, white)", // Ensure border respects border-radius
        WebkitMaskImage: "linear-gradient(white, white)",
        // borderImageWidth: "1",
        background:
          "linear-gradient(133.37deg, #0B194A -14.65%, #10131D 40.27%, #0C0D12 98.81%), radial-gradient(136.23% 140.82% at -3.66% -36.23%, rgba(0, 85, 255, 0.13) 3.61%, rgba(1, 1, 1, 0.2) 65.4%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="h-[60%] w-[100%]"
        style={{ display: "block" }}
      />
      {/* Ruler */}
      <div
        ref={rulerRef}
        style={{
          position: "absolute",
          bottom: 200,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%", // Adjusted width to fit within the container
          height: "30px", // Increased height to accommodate numbers
          //   backgroundColor: "#333",
          background: "#171A26",
          boxShadow: "0px 0px 12px 0px #0095FF66 inset",
          //   borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5px",
        }}
      >
        {/* Tick Marks and Numbers */}
        {[0, 1, 2, 3, 4, 5].map((tick, index) => (
          <div
            key={tick}
            style={{
              position: "relative",
              width: "1px",
              height: "20px",
              backgroundColor: "#fff",
            }}
          >
            {/* Small Dots */}
            {[0.25, 0.5, 0.75].map((subTick) => (
              <div
                key={subTick}
                style={{
                  position: "absolute",
                  left: `${subTick * 100}%`,
                  width: "4px",
                  height: "4px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            ))}
            {/* Numbers */}
            {Number.isInteger(tick) && (
              <div
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#fff",
                  fontSize: "12px",
                }}
              >
                {tick}
              </div>
            )}
          </div>
        ))}
        {/* Handle */}
        <div
          ref={handleRef}
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: `translateX(${(speed / 5) * 100}%) translateY(-50%)`,
            width: "10px",
            height: "20px",
            backgroundColor: "#2f87f0",
            borderRadius: "5px",
            cursor: "pointer",
            transition: isDragging.current ? "none" : "transform 0.2s ease",
          }}
        />
      </div>
    </div>
  );
}
