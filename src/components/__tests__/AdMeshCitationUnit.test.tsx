import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AdMeshCitationUnit } from '../AdMeshCitationUnit';
import { AdMeshCitationReference } from '../AdMeshCitationReference';

const mockRecommendations = [
  {
    title: "HubSpot CRM",
    reason: "Perfect for remote teams with excellent collaboration features",
    intent_match_score: 0.92,
    admesh_link: "https://useadmesh.com/track?ad_id=hubspot-123",
    ad_id: "hubspot-123",
    product_id: "hubspot-crm",
    keywords: ["CRM", "Sales", "Marketing"],
    categories: ["Sales Tools", "CRM"]
  },
  {
    title: "Salesforce",
    reason: "Enterprise-grade CRM with extensive customization",
    intent_match_score: 0.88,
    admesh_link: "https://useadmesh.com/track?ad_id=salesforce-456",
    ad_id: "salesforce-456",
    product_id: "salesforce-crm",
    keywords: ["CRM", "Enterprise", "Sales"],
    categories: ["Sales Tools", "CRM"]
  }
];

const conversationText = `
Based on your requirements, I recommend HubSpot CRM for its excellent features. 
For enterprise needs, Salesforce provides comprehensive customization options.
`;

describe('AdMeshCitationUnit', () => {
  it('renders conversation text with citations', () => {
    render(
      <AdMeshCitationUnit
        recommendations={mockRecommendations}
        conversationText={conversationText}
        showCitationList={true}
      />
    );

    expect(screen.getByText(/Based on your requirements/)).toBeInTheDocument();
    expect(screen.getByText('References')).toBeInTheDocument();
  });

  it('displays citation references in the text', () => {
    render(
      <AdMeshCitationUnit
        recommendations={mockRecommendations}
        conversationText={conversationText}
        citationStyle="numbered"
      />
    );

    // Should find citation numbers in the text
    const citations = screen.getAllByText('1');
    expect(citations.length).toBeGreaterThan(0);
  });

  it('shows citation list when enabled', () => {
    render(
      <AdMeshCitationUnit
        recommendations={mockRecommendations}
        conversationText={conversationText}
        showCitationList={true}
      />
    );

    expect(screen.getByText('References')).toBeInTheDocument();
    expect(screen.getByText('HubSpot CRM')).toBeInTheDocument();
    expect(screen.getByText('Salesforce')).toBeInTheDocument();
  });

  it('hides citation list when disabled', () => {
    render(
      <AdMeshCitationUnit
        recommendations={mockRecommendations}
        conversationText={conversationText}
        showCitationList={false}
      />
    );

    expect(screen.queryByText('References')).not.toBeInTheDocument();
  });

  it('calls onRecommendationClick when citation is clicked', () => {
    const mockClick = jest.fn();
    
    render(
      <AdMeshCitationUnit
        recommendations={mockRecommendations}
        conversationText={conversationText}
        onRecommendationClick={mockClick}
      />
    );

    const citation = screen.getAllByText('1')[0];
    fireEvent.click(citation);

    expect(mockClick).toHaveBeenCalledWith('hubspot-123', 'https://useadmesh.com/track?ad_id=hubspot-123');
  });

  it('calls onCitationHover when citation is hovered', () => {
    const mockHover = jest.fn();
    
    render(
      <AdMeshCitationUnit
        recommendations={mockRecommendations}
        conversationText={conversationText}
        onCitationHover={mockHover}
      />
    );

    const citation = screen.getAllByText('1')[0];
    fireEvent.mouseEnter(citation);

    expect(mockHover).toHaveBeenCalledWith(mockRecommendations[0]);
  });

  it('supports different citation styles', () => {
    const { rerender } = render(
      <AdMeshCitationUnit
        recommendations={mockRecommendations}
        conversationText={conversationText}
        citationStyle="bracketed"
      />
    );

    expect(screen.getByText('[1]')).toBeInTheDocument();

    rerender(
      <AdMeshCitationUnit
        recommendations={mockRecommendations}
        conversationText={conversationText}
        citationStyle="superscript"
      />
    );

    // Superscript style should still show the number
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});

describe('AdMeshCitationReference', () => {
  it('renders citation number correctly', () => {
    render(
      <AdMeshCitationReference
        recommendation={mockRecommendations[0]}
        citationNumber={1}
        citationStyle="numbered"
      />
    );

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders different citation styles', () => {
    const { rerender } = render(
      <AdMeshCitationReference
        recommendation={mockRecommendations[0]}
        citationNumber={1}
        citationStyle="bracketed"
      />
    );

    expect(screen.getByText('[1]')).toBeInTheDocument();

    rerender(
      <AdMeshCitationReference
        recommendation={mockRecommendations[0]}
        citationNumber={2}
        citationStyle="superscript"
      />
    );

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('shows tooltip on hover when enabled', async () => {
    render(
      <AdMeshCitationReference
        recommendation={mockRecommendations[0]}
        citationNumber={1}
        showTooltip={true}
      />
    );

    const citation = screen.getByText('1');
    fireEvent.mouseEnter(citation);

    await waitFor(() => {
      expect(screen.getByText('HubSpot CRM')).toBeInTheDocument();
      expect(screen.getByText(/Perfect for remote teams/)).toBeInTheDocument();
    });
  });

  it('hides tooltip when showTooltip is false', () => {
    render(
      <AdMeshCitationReference
        recommendation={mockRecommendations[0]}
        citationNumber={1}
        showTooltip={false}
      />
    );

    const citation = screen.getByText('1');
    fireEvent.mouseEnter(citation);

    // Tooltip content should not be in the document
    expect(screen.queryByText(/Perfect for remote teams/)).not.toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const mockClick = jest.fn();
    
    render(
      <AdMeshCitationReference
        recommendation={mockRecommendations[0]}
        citationNumber={1}
        onClick={mockClick}
      />
    );

    const citation = screen.getByText('1');
    fireEvent.click(citation);

    expect(mockClick).toHaveBeenCalledWith('hubspot-123', 'https://useadmesh.com/track?ad_id=hubspot-123');
  });

  it('calls onHover when hovered', () => {
    const mockHover = jest.fn();
    
    render(
      <AdMeshCitationReference
        recommendation={mockRecommendations[0]}
        citationNumber={1}
        onHover={mockHover}
      />
    );

    const citation = screen.getByText('1');
    fireEvent.mouseEnter(citation);

    expect(mockHover).toHaveBeenCalledWith(mockRecommendations[0]);
  });

  it('applies theme styles correctly', () => {
    const theme = { mode: 'dark' as const, accentColor: '#3b82f6' };
    
    render(
      <AdMeshCitationReference
        recommendation={mockRecommendations[0]}
        citationNumber={1}
        theme={theme}
      />
    );

    const citation = screen.getByText('1');
    expect(citation.closest('[data-admesh-theme="dark"]')).toBeInTheDocument();
  });
});
