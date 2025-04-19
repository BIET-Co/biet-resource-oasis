
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "./LoadingSpinner";

// Mock data for resource categories
const resourceTypes = [
  { id: "notes", name: "Module-Wise Notes", icon: "📝" },
  { id: "qbanks", name: "Question Banks", icon: "❓" },
  { id: "cie", name: "CIE Question Papers", icon: "📄" },
  { id: "model", name: "Model Question Papers", icon: "📋" },
  { id: "see", name: "SEE Question Papers", icon: "📚" },
];

// Mock data for branches
const branches = [
  { id: "cse", name: "Computer Science & Engineering" },
  { id: "ece", name: "Electronics & Communication" },
  { id: "eee", name: "Electrical & Electronics" },
  { id: "mech", name: "Mechanical Engineering" },
  { id: "civil", name: "Civil Engineering" },
];

// Mock data for semesters
const semesters = [
  { id: "sem1", name: "Semester 1" },
  { id: "sem2", name: "Semester 2" },
  { id: "sem3", name: "Semester 3" },
  { id: "sem4", name: "Semester 4" },
  { id: "sem5", name: "Semester 5" },
  { id: "sem6", name: "Semester 6" },
  { id: "sem7", name: "Semester 7" },
  { id: "sem8", name: "Semester 8" },
];

// Mock data for resources
const resources = [
  {
    id: 1,
    title: "Data Structures Notes",
    type: "notes",
    branch: "cse",
    semester: "sem3",
    description: "Comprehensive notes covering arrays, linked lists, trees, and graphs",
    downloads: 356,
    date: "2023-12-15",
  },
  {
    id: 2,
    title: "Digital Electronics Question Bank",
    type: "qbanks",
    branch: "ece",
    semester: "sem4",
    description: "Collection of important questions with solutions for your exams",
    downloads: 289,
    date: "2023-11-22",
  },
  {
    id: 3,
    title: "2023 SEE Paper - Machine Learning",
    type: "see",
    branch: "cse",
    semester: "sem7",
    description: "Previous year SEE question paper with detailed solutions",
    downloads: 412,
    date: "2024-01-10",
  },
  {
    id: 4,
    title: "Circuits and Systems CIE Paper",
    type: "cie",
    branch: "eee",
    semester: "sem3",
    description: "CIE-1 question paper with answer key",
    downloads: 178,
    date: "2023-10-05",
  },
  {
    id: 5,
    title: "Fluid Mechanics Model Paper",
    type: "model",
    branch: "mech",
    semester: "sem5",
    description: "Model question paper prepared by faculty experts",
    downloads: 235,
    date: "2023-09-18",
  },
  {
    id: 6,
    title: "Software Engineering Notes",
    type: "notes",
    branch: "cse",
    semester: "sem6",
    description: "Complete module-wise notes for the entire syllabus",
    downloads: 326,
    date: "2024-02-01",
  },
  {
    id: 7,
    title: "Structural Analysis CIE Paper",
    type: "cie",
    branch: "civil",
    semester: "sem4",
    description: "Previous CIE questions with solutions",
    downloads: 198,
    date: "2023-11-30",
  },
  {
    id: 8,
    title: "Database Management SEE Paper",
    type: "see",
    branch: "cse",
    semester: "sem5",
    description: "Previous year SEE question paper with marking scheme",
    downloads: 342,
    date: "2023-12-28",
  },
];

