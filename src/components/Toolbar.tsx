import { Button } from "@/components/ui/button";
import { 
  Download, 
  Upload, 
  Save, 
  Undo, 
  Redo, 
  Play,
  Share,
  ChevronDown,
  Star
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Toolbar = () => {
  return (
    <div className="bg-toolbar-bg border-b border-border px-4 py-3 flex items-center justify-between shadow-toolbar">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-lg font-bold text-lg">
            Canva
          </div>
          <span className="text-sm text-muted-foreground">Clone</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Redo className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Untitled Design</span>
        <Star className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          <Play className="h-4 w-4 mr-2" />
          Present
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Download className="h-4 w-4 mr-2" />
              Download
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
      </div>
    </div>
  );
};