// Next.js Integration Example - AdMesh UI SDK
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AdMeshLayout } from '@admesh/ui-sdk';
import '@admesh/ui-sdk/dist/ui-sdk.css';

// Example API function to fetch recommendations
async function fetchRecommendations(query, userId) {
  try {
    const response = await fetch('/api/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        user_id: userId,
        format: 'auto'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch recommendations');
    }

    const data = await response.json();
    return data.recommendations || [];
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return [];
  }
}

// Main recommendations page component
export default function RecommendationsPage({ initialRecommendations, query }) {
  const router = useRouter();
  const [recommendations, setRecommendations] = useState(initialRecommendations || []);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle dark mode toggle
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  // Handle product clicks with analytics
  const handleProductClick = (adId, admeshLink) => {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'recommendation_click', {
        event_category: 'AdMesh',
        event_label: adId,
        custom_map: {
          'custom_parameter_1': query
        }
      });
    }

    // Custom analytics tracking
    if (window.analytics) {
      window.analytics.track('Recommendation Clicked', {
        ad_id: adId,
        query: query,
        page: router.pathname,
        timestamp: new Date().toISOString()
      });
    }

    // Open the tracked link
    window.open(admeshLink, '_blank');
  };

  // Handle product views
  const handleProductView = (adId, productId) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'recommendation_view', {
        event_category: 'AdMesh',
        event_label: adId
      });
    }
  };

  // Refresh recommendations
  const refreshRecommendations = async () => {
    setLoading(true);
    try {
      const newRecommendations = await fetchRecommendations(query, 'user-123');
      setRecommendations(newRecommendations);
    } catch (error) {
      console.error('Failed to refresh recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Header */}
      <header className={`border-b transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className={`text-xl font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Product Recommendations
              </h1>
              {query && (
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Results for "{query}"
                </p>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              {/* Refresh button */}
              <button
                onClick={refreshRecommendations}
                disabled={loading}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600 disabled:bg-gray-800'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:bg-gray-50'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>

              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        ) : recommendations.length > 0 ? (
          <AdMeshLayout
            recommendations={recommendations}
            intentType="best_for_use_case"
            theme={{ 
              mode: darkMode ? "dark" : "light",
              accentColor: "#6366f1"
            }}
            maxDisplayed={9}
            showMatchScores={true}
            showFeatures={true}
            autoLayout={true}
            onProductClick={handleProductClick}
            onTrackView={handleProductView}
          />
        ) : (
          <div className={`text-center py-12 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p className="text-lg mb-4">No recommendations found</p>
            <button
              onClick={refreshRecommendations}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

// Server-side rendering with getServerSideProps
export async function getServerSideProps(context) {
  const { query } = context.query;
  
  try {
    // Fetch initial recommendations on the server
    const initialRecommendations = await fetchRecommendations(
      query || 'productivity tools',
      context.req.headers['x-user-id'] || 'anonymous'
    );

    return {
      props: {
        initialRecommendations,
        query: query || null
      }
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    
    return {
      props: {
        initialRecommendations: [],
        query: query || null
      }
    };
  }
}

// Alternative: Static generation with getStaticProps
export async function getStaticProps() {
  try {
    const recommendations = await fetchRecommendations('popular tools', 'default');
    
    return {
      props: {
        initialRecommendations: recommendations
      },
      revalidate: 3600 // Revalidate every hour
    };
  } catch (error) {
    return {
      props: {
        initialRecommendations: []
      }
    };
  }
}