const ResourcesSection = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedBranch, setSelectedBranch] = useState("All Branches");
  const [selectedSemester, setSelectedSemester] = useState("All Semesters");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredResources, setFilteredResources] = useState(resources);

  // Filter resources when selections change
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      const filtered = resources.filter((resource) => {
        const matchesType = selectedType === "all" || resource.type === selectedType;
        const matchesBranch = selectedBranch === "All Branches" || resource.branch === branches.find(b => b.name === selectedBranch)?.id;
        const matchesSemester = selectedSemester === "All Semesters" || resource.semester === semesters.find(s => s.name === selectedSemester)?.id;
        const matchesSearch = searchQuery === "" || 
          resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesType && matchesBranch && matchesSemester && matchesSearch;
      });
      
      setFilteredResources(filtered);
      setIsLoading(false);
    }, 400);
    
    return () => clearTimeout(timer);
  }, [selectedType, selectedBranch, selectedSemester, searchQuery]);

  return (
    <section id="resources" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resource Highlights</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Access a comprehensive collection of academic materials organized for your convenience.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Filter Controls */}
        <div className="bg-card shadow-md rounded-xl p-6 mb-10 border border-border/50 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="col-span-1 md:col-span-4 mb-4">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Branch Dropdown */}
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {selectedBranch}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-2">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem onClick={() => setSelectedBranch("All Branches")}>
                    All Branches
                  </DropdownMenuItem>
                  {branches.map((branch) => (
                    <DropdownMenuItem key={branch.id} onClick={() => setSelectedBranch(branch.name)}>
                      {branch.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Semester Dropdown */}
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {selectedSemester}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-2">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem onClick={() => setSelectedSemester("All Semesters")}>
                    All Semesters
                  </DropdownMenuItem>
                  {semesters.map((semester) => (
                    <DropdownMenuItem key={semester.id} onClick={() => setSelectedSemester(semester.name)}>
                      {semester.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Clear Filters */}
            <div>
              <Button 
                variant="ghost" 
                className="w-full border border-input"
                onClick={() => {
                  setSelectedBranch("All Branches");
                  setSelectedSemester("All Semesters");
                  setSelectedType("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Resource Type Tabs */}
        <Tabs defaultValue="all" value={selectedType} onValueChange={setSelectedType} className="mb-8">
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <TabsList className="w-full flex p-0 justify-start mb-8 bg-transparent space-x-2 min-w-max">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white py-2 px-4">
                All Resources
              </TabsTrigger>
              {resourceTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id} className="data-[state=active]:bg-primary data-[state=active]:text-white py-2 px-4 whitespace-nowrap">
                  <span className="mr-2">{type.icon}</span>
                  {type.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* All Resources Tab Content */}
          <TabsContent value="all" className="mt-0">
            {isLoading ? (
              <div className="py-20">
                <LoadingSpinner size="lg" />
              </div>
            ) : (
              <>
                {filteredResources.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResources.map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-card rounded-lg border border-border/50">
                    <p className="text-lg text-muted-foreground">No resources found for your selected filters.</p>
                    <Button variant="link" onClick={() => {
                      setSelectedBranch("All Branches");
                      setSelectedSemester("All Semesters");
                      setSelectedType("all");
                      setSearchQuery("");
                    }}>Clear all filters</Button>
                  </div>
                )}
              </>
            )}
          </TabsContent>

          {/* Resource Type Tab Contents */}
          {resourceTypes.map((type) => (
            <TabsContent key={type.id} value={type.id} className="mt-0">
              {isLoading ? (
                <div className="py-20">
                  <LoadingSpinner size="lg" />
                </div>
              ) : (
                <>
                  {filteredResources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredResources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-card rounded-lg border border-border/50">
                      <p className="text-lg text-muted-foreground">No resources found for your selected filters.</p>
                      <Button variant="link" onClick={() => {
                        setSelectedBranch("All Branches");
                        setSelectedSemester("All Semesters");
                        setSearchQuery("");
                      }}>Clear filters</Button>
                    </div>
                  )}
                </>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

// Resource Card Component
const ResourceCard = ({ resource }) => {
  const resourceTypeIcon = resourceTypes.find(t => t.id === resource.type)?.icon || "📄";
  const branchName = branches.find(b => b.id === resource.branch)?.name || "";
  const semesterName = semesters.find(s => s.id === resource.semester)?.name || "";

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden group animate-scale-in">
      <div className="bg-primary/10 py-3 px-6 flex justify-between items-center">
        <span className="text-2xl">{resourceTypeIcon}</span>
        <span className="text-xs font-medium bg-background/80 text-foreground/80 px-2 py-1 rounded-full">
          {downloads(resource.downloads)}
        </span>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{resource.title}</CardTitle>
        <CardDescription className="flex flex-col mt-2">
          <span className="text-foreground/60">{branchName}</span>
          <span className="text-foreground/60">{semesterName}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/70">{resource.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-xs text-muted-foreground">Added: {formatDate(resource.date)}</span>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

// Helper functions
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
};

const downloads = (count) => {
  return `${count} downloads`;
};

export default ResourcesSection;
