import { useRef, useEffect, useState } from "react";

export default function AnimatedSphere() {
  const canvasRef = useRef(null);
  const secondRulerRef = useRef(null);
  const handleRef = useRef(null);
  const [speed, setSpeed] = useState(1);
  const isDragging = useRef(false);
  const animationFrameRef = useRef(null);

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
        this.dang = ((-0.5 + Math.random()) / 20) * speed;
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
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#2f87f0";
      ctx.lineWidth = 60;
      ctx.globalCompositeOperation = "lighter";
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }

    function animate() {
      draw();
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      L = Math.min(W, H) / 2;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [speed]);

  useEffect(() => {
    const handle = handleRef.current;
    const ruler = secondRulerRef.current;
    if (!handle || !ruler) return;

    const rulerWidth = ruler.offsetWidth;
    const initialPosition = (speed / 5) * rulerWidth;
    handle.style.transform = `translateX(${initialPosition}px)`;

    let animationFrame;

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const rulerRect = ruler.getBoundingClientRect();
        let offsetX = e.clientX - rulerRect.left;
        let maxX = rulerRect.width - handle.offsetWidth;

        let handlePosition = Math.max(0, Math.min(maxX, offsetX));
        const newSpeed = ((handlePosition / maxX) * 5).toFixed(2);

        handle.style.transform = `translateX(${handlePosition}px)`;
        handle.querySelector("div:first-child").textContent = newSpeed; // Update speed display
        setSpeed(parseFloat(newSpeed));
      });
    };

    handle.addEventListener("mousedown", () => {
      isDragging.current = true;
      document.body.style.userSelect = "none";
    });

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", () => {
      isDragging.current = false;
      document.body.style.userSelect = "auto";
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.style.userSelect = "auto";
    };
  }, [speed]);

  return (
    <div
      className="relative rounded-lg overflow-hidden animated-sphere"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(90deg, #192235 14.76%, #0059FF 41.01%, #6FADFF 51.27%, #0059FF 61.52%, #192235 89.1%)",
        borderImageSlice: 1,
        maskImage: "linear-gradient(white, white)",
        WebkitMaskImage: "linear-gradient(white, white)",
        background:
          "linear-gradient(133.37deg, #0B194A -14.65%, #10131D 40.27%, #0C0D12 98.81%), radial-gradient(136.23% 140.82% at -3.66% -36.23%, rgba(0, 85, 255, 0.13) 3.61%, rgba(1, 1, 1, 0.2) 65.4%)",
      }}
    >
      <canvas ref={canvasRef} className="h-[60%] w-[100%]" />
      <div className="relative w-full flex flex-col items-center mt-20">
        {/* Static Scale */}
        <div className="relative w-full h-6 bg-[#0B1320] rounded-md flex items-center px-4 border border-[#1E2A38]">
          {[0, 1, 2, 3, 4, 5].map((num, idx) => (
            <div
              key={num}
              className={`flex ${
                idx === 5 ? "flex-0" : "flex-1"
              } items-center justify-between`}
            >
              {/* Number */}
              <span className="text-gray-300 text-xs">{num}s</span>

              {/* Dots (Evenly Distributed Between Numbers) */}
              {idx < 5 && (
                <div className="flex flex-1 justify-evenly">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-gray-400 rounded-full"
                    ></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Draggable Scale (Unchanged Functionality) */}
        <div
          ref={secondRulerRef}
          className="relative w-full h-8 bg-gray-800 flex items-center mt-20"
        >
          <div
            ref={handleRef}
            className="absolute left-0 flex flex-col items-center cursor-pointer"
          >
            {/* Speed Display */}
            <div
              className="mb-2 px-2 py-1 bg-blue-500 text-white text-xs rounded-md"
              style={{
                background:
                  "radial-gradient(75% 75% at 51.61% 52.78%, #022F62 0%, #001E41 100%)",
              }}
            >
              {speed.toFixed(2)}
            </div>
            {/* Vertical Dragger */}
            <div
              className=" h-46 rounded-md"
              style={{
                border: "1.4px solid transparent",
                borderImage:
                  "linear-gradient(90deg, #192235 -9.98%, #004AD4 41.27%, #6FADFF 53.45%, #004AD4 66.64%, #192235 116.88%) 1",
                borderImageSlice: 1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
