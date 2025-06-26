
import { Link } from 'react-router-dom';
import { GraduationCap, Users, BookOpen, Trophy, ArrowRight, Star, MessageCircle, Heart, Award, CheckCircle, Play, TrendingUp, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import { useState } from 'react';

const Landing = () => {
  const { currentTheme } = useTheme();
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});

  const handleLike = (postId: number) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const features = [
    {
      icon: Users,
      title: "Peer Reviews",
      description: "Submit your work and receive detailed feedback from peers to improve your skills continuously."
    },
    {
      icon: BookOpen,
      title: "Project Showcase",
      description: "Display your projects and discover amazing work from fellow learners in our community."
    },
    {
      icon: MessageCircle,
      title: "Blog Platform",
      description: "Share your knowledge and learn from others through engaging blog posts and discussions."
    },
    {
      icon: Trophy,
      title: "Evaluations",
      description: "Track your performance with detailed assessments and comprehensive progress reports."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jasani Krish",
      role: "Full Stack Developer",
      course: "Web Development Bootcamp",
      rating: 5,
      text: "MasterJi transformed my career! The peer review system helped me improve my code quality significantly.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b3b2b8d0?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Jagani Abhi",
      role: "Data Scientist",
      course: "Machine Learning Master Class",
      rating: 5,
      text: "The AI-powered feedback and mentorship made complex concepts easy to understand.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Hadvani Vit",
      role: "UX Designer",
      course: "Design Thinking Course",
      rating: 5,
      text: "Love the project showcase feature! It helped me build an amazing portfolio.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential JavaScript Tips for Beginners",
      author: "Jagani Abhi",
      likes: 45,
      comments: 12,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Building Your First React App: A Step-by-Step Guide",
      author: "Hitesh Patel",
      likes: 67,
      comments: 18,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop"
    }
  ];

  const faqs = [
    {
      question: "How do I submit a project?",
      answer: "You can submit projects through your dashboard by uploading a ZIP file containing your code and documentation."
    },
    {
      question: "How does peer review work?",
      answer: "After submitting your project, it's assigned to peers in your cohort who provide detailed feedback and ratings."
    },
    {
      question: "Can I get a certificate?",
      answer: "Yes! Upon successful completion of a course and passing all evaluations, you'll receive a verified certificate."
    },
    {
      question: "What if I miss a cohort deadline?",
      answer: "Don't worry! You can join the next available cohort or switch to self-paced learning mode."
    }
  ];

  return (
    <div className={`min-h-screen ${currentTheme.bg} text-white transition-all duration-500`}>
      <Header />

      
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium bg-[#E3583D] text-white border-white/20">
              Master your learning with Masterji
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Empower Your Learning Journey with{' '}
              <span className="bg-gradient-to-r from-[#FF6B47] via-[#ff7a5c] to-[#e55a3d] bg-clip-text text-transparent">
                MasterJi
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Access free & premium courses, submit projects, get peer reviews, and grow your network — all in one powerful learning platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/courses">
                <Button className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] hover:from-[#e55a3d] hover:to-[#d4493a] text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-[#FF6B47]/25 hover:shadow-3xl hover:shadow-[#FF6B47]/30 transition-all duration-300 rounded-xl hover:scale-105">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning Now
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-white/20 hover:bg-white/10">
                  Browse Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            {/* Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-400" />
                      <h3 className="text-2xl font-bold text-white mb-2">89%</h3>
                      <p className="text-white/60">Course Completion</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                      <h3 className="text-2xl font-bold text-white mb-2">1,247</h3>
                      <p className="text-white/60">Active Learners</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Award className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                      <h3 className="text-2xl font-bold text-white mb-2">156</h3>
                      <p className="text-white/60">Certificates Earned</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Smart Learning with <span className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] bg-clip-text text-transparent">AI</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience the future of education with our AI-powered platform that adapts to your learning style.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#FF6B47]/20 group-hover:shadow-xl group-hover:shadow-[#FF6B47]/30 transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 lg:py-32 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Showcase & <span className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] bg-clip-text text-transparent">Inspire</span>
              </h2>
              <p className="text-xl text-white/70">
                Discover amazing projects and engaging content from our community
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-white">Student Projects</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative group overflow-hidden rounded-lg">
                      <img 
                        src={`https://images.unsplash.com/photo-${i === 1 ? '1461749280684-dccba630e2f6' : i === 2 ? '1498050108023-c5249f4df085' : i === 3 ? '1581091226825-a6a2a5aee158' : '1487058792275-0ad4aaf24ca7'}?w=300&h=200&fit=crop`}
                        alt={`Project ${i}`}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <Button size="sm" variant="outline" className="w-full">
                            View Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-8 text-white">Latest Blog Posts</h3>
                <div className="space-y-6">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <img 
                            src={post.image}
                            alt={post.title}
                            className="w-20 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold mb-2 text-white line-clamp-2">{post.title}</h4>
                            <p className="text-sm text-white/60 mb-3">by {post.author}</p>
                            <div className="flex items-center gap-4 text-sm text-white/60">
                              <button 
                                onClick={() => handleLike(post.id)}
                                className={`flex items-center gap-1 transition-colors ${likedPosts[post.id] ? 'text-red-400' : 'hover:text-red-400'}`}
                              >
                                <Heart className={`w-4 h-4 ${likedPosts[post.id] ? 'fill-current' : ''}`} />
                                {post.likes + (likedPosts[post.id] ? 1 : 0)}
                              </button>
                              <div className="flex items-center gap-1">
                                <MessageCircle className="w-4 h-4" />
                                {post.comments}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl text-white/80 font-light italic">
                "Let your skills shine. Get inspired by fellow learners."
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] bg-clip-text text-transparent">Students</span> Say
              </h2>
              <p className="text-xl text-white/70">
                Join thousands of learners who have transformed their careers with MasterJi
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-white/60">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-white/80 mb-6 line-clamp-7">{testimonial.text}</p>
                    <Badge variant="outline" className="font-semibold text-sm bg-[#252525] border-white/20 text-white/60">
                      {testimonial.course}
                    </Badge>
                  </CardContent>  
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 lg:py-32 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pricing for <span className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] bg-clip-text text-transparent">Everyone</span>
              </h2>
              <p className="text-xl text-white/70">From Hobby Learners to Career Starters</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-4 text-white">Free Plan</CardTitle>
                  <div className="text-4xl font-bold text-[#FF6B47] mb-4">₹0</div>
                  <CardDescription className="text-white/70">Perfect for getting started</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">Access free courses</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">Join open cohorts</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">Limited peer reviews</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-[#FF6B47] hover:bg-white/10 transition-all duration-300 hover:scale-105 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] text-white px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-4 text-white">Standard Plan</CardTitle>
                  <div className="text-4xl font-bold text-[#FF6B47] mb-4">₹499<span className="text-lg text-white/60">/mo</span></div>
                  <CardDescription className="text-white/70">Everything you need to learn</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">Full course library</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">Submit unlimited projects</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">Personalized evaluations</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] hover:from-[#e55a3d] hover:to-[#d4493a]">
                    Choose Standard
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-4 text-white">Pro Plan</CardTitle>
                  <div className="text-4xl font-bold text-[#FF6B47] mb-4">₹999<span className="text-lg text-white/60">/mo</span></div>
                  <CardDescription className="text-white/70">For serious career growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">1-on-1 mentorship</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">Blog publishing access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">Showcase portfolio globally</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Choose Pro
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Everything You <span className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] bg-clip-text text-transparent">Need to Know</span>
              </h2>
              <p className="text-xl text-white/70">
                Common questions about our platform and learning experience
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[#FF6B47]/10 to-[#e55a3d]/10 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Learning?</h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Join thousands of learners who are already mastering their skills with MasterJi.
            </p>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] hover:from-[#e55a3d] hover:to-[#d4493a] text-white px-12 py-5 text-xl font-semibold shadow-2xl shadow-[#FF6B47]/25 hover:shadow-3xl hover:shadow-[#FF6B47]/30 transition-all duration-300 rounded-xl hover:scale-105">
                Create Your Account
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

     
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MasterJi</span>
              </div>
              <p className="text-white/60 mb-6 max-w-md leading-relaxed">
                Empowering learners worldwide with cutting-edge education technology and peer-to-peer learning experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Platform</h4>
              <ul className="space-y-3 text-white/60">
                <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2025 MasterJi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
