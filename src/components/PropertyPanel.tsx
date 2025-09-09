import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { 
  Trash2, 
  Copy, 
  Move, 
  RotateCw,
  Palette,
  Type
} from "lucide-react";
import { useState, useEffect } from "react";

interface PropertyPanelProps {
  element: any;
}

export const PropertyPanel = ({ element }: PropertyPanelProps) => {
  const [properties, setProperties] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    angle: 0,
    opacity: 1,
    fill: "#000000",
    fontSize: 20,
  });

  useEffect(() => {
    if (element) {
      setProperties({
        width: element.width || 0,
        height: element.height || 0,
        left: element.left || 0,
        top: element.top || 0,
        angle: element.angle || 0,
        opacity: element.opacity || 1,
        fill: element.fill || "#000000",
        fontSize: element.fontSize || 20,
      });
    }
  }, [element]);

  const updateProperty = (key: string, value: any) => {
    if (!element) return;
    
    element.set(key, value);
    element.canvas?.renderAll();
    setProperties(prev => ({ ...prev, [key]: value }));
  };

  const deleteElement = () => {
    if (!element) return;
    element.canvas?.remove(element);
  };

  const duplicateElement = () => {
    if (!element) return;
    element.clone((cloned: any) => {
      cloned.set({
        left: element.left + 20,
        top: element.top + 20,
      });
      element.canvas?.add(cloned);
    });
  };

  if (!element) return null;

  return (
    <div className="w-80 bg-sidebar-bg border-l border-border p-4">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h3 className="font-semibold mb-2">Properties</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={duplicateElement}>
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={deleteElement}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Separator />

        {/* Position & Size */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <Move className="h-4 w-4" />
            Position & Size
          </h4>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="left" className="text-xs">Left</Label>
              <Input
                id="left"
                type="number"
                value={Math.round(properties.left)}
                onChange={(e) => updateProperty("left", Number(e.target.value))}
                className="h-8"
              />
            </div>
            <div>
              <Label htmlFor="top" className="text-xs">Top</Label>
              <Input
                id="top"
                type="number"
                value={Math.round(properties.top)}
                onChange={(e) => updateProperty("top", Number(e.target.value))}
                className="h-8"
              />
            </div>
            <div>
              <Label htmlFor="width" className="text-xs">Width</Label>
              <Input
                id="width"
                type="number"
                value={Math.round(properties.width)}
                onChange={(e) => updateProperty("width", Number(e.target.value))}
                className="h-8"
              />
            </div>
            <div>
              <Label htmlFor="height" className="text-xs">Height</Label>
              <Input
                id="height"
                type="number"
                value={Math.round(properties.height)}
                onChange={(e) => updateProperty("height", Number(e.target.value))}
                className="h-8"
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* Rotation */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <RotateCw className="h-4 w-4" />
            Rotation
          </h4>
          <div>
            <Label htmlFor="angle" className="text-xs">Angle</Label>
            <Input
              id="angle"
              type="number"
              value={Math.round(properties.angle)}
              onChange={(e) => updateProperty("angle", Number(e.target.value))}
              className="h-8"
            />
          </div>
        </div>

        <Separator />

        {/* Opacity */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Opacity</h4>
          <div className="px-2">
            <Slider
              value={[properties.opacity]}
              onValueChange={([value]) => updateProperty("opacity", value)}
              max={1}
              min={0}
              step={0.1}
              className="w-full"
            />
            <div className="text-xs text-muted-foreground mt-1">
              {Math.round(properties.opacity * 100)}%
            </div>
          </div>
        </div>

        <Separator />

        {/* Color */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Color
          </h4>
          <div className="flex gap-2 items-center">
            <input
              type="color"
              value={properties.fill}
              onChange={(e) => updateProperty("fill", e.target.value)}
              className="w-8 h-8 rounded border border-border cursor-pointer"
            />
            <Input
              value={properties.fill}
              onChange={(e) => updateProperty("fill", e.target.value)}
              className="h-8 font-mono text-xs"
            />
          </div>
        </div>

        {/* Text Properties */}
        {element.type === "textbox" && (
          <>
            <Separator />
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Type className="h-4 w-4" />
                Text
              </h4>
              <div>
                <Label htmlFor="fontSize" className="text-xs">Font Size</Label>
                <Input
                  id="fontSize"
                  type="number"
                  value={properties.fontSize}
                  onChange={(e) => updateProperty("fontSize", Number(e.target.value))}
                  className="h-8"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};