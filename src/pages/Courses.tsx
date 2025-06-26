
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      instructor: "Dr. Sarah Johnson",
      duration: "12 weeks",
      students: 245,
      rating: 4.8,
      price: "₹2,499",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      description: "Master modern web development with React, Node.js, and databases. Build real-world projects and deploy to production."
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      instructor: "Prof. Michael Chen",
      duration: "16 weeks",
      students: 189,
      rating: 4.9,
      price: "₹3,299",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
      description: "Dive deep into data analysis, machine learning algorithms, and AI applications using Python and popular libraries."
    },
    {
      id: 3,
      title: "Mobile App Development",
      instructor: "Emily Rodriguez",
      duration: "10 weeks",
      students: 156,
      rating: 4.7,
      price: "₹1,999",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop",
      description: "Build native mobile apps for iOS and Android using React Native. From basics to app store deployment."
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      instructor: "Alex Thompson",
      duration: "8 weeks",
      students: 203,
      rating: 4.6,
      price: "₹1,499",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
      description: "Learn design principles, user research, prototyping, and create stunning user interfaces that convert."
    },
    {
      id: 5,
      title: "DevOps & Cloud Engineering",
      instructor: "David Kim",
      duration: "14 weeks",
      students: 167,
      rating: 4.8,
      price: "₹2,799",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop",
      description: "Master cloud platforms, containerization, CI/CD pipelines, and infrastructure as code."
    }
  ];

  return (
    <Layout>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">All Courses</h1>
            <p className="text-white/70 text-lg">
              Explore our comprehensive collection of courses designed to advance your career
            </p>
          </div>

          <div className="space-y-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-80 h-48 md:h-auto">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {course.level}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                      <CardDescription className="text-white/60">
                        by {course.instructor}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-white/70 mb-4 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-white/60 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students} students</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>Certificate included</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-[#FF6B47]">
                          {course.price}
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm">
                            Preview
                          </Button>
                          <Button className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] hover:from-[#e55a3d] hover:to-[#d4493a]">
                            Enroll Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] hover:from-[#e55a3d] hover:to-[#d4493a] px-8"
            >
              Explore More Courses
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
