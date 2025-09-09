import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Instagram, 
  Facebook, 
  Twitter,
  Presentation,
  Heart,
  Star
} from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Instagram Post",
    category: "Social Media",
    size: "1080x1080",
    icon: Instagram,
    popular: true,
  },
  {
    id: 2,
    name: "Facebook Cover",
    category: "Social Media", 
    size: "820x312",
    icon: Facebook,
  },
  {
    id: 3,
    name: "Twitter Header",
    category: "Social Media",
    size: "1500x500", 
    icon: Twitter,
  },
  {
    id: 4,
    name: "Presentation",
    category: "Business",
    size: "1920x1080",
    icon: Presentation,
    popular: true,
  },
  {
    id: 5,
    name: "Flyer",
    category: "Marketing",
    size: "2480x3508",
    icon: FileText,
  },
  {
    id: 6,
    name: "Instagram Story", 
    category: "Social Media",
    size: "1080x1920",
    icon: Instagram,
  },
];

const categories = ["All", "Social Media", "Business", "Marketing", "Print"];

export const TemplateGallery = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "secondary"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Templates Grid */}
      <ScrollArea className="h-[600px]">
        <div className="grid grid-cols-2 gap-3">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <div
                key={template.id}
                className="relative group cursor-pointer rounded-lg border border-border hover:border-primary transition-colors bg-card p-3"
              >
                {/* Template Preview */}
                <div className="aspect-square bg-gradient-secondary rounded-md flex items-center justify-center mb-2 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                  <Icon className="h-8 w-8" />
                </div>
                
                {/* Template Info */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <h4 className="text-sm font-medium truncate">{template.name}</h4>
                    {template.popular && (
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{template.size}</p>
                  <Badge variant="outline" className="text-xs">
                    {template.category}
                  </Badge>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                    Use Template
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      {/* Create Blank */}
      <div className="pt-4 border-t border-border">
        <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
          Create Blank Design
        </Button>
      </div>
    </div>
  );
};