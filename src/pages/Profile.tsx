
import Layout from '@/components/Layout';
import { Camera, Edit3, Github, Linkedin, Instagram, Twitter, MapPin, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Profile = () => {
  const user = {
    fullName: 'Jasani Zeel',
    username: '@zeeljasani',
    email: 'jasanizeel487@gmail.com',
    bio: 'Full-stack developer passionate about creating innovative web applications. Currently learning React, Node.js, and cloud technologies.',
    location: 'New York, USA',
    joinDate: 'March 2024',
    role: 'Student',
    profileImage: null,
    coverImage: null,
    socialLinks: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      instagram: '',
      twitter: 'https://twitter.com/johndoe'
    },
    stats: {
      projects: 12,
      followers: 156,
      following: 89
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <div className="relative mb-6">
          <div className="h-48 bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] rounded-xl relative overflow-hidden">
            {user.coverImage ? (
              <img src={user.coverImage} alt="Cover" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-[#FF6B47] to-[#e55a3d]" />
            )}
            <button className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-all">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {/* Profile Picture */}
          <div className="absolute -bottom-16 left-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gray-800 rounded-full border-4 border-[#1a1a1a] overflow-hidden">
                {user.profileImage ? (
                  <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] flex items-center justify-center text-white text-2xl font-bold">
                    {user.fullName.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <button className="absolute bottom-2 right-2 bg-[#FF6B47] hover:bg-[#e55a3d] text-white p-1.5 rounded-full transition-all">
                <Camera className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-20 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">{user.fullName}</h1>
              <p className="text-[#FF6B47] text-lg mb-2">{user.username}</p>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {user.joinDate}
                </span>
              </div>
            </div>
            <Button className="bg-[#FF6B47] hover:bg-[#e55a3d] text-white">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Bio */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{user.bio}</p>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { icon: Github, label: 'GitHub', value: user.socialLinks.github },
                  { icon: Linkedin, label: 'LinkedIn', value: user.socialLinks.linkedin },
                  { icon: Twitter, label: 'Twitter', value: user.socialLinks.twitter },
                  { icon: Instagram, label: 'Instagram', value: user.socialLinks.instagram }
                ].map((link) => (
                  <div key={link.label} className="flex items-center gap-3">
                    <link.icon className="w-5 h-5 text-gray-400" />
                    {link.value ? (
                      <a
                        href={link.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6B47] hover:text-[#e55a3d] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-gray-500">Add {link.label}</span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardContent className="pt-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#FF6B47]">{user.stats.projects}</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#FF6B47]">{user.stats.followers}</div>
                    <div className="text-gray-400 text-sm">Followers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#FF6B47]">{user.stats.following}</div>
                    <div className="text-gray-400 text-sm">Following</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Recent Projects */}
          <div className="md:col-span-2">
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">No projects yet</div>
                  <Button className="bg-[#FF6B47] hover:bg-[#e55a3d] text-white">
                    Upload Your First Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
