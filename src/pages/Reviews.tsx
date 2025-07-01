import React, { useState, useEffect } from 'react'
import { Star, MessageSquare } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { Link } from 'react-router-dom'

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  created_at: string
}

const Reviews = () => {
  const { user } = useAuth()
  const [reviews, setReviews] = useState<Review[]>([])
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setReviews(data || [])
    } catch (err) {
      console.error('Error fetching reviews:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setLoading(true)
    try {
      const { error } = await supabase
        .from('reviews')
        .insert([
          {
            user_id: user.id,
            name: user.user_metadata?.name || user.email?.split('@')[0] || 'Usuario',
            rating: newReview.rating,
            comment: newReview.comment
          }
        ])

      if (error) throw error

      setSuccess(true)
      setNewReview({ rating: 5, comment: '' })
      fetchReviews()
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      console.error('Error creating review:', err)
    } finally {
      setLoading(false)
    }
  }

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'text-gold-500 fill-current'
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-gold-400' : ''}`}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    )
  }

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Reseñas de Clientes
          </h1>
          <p className="text-xl text-gray-600">
            Lo que dicen nuestros clientes sobre Ciros
          </p>
          {reviews.length > 0 && (
            <div className="mt-6 flex items-center justify-center space-x-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-lg font-semibold text-gray-900">
                {averageRating.toFixed(1)} de 5
              </span>
              <span className="text-gray-600">
                ({reviews.length} reseñas)
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Review Form */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                <MessageSquare className="inline w-5 h-5 mr-2" />
                Deja tu reseña
              </h2>

              {!user ? (
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Inicia sesión para dejar una reseña
                  </p>
                  <Link to="/login" className="btn-primary text-sm">
                    Iniciar Sesión
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {success && (
                    <div className="bg-green-50 border border-green-200 text-green-600 px-3 py-2 rounded-lg text-sm">
                      ¡Reseña enviada exitosamente!
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Calificación
                    </label>
                    {renderStars(newReview.rating, true, (rating) => 
                      setNewReview(prev => ({ ...prev, rating }))
                    )}
                  </div>

                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                      Comentario
                    </label>
                    <textarea
                      id="comment"
                      rows={4}
                      required
                      value={newReview.comment}
                      onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                      className="input-field"
                      placeholder="Cuéntanos sobre tu experiencia en Ciros..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-sm disabled:opacity-50"
                  >
                    {loading ? 'Enviando...' : 'Enviar Reseña'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {reviews.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">
                    Aún no hay reseñas. ¡Sé el primero en compartir tu experiencia!
                  </p>
                </div>
              ) : (
                reviews.map((review) => (
                  <div key={review.id} className="card p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {new Date(review.created_at).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews