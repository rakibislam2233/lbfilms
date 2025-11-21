'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Plus } from 'lucide-react';
import { reviews } from '@/data';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ReviewsPage() {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const userReviews = reviews.filter((r) => r.userId === 'user-1');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">My Reviews</h1>
        <motion.button
          onClick={() => setShowForm(!showForm)}
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium flex items-center gap-2"
        >
          <Plus size={18} /> Write Review
        </motion.button>
      </div>

      {showForm && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4">Write a Review</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" onClick={() => setRating(star)}>
                    <Star size={24} className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'} />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Your Review</Label>
              <Textarea rows={4} placeholder="Share your experience..." className="bg-white/5 border-white/10 text-white placeholder-gray-500 resize-none" />
            </div>
            <div className="flex gap-3">
              <motion.button type="submit" whileHover={{ scale: 1.02 }} className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium">
                Submit Review
              </motion.button>
              <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 rounded-xl bg-white/5 text-gray-400 hover:text-white">
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      <div className="space-y-4">
        {userReviews.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Star size={48} className="mx-auto mb-4 opacity-50" />
            <p>You haven't written any reviews yet</p>
          </div>
        ) : (
          userReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'} />
                  ))}
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${review.published ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {review.published ? 'Published' : 'Pending'}
                </span>
              </div>
              <p className="text-gray-300">{review.comment}</p>
              <p className="text-gray-500 text-sm mt-3">{new Date(review.date).toLocaleDateString()}</p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
