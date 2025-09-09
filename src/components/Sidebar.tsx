import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Layout, 
  Type, 
  Square, 
  Circle, 
  Image, 
  Upload,
  Palette,
  Shapes,
  FileImage,
  Grid3X3
} from "lucide-react";
import { useState } from "react";
import { TemplateGallery } from "./TemplateGallery";
import { TextTools } from "./TextTools";
import { ShapeTools } from "./ShapeTools";

interface SidebarProps {
  activeTool: string;
  onToolChange: (tool: string) => void;
  canvasRef: React.RefObject<any>;
}

const tools = [
  { id: "templates", icon: Layout, label: "Templates" },
  { id: "text", icon: Type, label: "Text" },
  { id: "shapes", icon: Shapes, label: "Elements" },
  { id: "images", icon: FileImage, label: "Photos" },
  { id: "uploads", icon: Upload, label: "Uploads" },
  { id: "colors", icon: Palette, label: "Colors" },
  { id: "grids", icon: Grid3X3, label: "Grids" },
];

export const Sidebar = ({ activeTool, onToolChange, canvasRef }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const renderToolContent = () => {
    switch (activeTool) {
      case "templates":
        return <TemplateGallery />;
      case "text":
        return <TextTools canvasRef={canvasRef} />;
      case "shapes":
        return <ShapeTools canvasRef={canvasRef} />;
      default:
        return (
          <div className="p-4 text-center text-muted-foreground">
            Select a tool to get started
          </div>
        );
    }
  };

  return (
    <div className="flex bg-sidebar-bg border-r border-border">
      {/* Tool Icons */}
      <div className="w-16 bg-muted/30 border-r border-border">
        <ScrollArea className="h-full">
          <div className="p-2 space-y-2">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Button
                  key={tool.id}
                  variant={activeTool === tool.id ? "default" : "ghost"}
                  size="sm"
                  className="w-12 h-12 p-0 flex flex-col gap-1"
                  onClick={() => {
                    onToolChange(tool.id);
                    setIsExpanded(true);
                  }}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-xs">{tool.label}</span>
                </Button>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      {/* Tool Content */}
      {isExpanded && (
        <div className="w-80 border-r border-border">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold capitalize">{activeTool}</h2>
          </div>
          <ScrollArea className="h-full">
            {renderToolContent()}
          </ScrollArea>
        </div>
      )}
    </div>
  );
};