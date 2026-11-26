import { useEffect, useRef, useState } from "react";

const isDrawnLetterF = (strokes) => {
  const points = strokes.flat();
  if (points.length < 4) return false;

  const minX = Math.min(...points.map(({ x }) => x));
  const maxX = Math.max(...points.map(({ x }) => x));
  const minY = Math.min(...points.map(({ y }) => y));
  const maxY = Math.max(...points.map(({ y }) => y));
  const width = maxX - minX;
  const height = maxY - minY;
  if (width < 30 || height < 45) return false;

  const runs = strokes.flatMap((stroke) => {
    const strokeRuns = [];
    let activeRun = null;

    stroke.slice(1).forEach((point, index) => {
      const previous = stroke[index];
      const dx = point.x - previous.x;
      const dy = point.y - previous.y;
      const direction = Math.abs(dy) > Math.abs(dx) * 1.25
        ? "vertical"
        : Math.abs(dx) > Math.abs(dy) * 1.25
          ? "horizontal"
          : "diagonal";

      if (direction === "diagonal") {
        if (activeRun) activeRun.points.push(point);
        return;
      }

      if (!activeRun || activeRun.direction !== direction) {
        activeRun = { direction, points: [previous, point] };
        strokeRuns.push(activeRun);
      } else {
        activeRun.points.push(point);
      }
    });

    return strokeRuns.map(({ direction, points: runPoints }) => {
      const xs = runPoints.map(({ x }) => (x - minX) / width);
      const ys = runPoints.map(({ y }) => (y - minY) / height);
      return {
        direction,
        minX: Math.min(...xs),
        maxX: Math.max(...xs),
        minY: Math.min(...ys),
        maxY: Math.max(...ys),
      };
    });
  });

  const hasStem = runs.some(
    ({ direction, minX: left, maxX: right, minY: top, maxY: bottom }) =>
      direction === "vertical" && bottom - top >= 0.35 && right - left <= 0.3 && left <= 0.48
  );
  const hasTopBar = runs.some(
    ({ direction, minX: left, maxX: right, minY: top, maxY: bottom }) =>
      direction === "horizontal" && right - left >= 0.24 && bottom - top <= 0.3 && top <= 0.45
  );
  const hasMiddleBar = runs.some(
    ({ direction, minX: left, maxX: right, minY: top, maxY: bottom }) => {
      const middle = (top + bottom) / 2;
      return direction === "horizontal" && right - left >= 0.16 && bottom - top <= 0.32 && middle > 0.22 && middle < 0.86;
    }
  );

  return hasStem && hasTopBar && hasMiddleBar;
};

export const EntryGate = ({ onEnter }) => {
  const canvasRef = useRef(null);
  const strokesRef = useRef([]);
  const drawingRef = useRef(false);
  const [hasDrawing, setHasDrawing] = useState(false);
  const [isLetterF, setIsLetterF] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (hasDrawing) return undefined;

    const hintTimer = window.setTimeout(() => setShowHint(true), 1800);
    return () => window.clearTimeout(hintTimer);
  }, [hasDrawing]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.getContext("2d").setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const getPoint = (event) => {
    const canvas = canvasRef.current;
    const bounds = canvas.getBoundingClientRect();
    return {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
  };

  const startDrawing = (event) => {
    event.preventDefault();
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const point = getPoint(event);

    drawingRef.current = true;
    canvas.setPointerCapture(event.pointerId);
    strokesRef.current.push([point]);
    setHasDrawing(true);
    setIsLetterF(false);
    setShowHint(false);

    context.beginPath();
    context.moveTo(point.x, point.y);
    context.lineWidth = 8;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "#ff3434";
  };

  const continueDrawing = (event) => {
    if (!drawingRef.current) return;
    event.preventDefault();

    const point = getPoint(event);
    const context = canvasRef.current.getContext("2d");
    strokesRef.current.at(-1).push(point);
    context.lineTo(point.x, point.y);
    context.stroke();
  };

  const finishDrawing = () => {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    const completedF = isDrawnLetterF(strokesRef.current);
    setIsLetterF(completedF);
    if (completedF) {
      setIsExiting(true);
      window.setTimeout(onEnter, 700);
    }
  };

  const clearDrawing = () => {
    const canvas = canvasRef.current;
    canvas.getContext("2d").clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    strokesRef.current = [];
    setHasDrawing(false);
    setIsLetterF(false);
    setShowHint(false);
  };

  const skipEntry = () => {
    setIsExiting(true);
    window.setTimeout(onEnter, 700);
  };

  return (
    <div className={`fixed inset-0 z-[100] overflow-hidden bg-black/70 backdrop-blur-3xl ${isExiting ? "animate-fade-out" : ""}`}>
      <div aria-hidden="true" className="absolute inset-0 animate-background-pulse">
        <div
          className="absolute -inset-[12%] animate-water-flow"
          style={{
            background:
              "radial-gradient(ellipse at 52% 16%, rgba(255, 0, 0, 0.88), transparent 43%), radial-gradient(ellipse at 52% 76%, rgba(150, 150, 160, 0.42), transparent 35%), linear-gradient(155deg, #260000 0%, #120707 43%, #030303 78%)",
            filter: "blur(48px) saturate(125%)",
          }}
        />
        <div
          className="absolute -inset-[18%] animate-water-flow-reverse opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 26% 44%, rgba(180, 20, 20, 0.42), transparent 32%), radial-gradient(ellipse at 74% 72%, rgba(180, 180, 190, 0.28), transparent 34%)",
            filter: "blur(62px)",
          }}
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

      <canvas
        ref={canvasRef}
        aria-label="Full screen drawing area. Draw the letter F using a mouse or finger."
        className="absolute inset-0 h-full w-full touch-none cursor-crosshair"
        onPointerDown={startDrawing}
        onPointerMove={continueDrawing}
        onPointerUp={finishDrawing}
        onPointerCancel={finishDrawing}
      />

      {showHint && !hasDrawing && (
        <p className="pointer-events-none absolute left-1/2 top-8 z-10 w-[90%] -translate-x-1/2 text-center text-sm text-white/70 animate-pulse sm:top-10 sm:text-base" role="status">
          Write F to enter my portfolio: one tall line with a top bar and a middle bar.
        </p>
      )}

      {hasDrawing && !isLetterF && (
        <p className="pointer-events-none absolute left-1/2 top-8 z-10 w-[90%] -translate-x-1/2 text-center text-sm text-white/70 sm:top-10 sm:text-base" role="status">
          Try one tall line with two horizontal bars.
        </p>
      )}

      {hasDrawing && (
        <button
          type="button"
          onClick={clearDrawing}
          className="absolute bottom-6 right-6 z-10 rounded-full px-4 py-2 text-sm text-white/65 transition hover:text-white sm:bottom-10 sm:right-10"
        >
          Clear
        </button>
      )}
      <button
        type="button"
        onClick={skipEntry}
        aria-label="Skip the drawing intro and enter the portfolio"
        className="absolute bottom-6 left-6 z-10 rounded-full px-4 py-2 text-sm text-white/65 underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:bottom-10 sm:left-10"
      >
        Skip intro
      </button>
    </div>
  );
};
