'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Camera, MessageCircle, User } from 'lucide-react';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Sarah Johnson', rating: 5, comment: 'LB Films captured our special day perfectly! The attention to detail and professionalism was exceptional.', date: '2023-11-10' },
    { id: 2, name: 'Michael Chen', rating: 5, comment: 'Outstanding work! The team made us feel comfortable throughout the entire session.', date: '2023-11-05' },
    { id: 3, name: 'Emma Rodriguez', rating: 4, comment: 'Great experience overall. The photos turned out beautiful and were delivered on time.', date: '2023-10-28' },
  ]);
  
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add new review to the list
    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };
    
    setReviews([review, ...reviews]);
    
    // Reset form
    setNewReview({
      name: '',
      rating: 5,
      comment: ''
    });
    
    setIsSubmitting(false);
    setShowForm(false);
  };

  const handleRating = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  return (
    <section className="section bg-primary-50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Share Your Experience</h2>
          <p className="section-subtitle">
            Your feedback helps us improve our services
          </p>
        </motion.div>

        {!showForm ? (
          <div className="text-center">
            <button
              onClick={() => setShowForm(true)}
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Write a Review
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-12"
          >
            <h3 className="text-xl font-bold text-secondary-800 mb-6">Share Your Experience</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-secondary-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-secondary-700 font-medium mb-2">Your Rating</label>
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRating(star)}
                      className="text-2xl focus:outline-none"
                    >
                      <Star 
                        className={`${star <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-secondary-300'} h-8 w-8`} 
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-secondary-700 font-medium mb-2">Your Review</label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Share your experience with our services..."
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border border-secondary-300 rounded-lg text-secondary-700 hover:bg-secondary-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Recent Reviews */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <User className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-secondary-800">{review.name}</h4>
                    <span className="text-xs text-secondary-500">{review.date}</span>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-secondary-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="text-secondary-600">{review.comment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;