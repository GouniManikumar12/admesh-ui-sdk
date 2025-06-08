#!/bin/bash

# AdMesh UI SDK Storybook Deployment Script
# Builds and deploys Storybook to multiple hosting platforms

set -e

echo "🚀 AdMesh UI SDK Storybook Deployment"
echo "======================================"

# Build Storybook
echo "📦 Building Storybook..."
npm run build-storybook

echo "✅ Storybook built successfully!"

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Please run this from the admesh-ui-sdk root directory."
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Deployment options
echo ""
echo "🌐 Deployment Options:"
echo "1. GitHub Pages (automatic via workflow)"
echo "2. Netlify (manual upload)"
echo "3. Vercel (manual upload)"
echo "4. Chromatic (visual testing + hosting)"
echo "5. Surge.sh (quick hosting)"

read -p "Choose deployment option (1-5): " choice

case $choice in
    1)
        echo "📤 Deploying to GitHub Pages..."
        if [ "$CURRENT_BRANCH" = "main" ]; then
            echo "✅ On main branch - GitHub Actions will deploy automatically on next push"
            echo "🔗 Storybook will be available at: https://gounimanikumar12.github.io/admesh-ui-sdk/storybook/"
        else
            echo "⚠️  Switch to main branch and push to trigger automatic deployment"
            echo "   git checkout main && git push"
        fi
        ;;
    2)
        echo "📤 Preparing for Netlify deployment..."
        echo "📁 Upload the 'storybook-static' folder to Netlify"
        echo "🔗 Or use Netlify CLI: npx netlify deploy --prod --dir=storybook-static"
        ;;
    3)
        echo "📤 Preparing for Vercel deployment..."
        echo "📁 Upload the 'storybook-static' folder to Vercel"
        echo "🔗 Or use Vercel CLI: npx vercel --prod storybook-static"
        ;;
    4)
        echo "📤 Deploying to Chromatic..."
        if command -v npx &> /dev/null; then
            echo "🔑 Make sure CHROMATIC_PROJECT_TOKEN is set in your environment"
            echo "💡 Get your token from: https://www.chromatic.com/"
            read -p "Enter your Chromatic project token (or press Enter to skip): " token
            if [ ! -z "$token" ]; then
                npx chromatic --project-token=$token
            else
                echo "⏭️  Skipping Chromatic deployment"
            fi
        else
            echo "❌ npx not found. Please install Node.js"
        fi
        ;;
    5)
        echo "📤 Deploying to Surge.sh..."
        if command -v npx &> /dev/null; then
            cd storybook-static
            npx surge . admesh-ui-sdk-storybook.surge.sh
            cd ..
            echo "🔗 Storybook available at: https://admesh-ui-sdk-storybook.surge.sh"
        else
            echo "❌ npx not found. Please install Node.js"
        fi
        ;;
    *)
        echo "❌ Invalid option selected"
        exit 1
        ;;
esac

echo ""
echo "✨ Deployment process completed!"
echo ""
echo "📚 Storybook Hosting Options:"
echo "• GitHub Pages: https://gounimanikumar12.github.io/admesh-ui-sdk/storybook/"
echo "• Netlify: Custom domain after upload"
echo "• Vercel: Custom domain after upload"
echo "• Chromatic: Visual testing + hosting"
echo "• Surge.sh: https://admesh-ui-sdk-storybook.surge.sh"
echo ""
echo "💡 For automatic deployments, use GitHub Pages (option 1)"
echo "   Every push to main branch will update the hosted Storybook"
