
import Layout from '@/components/Layout';
import { Plus, Star, Users, Play, MessageCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StudentDashboard = () => {
  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Student Dashboard</h1>
          <p className="text-gray-400">Welcome back! Continue your learning journey.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#1a1a1a] border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Projects</p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
                <div className="w-12 h-12 bg-[#FF6B47]/20 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#FF6B47]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Connections</p>
                  <p className="text-2xl font-bold text-white">156</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Courses</p>
                  <p className="text-2xl font-bold text-white">8</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Rank</p>
                  <p className="text-2xl font-bold text-white">#23</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Projects */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">My Projects</CardTitle>
                <Button className="bg-[#FF6B47] hover:bg-[#e55a3d] text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Project
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">No projects uploaded yet</div>
                  <p className="text-gray-500 text-sm mb-6">
                    Upload your first project to showcase your skills
                  </p>
                  <Button className="bg-[#FF6B47] hover:bg-[#e55a3d] text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Upload Your First Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Projects from Others */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Projects from Community</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border border-gray-700 rounded-lg p-4 hover:border-[#FF6B47]/50 transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-semibold">E-commerce Website</h3>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm">4.8</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">
                        A full-stack e-commerce platform built with React and Node.js
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-[#FF6B47] rounded-full flex items-center justify-center text-white text-xs">
                            A
                          </div>
                          <span className="text-gray-400 text-sm">Alex Johnson</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">React</span>
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Node.js</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Courses */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Current Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: 'React Fundamentals', progress: 75 },
                    { title: 'Node.js Backend', progress: 45 },
                    { title: 'Database Design', progress: 30 }
                  ].map((course, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">{course.title}</span>
                        <span className="text-gray-400 text-xs">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-[#FF6B47] h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:text-white hover:border-[#FF6B47]">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Community Chat
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:text-white hover:border-[#FF6B47]">
                  <Users className="w-4 h-4 mr-2" />
                  Find Study Partners
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:text-white hover:border-[#FF6B47]">
                  <Play className="w-4 h-4 mr-2" />
                  Browse Courses
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="text-gray-400 text-sm">No upcoming sessions</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
