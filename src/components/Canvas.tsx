import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";
import { Canvas as FabricCanvas, Circle, Rect, Textbox, Triangle, Polygon } from "fabric";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, RotateCcw, Maximize } from "lucide-react";
import { toast } from "sonner";

interface CanvasProps {
  activeTool: string;
  onElementSelect: (element: any) => void;
}

export interface CanvasRef {
  addText: (options?: any) => void;
  addShape: (type: string, options?: any) => void;
  addRectangle: () => void;
  addCircle: () => void;
  addTriangle: () => void;
  addStar: () => void;
  addHeart: () => void;
  addHexagon: () => void;
  addOctagon: () => void;
  addDiamond: () => void;
}

export const Canvas = forwardRef<CanvasRef, CanvasProps>(({ activeTool, onElementSelect }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: "#ffffff",
    });

    // Add selection events
    canvas.on("selection:created", (e) => {
      if (e.selected && e.selected[0]) {
        onElementSelect(e.selected[0]);
      }
    });

    canvas.on("selection:updated", (e) => {
      if (e.selected && e.selected[0]) {
        onElementSelect(e.selected[0]);
      }
    });

    canvas.on("selection:cleared", () => {
      onElementSelect(null);
    });

    setFabricCanvas(canvas);
    toast("Canvas ready! Start designing!");

    return () => {
      canvas.dispose();
    };
  }, [onElementSelect]);

  const addText = (options = {}) => {
    if (!fabricCanvas) return;
    
    const text = new Textbox("Click to edit text", {
      left: 100,
      top: 100,
      width: 200,
      fontSize: 20,
      fontFamily: "Arial",
      fill: "#000000",
      ...options,
    });
    
    fabricCanvas.add(text);
    fabricCanvas.setActiveObject(text);
    fabricCanvas.renderAll();
  };

  const addRectangle = () => {
    if (!fabricCanvas) return;
    
    const rect = new Rect({
      left: 100,
      top: 100,
      fill: "#8b5cf6",
      width: 100,
      height: 100,
      rx: 10,
      ry: 10,
    });
    
    fabricCanvas.add(rect);
    fabricCanvas.setActiveObject(rect);
    fabricCanvas.renderAll();
  };

  const addCircle = () => {
    if (!fabricCanvas) return;
    
    const circle = new Circle({
      left: 100,
      top: 100,
      fill: "#06b6d4",
      radius: 50,
    });
    
    fabricCanvas.add(circle);
    fabricCanvas.setActiveObject(circle);
    fabricCanvas.renderAll();
  };

  const addTriangle = () => {
    if (!fabricCanvas) return;
    
    const triangle = new Triangle({
      left: 100,
      top: 100,
      fill: "#10b981",
      width: 100,
      height: 100,
    });
    
    fabricCanvas.add(triangle);
    fabricCanvas.setActiveObject(triangle);
    fabricCanvas.renderAll();
  };

  const addStar = () => {
    if (!fabricCanvas) return;
    
    const starPoints = [];
    const outerRadius = 50;
    const innerRadius = 25;
    const centerX = 100;
    const centerY = 100;
    
    for (let i = 0; i < 10; i++) {
      const angle = (i * Math.PI) / 5;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = centerX + radius * Math.cos(angle - Math.PI / 2);
      const y = centerY + radius * Math.sin(angle - Math.PI / 2);
      starPoints.push({ x, y });
    }
    
    const star = new Polygon(starPoints, {
      left: 100,
      top: 100,
      fill: "#f59e0b",
    });
    
    fabricCanvas.add(star);
    fabricCanvas.setActiveObject(star);
    fabricCanvas.renderAll();
  };

  const addHeart = () => {
    if (!fabricCanvas) return;
    
    const heartPath = "M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z";
    
    const heart = new Polygon([
      {x: 50, y: 80}, {x: 40, y: 70}, {x: 30, y: 60}, {x: 30, y: 50},
      {x: 35, y: 45}, {x: 45, y: 45}, {x: 50, y: 50}, {x: 55, y: 45},
      {x: 65, y: 45}, {x: 70, y: 50}, {x: 70, y: 60}, {x: 60, y: 70}
    ], {
      left: 100,
      top: 100,
      fill: "#ec4899",
    });
    
    fabricCanvas.add(heart);
    fabricCanvas.setActiveObject(heart);
    fabricCanvas.renderAll();
  };

  const addHexagon = () => {
    if (!fabricCanvas) return;
    
    const hexPoints = [];
    const radius = 50;
    const centerX = 100;
    const centerY = 100;
    
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      hexPoints.push({ x, y });
    }
    
    const hexagon = new Polygon(hexPoints, {
      left: 100,
      top: 100,
      fill: "#6366f1",
    });
    
    fabricCanvas.add(hexagon);
    fabricCanvas.setActiveObject(hexagon);
    fabricCanvas.renderAll();
  };

  const addOctagon = () => {
    if (!fabricCanvas) return;
    
    const octPoints = [];
    const radius = 50;
    const centerX = 100;
    const centerY = 100;
    
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      octPoints.push({ x, y });
    }
    
    const octagon = new Polygon(octPoints, {
      left: 100,
      top: 100,
      fill: "#84cc16",
    });
    
    fabricCanvas.add(octagon);
    fabricCanvas.setActiveObject(octagon);
    fabricCanvas.renderAll();
  };

  const addDiamond = () => {
    if (!fabricCanvas) return;
    
    const diamond = new Polygon([
      { x: 50, y: 0 },
      { x: 100, y: 50 },
      { x: 50, y: 100 },
      { x: 0, y: 50 }
    ], {
      left: 100,
      top: 100,
      fill: "#ef4444",
    });
    
    fabricCanvas.add(diamond);
    fabricCanvas.setActiveObject(diamond);
    fabricCanvas.renderAll();
  };

  const addShape = (type: string, options = {}) => {
    switch (type) {
      case "rectangle":
        addRectangle();
        break;
      case "circle":
        addCircle();
        break;
      case "triangle":
        addTriangle();
        break;
      case "star":
        addStar();
        break;
      case "heart":
        addHeart();
        break;
      case "hexagon":
        addHexagon();
        break;
      case "octagon":
        addOctagon();
        break;
      case "diamond":
        addDiamond();
        break;
    }
  };

  const handleZoomIn = () => {
    if (!fabricCanvas) return;
    const newZoom = Math.min(zoom * 1.1, 3);
    setZoom(newZoom);
    fabricCanvas.setZoom(newZoom);
    fabricCanvas.renderAll();
  };

  const handleZoomOut = () => {
    if (!fabricCanvas) return;
    const newZoom = Math.max(zoom / 1.1, 0.1);
    setZoom(newZoom);
    fabricCanvas.setZoom(newZoom);
    fabricCanvas.renderAll();
  };

  const resetZoom = () => {
    if (!fabricCanvas) return;
    setZoom(1);
    fabricCanvas.setZoom(1);
    fabricCanvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
    fabricCanvas.renderAll();
  };

  const fitToScreen = () => {
    if (!fabricCanvas) return;
    fabricCanvas.setZoom(1);
    fabricCanvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
    fabricCanvas.renderAll();
    setZoom(1);
  };

  // Expose methods to parent components
  useImperativeHandle(ref, () => ({
    addText,
    addShape,
    addRectangle,
    addCircle,
    addTriangle,
    addStar,
    addHeart,
    addHexagon,
    addOctagon,
    addDiamond,
  }));

  return (
    <div className="relative">
      {/* Canvas Container */}
      <div className="bg-white rounded-lg shadow-card p-8 relative">
        <canvas 
          ref={canvasRef} 
          className="border border-border rounded-lg shadow-sm"
        />
        
      </div>

      {/* Zoom Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2 bg-white rounded-lg shadow-card p-2">
        <Button variant="ghost" size="sm" onClick={handleZoomOut}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className="px-2 py-1 text-sm font-medium min-w-[60px] text-center">
          {Math.round(zoom * 100)}%
        </span>
        <Button variant="ghost" size="sm" onClick={handleZoomIn}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={resetZoom}>
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={fitToScreen}>
          <Maximize className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
});

Canvas.displayName = "Canvas";