import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Type, 
  Heading1, 
  Heading2, 
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline
} from "lucide-react";

const textPresets = [
  { id: 1, name: "Heading", style: "text-3xl font-bold", icon: Heading1 },
  { id: 2, name: "Subheading", style: "text-xl font-semibold", icon: Heading2 },
  { id: 3, name: "Body Text", style: "text-base", icon: Type },
  { id: 4, name: "Caption", style: "text-sm text-muted-foreground", icon: Heading3 },
];

const fontFamilies = [
  "Arial", "Helvetica", "Times New Roman", "Georgia", 
  "Verdana", "Comic Sans MS", "Impact", "Trebuchet MS"
];

const colors = [
  "#000000", "#ffffff", "#8b5cf6", "#06b6d4", "#10b981", 
  "#f59e0b", "#ef4444", "#ec4899", "#6366f1", "#84cc16"
];

interface TextToolsProps {
  canvasRef: React.RefObject<any>;
}

export const TextTools = ({ canvasRef }: TextToolsProps) => {
  return (
    <div className="p-4 space-y-6">
      {/* Quick Text Presets */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Add Text</h4>
        <div className="space-y-2">
          {textPresets.map((preset) => {
            const Icon = preset.icon;
            return (
              <Button
                key={preset.id}
                variant="outline"
                className="w-full justify-start h-auto p-3"
                onClick={() => canvasRef.current?.addText({
                  fontSize: preset.id === 1 ? 32 : preset.id === 2 ? 24 : preset.id === 3 ? 16 : 12,
                  fontWeight: preset.id === 1 || preset.id === 2 ? 'bold' : 'normal'
                })}
              >
                <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-medium">{preset.name}</div>
                  <div className={preset.style}>Sample text</div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Font Family */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Font Family</h4>
        <ScrollArea className="h-32">
          <div className="space-y-1">
            {fontFamilies.map((font) => (
              <Button
                key={font}
                variant="ghost"
                className="w-full justify-start text-sm"
                style={{ fontFamily: font }}
              >
                {font}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Text Formatting */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Formatting</h4>
        <div className="flex gap-1">
          <Button variant="outline" size="sm">
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Underline className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex gap-1">
          <Button variant="outline" size="sm">
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <AlignRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Text Colors</h4>
        <div className="grid grid-cols-5 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className="aspect-square rounded-md border border-border hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Font Size */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Font Size</h4>
        <Input
          type="number"
          placeholder="20"
          min="8"
          max="200"
          className="w-full"
        />
      </div>
    </div>
  );
};