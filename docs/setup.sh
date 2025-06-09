#!/bin/bash

# AdMesh Documentation Setup Script
# This script sets up the documentation environment

set -e  # Exit on any error

echo "📚 Setting up AdMesh Documentation"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the docs directory
if [ ! -f "package.json" ]; then
    print_error "This script must be run from the docs directory"
    print_error "Current directory: $(pwd)"
    print_error "Please run: cd docs && ./setup.sh"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed."
    echo ""
    echo "Please install Node.js 18+ from one of these sources:"
    echo "• Official website: https://nodejs.org/"
    echo "• Using nvm: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    echo "• Using Homebrew (macOS): brew install node"
    echo "• Using apt (Ubuntu): sudo apt install nodejs npm"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18 or higher is required. Current version: $(node --version)"
    echo ""
    echo "Please upgrade Node.js:"
    echo "• Using nvm: nvm install 18 && nvm use 18"
    echo "• Download from: https://nodejs.org/"
    exit 1
fi

print_success "Node.js version: $(node --version) ✓"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm and try again."
    exit 1
fi

print_success "npm version: $(npm --version) ✓"

# Install dependencies
print_status "Installing dependencies..."
echo ""

if npm install; then
    print_success "Dependencies installed successfully!"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    print_status "Creating .env file..."
    cat > .env << EOF
# AdMesh Documentation Environment Variables

# Algolia Search (optional - for search functionality)
# Get these from https://www.algolia.com/
ALGOLIA_APP_ID=your_app_id
ALGOLIA_API_KEY=your_api_key
ALGOLIA_INDEX_NAME=admesh-docs

# Google Analytics (optional)
GA_TRACKING_ID=G-XXXXXXXXXX

# Custom domain (optional)
CUSTOM_DOMAIN=docs.useadmesh.com
EOF
    print_success "Created .env file with default values"
    print_warning "Please update .env with your actual values if needed"
else
    print_status ".env file already exists"
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    print_status "Creating .gitignore file..."
    cat > .gitignore << EOF
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production build
build/
.docusaurus/

# Environment variables
.env
.env.local
.env.production

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Temporary folders
tmp/
temp/
EOF
    print_success "Created .gitignore file"
else
    print_status ".gitignore file already exists"
fi

# Test the setup
print_status "Testing the setup..."

if npm run build > /dev/null 2>&1; then
    print_success "Build test passed ✓"
else
    print_warning "Build test failed - this might be normal for first setup"
fi

# Display setup summary
echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📁 Project structure:"
echo "  docs/"
echo "  ├── docs/                 # Documentation content"
echo "  ├── src/                  # Custom components and styles"
echo "  ├── static/               # Static assets"
echo "  ├── docusaurus.config.js  # Site configuration"
echo "  ├── sidebars.js           # Navigation structure"
echo "  └── package.json          # Dependencies"
echo ""
echo "🚀 Available commands:"
echo "  npm start                 # Start development server"
echo "  npm run build             # Build for production"
echo "  npm run serve             # Preview production build"
echo "  npm run deploy            # Deploy to GitHub Pages"
echo "  ./deploy.sh               # Advanced deployment options"
echo ""
echo "📚 Documentation sections:"
echo "  • Getting Started         # Setup and basic concepts"
echo "  • Python SDK             # Python integration guide"
echo "  • TypeScript SDK         # TypeScript integration guide"
echo "  • UI SDK                 # React components"
echo "  • AI Integration         # AI agent integration"
echo "  • API Reference          # Detailed API docs"
echo "  • Examples               # Real-world examples"
echo ""
echo "🔧 Next steps:"
echo "  1. Run 'npm start' to start the development server"
echo "  2. Open http://localhost:3000 in your browser"
echo "  3. Edit files in docs/ to update content"
echo "  4. Customize docusaurus.config.js for your needs"
echo ""
echo "📖 Documentation features:"
echo "  • 🔍 Built-in search (configure Algolia in .env)"
echo "  • 🌙 Dark/light mode toggle"
echo "  • 📱 Mobile responsive design"
echo "  • 🎨 Syntax highlighting for code blocks"
echo "  • 🔗 Auto-generated navigation"
echo "  • 📊 Mermaid diagram support"
echo "  • 🏷️ Tabbed code examples"
echo "  • ⚡ Fast static site generation"
echo ""
echo "🆘 Need help?"
echo "  • Documentation: https://docusaurus.io/docs"
echo "  • AdMesh Support: support@useadmesh.com"
echo "  • GitHub Issues: https://github.com/GouniManikumar12/admesh-protocol/issues"
echo ""
print_success "Ready to start documenting! Run 'npm start' to begin."
