import { useState, useRef } from "react";
import { Toolbar } from "./Toolbar";
import { Sidebar } from "./Sidebar";
import { Canvas, CanvasRef } from "./Canvas";
import { PropertyPanel } from "./PropertyPanel";

export const DesignEditor = () => {
  const [activeTool, setActiveTool] = useState<string>("select");
  const [selectedElement, setSelectedElement] = useState<any>(null);
  const canvasRef = useRef<CanvasRef>(null);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Toolbar */}
      <Toolbar />
      
      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar activeTool={activeTool} onToolChange={setActiveTool} canvasRef={canvasRef} />
        
        {/* Canvas Area */}
        <div className="flex-1 bg-canvas-bg flex items-center justify-center">
          <Canvas 
            ref={canvasRef}
            activeTool={activeTool} 
            onElementSelect={setSelectedElement}
          />
        </div>
        
        {/* Right Property Panel */}
        {selectedElement && (
          <PropertyPanel element={selectedElement} />
        )}
      </div>
    </div>
  );
};