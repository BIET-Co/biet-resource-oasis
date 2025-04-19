
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Mock testimonials data
const testimonials = [
  {
    id: 1,
    quote: "BIET Resources Hub has been a lifesaver during exam preparation. All the materials are well-organized and comprehensive.",
    student: "Priya Sharma",
    branch: "Computer Science, 6th Sem"
  },
  {
    id: 2,
    quote: "Having access to previous question papers helped me understand exam patterns and focus my studies efficiently.",
    student: "Rahul Patel",
    branch: "Electrical Engineering, 4th Sem"
  },
  {
    id: 3,
    quote: "The organized notes made complex topics much easier to understand and helped me score better in my exams.",
    student: "Anjali Desai",
    branch: "Electronics & Communication, 5th Sem"
  },
  {
    id: 4,
    quote: "This platform is a great initiative! I could find all resources in one place instead of searching multiple sources.",
    student: "Karthik Reddy",
    branch: "Mechanical Engineering, 7th Sem"
  },
  {
    id: 5,
    quote: "I particularly appreciate the model question papers that gave me insights into what to expect in my exams.",
    student: "Neha Singh",
    branch: "Civil Engineering, 3rd Sem"
  }
];

// Motivational quotes for students
const motivationalQuotes = [
  {
    id: 1,
    quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    author: "Malcolm X"
  },
  {
    id: 2,
    quote: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    id: 3,
    quote: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    author: "Dr. Seuss"
  },
  {
    id: 4,
    quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",
    author: "Pelé"
  },
  {
    id: 5,
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  }
];

const TestimonialsSection = () => {
  const [activeQuote, setActiveQuote] = useState(0);
  const [activeMotive, setActiveMotive] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate motivational quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMotive((prev) => (prev + 1) % motivationalQuotes.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Students Say</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Testimonials Carousel - 3 columns */}
          <div className="lg:col-span-3 relative">
            <div className="overflow-hidden rounded-2xl h-80">
              <div 
                className="flex transition-transform duration-500 h-full" 
                style={{ transform: `translateX(-${activeQuote * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <Card className="h-full flex flex-col justify-between shadow-lg border border-border/50 bg-card hover:shadow-xl transition-shadow">
                      <CardContent className="p-8 flex flex-col justify-between h-full">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" className="text-primary/20 mb-4">
                            <path
                              fill="currentColor"
                              d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
                            />
                          </svg>
                          <p className="text-xl italic mb-6">{testimonial.quote}</p>
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.student}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.branch}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveQuote(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === activeQuote ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Motivational Quote Card - 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-primary/90 to-tertiary text-white rounded-2xl p-8 h-80 flex flex-col justify-center shadow-lg relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              {/* Quote content with fade animation */}
              <div className="relative z-10">
                {motivationalQuotes.map((quote, index) => (
                  <div 
                    key={quote.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === activeMotive ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="h-full flex flex-col justify-center">
                      <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                        "{quote.quote}"
                      </p>
                      <p className="text-sm md:text-base text-white/80 font-medium">— {quote.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
