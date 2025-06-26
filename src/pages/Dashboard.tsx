
import Layout from '@/components/Layout';
import { Users, Folder, FileText, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Peer Reviews',
      icon: Users,
      total: 0,
      pending: 0,
      completed: 0
    },
    {
      title: 'Projects',
      icon: Folder,
      total: 0,
      pending: 0,
      completed: 0
    },
    {
      title: 'Blogs',
      icon: FileText,
      total: 0,
      pending: 0,
      completed: 0
    },
    {
      title: 'Courses Enrolled',
      icon: GraduationCap,
      total: 0,
      ongoing: 0,
      completed: 0
    }
  ];

  const metrics = [
    { label: 'Marks Earned', value: '0' },
    { label: 'Peer Evaluations', value: '0' },
    { label: 'Code Quality Rating', value: '0.0/5' },
    { label: 'Writing Rating', value: '0.0/5' },
    { label: 'Evaluation Rating', value: '0.0/5' },
    { label: 'Penalty Marks', value: '0' }
  ];

  return (
    <Layout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400">Overview of your progress and upcoming deadlines.</p>
          </div>
          <button className="text-gray-400 hover:text-white">
            View Notice Board
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 text-[#FF6B47]" />
                  <span className="text-gray-400 text-sm">{stat.title}</span>
                </div>
                <div className="text-4xl font-bold text-white mb-4">{stat.total}</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">
                      {stat.title === 'Courses Enrolled' ? 'Completed' : 'Total'}
                    </span>
                    <span className="text-green-500 text-sm font-medium">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">
                      {stat.title === 'Courses Enrolled' ? 'Ongoing' : 'Pending'}
                    </span>
                    <span className="text-red-500 text-sm font-medium">0</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-white" />
            <h2 className="text-xl font-bold text-white">Upcoming Deadlines</h2>
          </div>
          
          <div className="text-center py-12">
            <CheckCircle2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 italic">No upcoming deadlines. You're all caught up!</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
