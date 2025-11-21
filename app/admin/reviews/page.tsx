'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Search, Check, X, Eye } from 'lucide-react';
import { reviews as demoReviews } from '@/data';

export default function ReviewsPage() {
  const [reviewList, setReviewList] = useState(demoReviews);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReviews = reviewList.filter((review) =>
    review.comment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (id: string, status: string) => {
    setReviewList(reviewList.map((r) => (r.id === id ? { ...r, status: status as typeof r.status } : r)));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <Star className="text-yellow-400" /> Reviews
        </h1>
        <p className="text-gray-400">Manage customer reviews</p>
      </div>

      <div className="relative max-w-md">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search reviews..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
        />
      </div>

      <div className="space-y-4">
        {filteredReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                    {review.userName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{review.userName}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-2">{review.comment}</p>
                <p className="text-gray-500 text-sm">{new Date(review.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs ${review.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {review.status}
                </span>
                <select
                  value={review.status}
                  onChange={(e) => handleStatusChange(review.id, e.target.value)}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none"
                >
                  <option value="pending" className="bg-gray-900">Pending</option>
                  <option value="published" className="bg-gray-900">Published</option>
                </select>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
