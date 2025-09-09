import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaHome } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Search,
  Crown,
  Video,
  Palette,
  Sparkles,
  Type,
  Heart,
  FileImage,
  Printer,
  Wand2,
  Upload,
  Plus
} from "lucide-react";
import { Link } from "react-router-dom";

const designCategories = [
  { id: 1, name: "YouTube Thumbnail", icon: Video, color: "bg-red-500" },
  { id: 2, name: "Logo Design", icon: Crown, color: "bg-purple-500" },
  { id: 3, name: "Color Palette", icon: Palette, color: "bg-blue-500" },
  { id: 4, name: "Typography", icon: Type, color: "bg-green-500" },
  { id: 5, name: "Social Media", icon: Heart, color: "bg-pink-500" },
  { id: 6, name: "Stickers", icon: Sparkles, color: "bg-purple-600" },
  { id: 7, name: "Printables", icon: Printer, color: "bg-indigo-500" },
  { id: 8, name: "AI Background", icon: Wand2, color: "bg-blue-600" },
  { id: 9, name: "AI Image Gen", icon: Sparkles, color: "bg-purple-700" },
  { id: 10, name: "Upload", icon: Upload, color: "bg-gray-500" },
];

const recentDesigns = [
  { id: 1, name: "YouTube Thumbnail", type: "Video", preview: "bg-red-100" },
  { id: 2, name: "Instagram Post", type: "Social Media", preview: "bg-pink-100" },
  { id: 3, name: "Logo Design", type: "Branding", preview: "bg-purple-100" },
  { id: 4, name: "Business Card", type: "Print", preview: "bg-blue-100" },
];

export const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Left Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 bg-sidebar-bg border-r border-border flex flex-col items-center py-4 z-10">
        <Link 
          to="/editor"
          className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity mb-8"
        >
          <Plus className="h-6 w-6" />
        </Link>
        
        <div className="flex flex-col gap-6 text-center">
          <div className="text-xs text-muted-foreground">Create</div>
          
          <button className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
              <FaHome/>
            </div>
            Home
          </button>
          
          <button className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
              <FaFolderOpen/>
            </div>
            Projects
          </button>
          
          <button className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
              <MdOutlinePayment />
            </div>
            Billing
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-20 min-h-screen">
        {/* Top Navigation */}
        <div className="bg-sidebar-bg border-b border-border px-8 py-4 flex items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search your Projects and Canva's"
                className="pl-10 bg-muted/50 border-0"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">User</span>
            <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Crown className="h-8 w-8 text-yellow-300" />
              <h1 className="text-5xl font-bold">Create Innovative Designs</h1>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Design eye-catching thumbnails that get more views
            </p>
            <Link to="/editor">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3">
                Start Designing
              </Button>
            </Link>
          </div>
        </div>

        {/* Design Categories */}
        <div className="px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-5 gap-6 mb-12">
              {designCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link 
                    key={category.id}
                    to="/editor"
                    className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="text-sm font-medium text-center">{category.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* AI Image Creation Section */}
            <div className="bg-gradient-secondary rounded-xl p-8 mb-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold">AI Image Creation</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Create stunning thumbnail images for your youtube videos with AI
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                  Generate thumbnail from video title
                </Button>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Generate custom thumbnail image
                </Button>
              </div>
            </div>

            {/* Recent Designs */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Designs</h2>
              <div className="grid grid-cols-4 gap-6">
                {recentDesigns.map((design) => (
                  <Link 
                    key={design.id}
                    to="/editor"
                    className="group cursor-pointer"
                  >
                    <div className={`aspect-video ${design.preview} rounded-lg mb-3 group-hover:shadow-lg transition-shadow border border-border`}>
                      <div className="w-full h-full rounded-lg bg-gradient-secondary opacity-50 flex items-center justify-center">
                        <FileImage className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </div>
                    <h3 className="font-medium">{design.name}</h3>
                    <p className="text-sm text-muted-foreground">{design.type}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};