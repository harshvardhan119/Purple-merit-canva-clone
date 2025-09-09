import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Square, 
  Circle, 
  Triangle, 
  Star,
  Heart,
  Hexagon,
  Octagon,
  Diamond
} from "lucide-react";

const shapes = [
  { id: 1, name: "Rectangle", icon: Square, type: "rectangle" },
  { id: 2, name: "Circle", icon: Circle, type: "circle" },
  { id: 3, name: "Triangle", icon: Triangle, type: "triangle" },
  { id: 4, name: "Star", icon: Star, type: "star" },
  { id: 5, name: "Heart", icon: Heart, type: "heart" },
  { id: 6, name: "Hexagon", icon: Hexagon, type: "hexagon" },
  { id: 7, name: "Octagon", icon: Octagon, type: "octagon" },
  { id: 8, name: "Diamond", icon: Diamond, type: "diamond" },
];

const lines = [
  { id: 1, name: "Straight Line", preview: "━━━━━━━━" },
  { id: 2, name: "Dashed Line", preview: "┅┅┅┅┅┅┅┅" },
  { id: 3, name: "Dotted Line", preview: "⋯⋯⋯⋯⋯⋯⋯⋯" },
  { id: 4, name: "Arrow", preview: "━━━━━━━▶" },
];

const colors = [
  "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", 
  "#ef4444", "#ec4899", "#6366f1", "#84cc16"
];

interface ShapeToolsProps {
  canvasRef: React.RefObject<any>;
}

export const ShapeTools = ({ canvasRef }: ShapeToolsProps) => {
  return (
    <div className="p-4 space-y-6">
      {/* Basic Shapes */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Basic Shapes</h4>
        <div className="grid grid-cols-2 gap-2">
          {shapes.map((shape) => {
            const Icon = shape.icon;
            return (
              <Button
                key={shape.id}
                variant="outline"
                className="h-16 flex flex-col gap-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => canvasRef.current?.addShape(shape.type)}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs">{shape.name}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Lines & Arrows */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Lines & Arrows</h4>
        <div className="space-y-2">
          {lines.map((line) => (
            <Button
              key={line.id}
              variant="outline"
              className="w-full justify-between h-auto p-3 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <span className="text-sm">{line.name}</span>
              <span className="font-mono text-lg">{line.preview}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Colors</h4>
        <div className="grid grid-cols-4 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className="aspect-square rounded-md border border-border hover:scale-110 transition-transform shadow-sm"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Quick Add</h4>
        <div className="space-y-2">
          <Button 
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            onClick={() => canvasRef.current?.addRectangle()}
          >
            <Square className="h-4 w-4 mr-2" />
            Add Rectangle
          </Button>
          <Button 
            variant="secondary" 
            className="w-full"
            onClick={() => canvasRef.current?.addCircle()}
          >
            <Circle className="h-4 w-4 mr-2" />
            Add Circle
          </Button>
        </div>
      </div>
    </div>
  );
};