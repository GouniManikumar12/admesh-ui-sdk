import type { Meta, StoryObj } from '@storybook/react-vite';

const Welcome = () => {
  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: '#333',
          marginBottom: '16px'
        }}>
          🎭 AdMesh UI SDK Storybook
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666',
          marginBottom: '32px'
        }}>
          Interactive showcase of citation-based conversation ads and UI components
        </p>
      </div>

      <div style={{
        background: '#f8f9fa',
        border: '1px solid #e9ecef',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '32px'
      }}>
        <h2 style={{ color: '#0066cc', marginBottom: '16px' }}>🌐 Quick Links</h2>
        <div style={{ display: 'grid', gap: '12px' }}>
          <a 
            href="https://gounimanikumar12.github.io/admesh-docs/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              background: 'white',
              border: '1px solid #0066cc',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#0066cc',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#0066cc';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#0066cc';
            }}
          >
            📚 Complete Documentation - Setup guides, API reference, and integration examples
          </a>
          
          <a 
            href="https://useadmesh.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              background: 'white',
              border: '1px solid #28a745',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#28a745',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#28a745';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#28a745';
            }}
          >
            🚀 AdMesh Dashboard - Get your API keys and manage campaigns
          </a>
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ color: '#333', marginBottom: '16px' }}>🎯 What's in this Storybook?</h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          <div style={{ 
            padding: '16px', 
            border: '1px solid #e9ecef', 
            borderRadius: '6px',
            background: 'white'
          }}>
            <h3 style={{ color: '#8b5cf6', marginBottom: '8px' }}>💬 Conversational Ad Units</h3>
            <p style={{ color: '#666', margin: 0 }}>
              Citation-based conversation ads that display recommendations as numbered references within text, 
              perfect for AI assistants and chatbots.
            </p>
          </div>
          
          <div style={{ 
            padding: '16px', 
            border: '1px solid #e9ecef', 
            borderRadius: '6px',
            background: 'white'
          }}>
            <h3 style={{ color: '#f59e0b', marginBottom: '8px' }}>📋 Sidebar Components</h3>
            <p style={{ color: '#666', margin: 0 }}>
              Persistent sidebar panels for displaying recommendations alongside your main content 
              with search, filtering, and multiple display modes.
            </p>
          </div>
          
          <div style={{ 
            padding: '16px', 
            border: '1px solid #e9ecef', 
            borderRadius: '6px',
            background: 'white'
          }}>
            <h3 style={{ color: '#10b981', marginBottom: '8px' }}>💬 Chat Components</h3>
            <p style={{ color: '#666', margin: 0 }}>
              Floating chat widgets and embeddable chat interfaces for AI-powered recommendations 
              with auto-recommendation triggers.
            </p>
          </div>
          
          <div style={{ 
            padding: '16px', 
            border: '1px solid #e9ecef', 
            borderRadius: '6px',
            background: 'white'
          }}>
            <h3 style={{ color: '#ef4444', marginBottom: '8px' }}>🧩 Core Components</h3>
            <p style={{ color: '#666', margin: 0 }}>
              Essential building blocks including product cards, comparison tables, badges, 
              and link tracking components with built-in analytics.
            </p>
          </div>
        </div>
      </div>

      <div style={{
        background: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '32px'
      }}>
        <h3 style={{ color: '#856404', marginBottom: '12px' }}>🦖 Built with Modern Tools</h3>
        <p style={{ color: '#856404', margin: 0 }}>
          This Storybook showcases components built with <strong>React + TypeScript</strong>, 
          styled with <strong>Tailwind CSS</strong>, and documented with <strong>Storybook</strong>. 
          The complete documentation site is powered by <strong>Docusaurus</strong> for the best developer experience.
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#666', fontSize: '14px' }}>
          Ready to integrate AdMesh into your application? 
          <br />
          <a 
            href="https://gounimanikumar12.github.io/admesh-docs/getting-started/overview" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0066cc', textDecoration: 'none' }}
          >
            Start with our Getting Started Guide →
          </a>
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Welcome> = {
  title: '🏠 Welcome',
  component: Welcome,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Welcome to the AdMesh UI SDK Storybook! Explore our citation-based conversation ads and UI components.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WelcomeToAdMesh: Story = {
  name: '🎭 Welcome to AdMesh UI SDK',
};
