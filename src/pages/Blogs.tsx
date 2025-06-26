import Layout from '@/components/Layout';
import { Search, Plus, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blogs = () => {
  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#FF6B47] mb-2">Blogs</h1>
          <p className="text-gray-400">Share your knowledge and learn from others through blog posts.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Blogs"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B47]"
            />
          </div>
          <select className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B47] min-w-[150px]">
            <option>All Batches</option>
          </select>
          <select className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B47] min-w-[150px]">
            <option>All Categories</option>
          </select>
        </div>

        <div className="flex gap-4 mb-8">
          <button className="bg-[#FF6B47] text-white px-6 py-3 rounded-lg font-medium">
            Published (0)
          </button>
          <button className="text-gray-400 px-6 py-3 rounded-lg font-medium hover:text-white hover:bg-gray-800">
            Draft (0)
          </button>
          <button className="text-gray-400 px-6 py-3 rounded-lg font-medium hover:text-white hover:bg-gray-800">
            Under Review (0)
          </button>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 min-h-[400px] flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FF6B47] rounded-lg mx-auto mb-6 flex items-center justify-center">
              <Filter className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">No blogs available in this category</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              Start your writing journey by creating your first blog post. 
              Share your insights, experiences, and knowledge with the community.
            </p>
            <Button className="bg-[#FF6B47] hover:bg-[#e55a3d] text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create New Blog
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
