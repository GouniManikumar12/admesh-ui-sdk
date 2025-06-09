---
sidebar_position: 1
---

# Python SDK Installation

The AdMesh Python SDK provides programmatic access to the AdMesh REST API for Python 3.8+ applications. The SDK includes comprehensive type definitions for all request parameters and response fields, with support for both synchronous and asynchronous operations.

## Requirements

- **Python 3.8 or higher**
- **pip** (Python package installer)

## Installation

### Using pip (Recommended)

```bash
pip install admesh-python
```

### Using pip with virtual environment

```bash
# Create virtual environment
python -m venv admesh-env

# Activate virtual environment
# On Windows:
admesh-env\Scripts\activate
# On macOS/Linux:
source admesh-env/bin/activate

# Install AdMesh
pip install admesh-python
```

### Using Poetry

```bash
poetry add admesh-python
```

### Using Conda

```bash
conda install -c conda-forge admesh-python
```

## Verify Installation

Create a simple test script to verify the installation:

```python
# test_installation.py
try:
    from admesh import Admesh
    print("✅ AdMesh Python SDK installed successfully!")
    print(f"📦 Version: {Admesh.__version__}")
except ImportError as e:
    print(f"❌ Installation failed: {e}")
```

Run the test:

```bash
python test_installation.py
```

## Dependencies

The AdMesh Python SDK automatically installs these dependencies:

- **httpx** - Modern HTTP client for making API requests
- **pydantic** - Data validation and type hints
- **typing-extensions** - Extended type hints support

## Environment Setup

### 1. API Key Configuration

Set up your API key using environment variables:

```bash
# Option 1: Export environment variable
export ADMESH_API_KEY="your_api_key_here"

# Option 2: Create .env file
echo "ADMESH_API_KEY=your_api_key_here" > .env
```

### 2. Using python-dotenv (Recommended)

Install python-dotenv for easy environment management:

```bash
pip install python-dotenv
```

Create a `.env` file in your project root:

```bash
# .env
ADMESH_API_KEY=your_api_key_here
ADMESH_BASE_URL=https://api.useadmesh.com  # Optional: custom base URL
```

Load environment variables in your Python code:

```python
from dotenv import load_dotenv
load_dotenv()  # Load variables from .env file

from admesh import Admesh
client = Admesh()  # API key loaded automatically
```

## Development Installation

If you want to contribute to the SDK or need the latest development version:

### From Source

```bash
# Clone the repository
git clone https://github.com/GouniManikumar12/admesh-python.git
cd admesh-python

# Install in development mode
pip install -e .

# Install development dependencies
pip install -e ".[dev]"
```

### Development Dependencies

For development, you'll also get:

- **pytest** - Testing framework
- **black** - Code formatting
- **mypy** - Type checking
- **flake8** - Linting
- **pre-commit** - Git hooks

## Configuration Options

### Basic Configuration

```python
from admesh import Admesh

# Using environment variable (recommended)
client = Admesh()

# Or specify API key directly
client = Admesh(api_key="your_api_key_here")
```

### Advanced Configuration

```python
from admesh import Admesh

client = Admesh(
    api_key="your_api_key_here",
    base_url="https://api.useadmesh.com",  # Custom base URL
    timeout=30.0,  # Request timeout in seconds
    max_retries=3,  # Number of retry attempts
    default_headers={  # Custom headers
        "User-Agent": "MyApp/1.0"
    }
)
```

### Async Client Configuration

```python
from admesh import AsyncAdmesh

async_client = AsyncAdmesh(
    api_key="your_api_key_here",
    timeout=30.0,
    max_retries=3
)
```

## Troubleshooting Installation

### Common Issues

#### SSL Certificate Errors

If you encounter SSL certificate errors:

```bash
pip install --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host files.pythonhosted.org admesh-python
```

#### Permission Errors

On macOS/Linux, if you get permission errors:

```bash
# Use --user flag
pip install --user admesh-python

# Or use sudo (not recommended)
sudo pip install admesh-python
```

#### Python Version Issues

Check your Python version:

```bash
python --version
# Should be 3.8 or higher
```

If you have multiple Python versions:

```bash
# Use specific Python version
python3.8 -m pip install admesh-python
python3.9 -m pip install admesh-python
```

#### Virtual Environment Issues

If you're having issues with virtual environments:

```bash
# Recreate virtual environment
rm -rf admesh-env
python -m venv admesh-env
source admesh-env/bin/activate  # or admesh-env\Scripts\activate on Windows
pip install --upgrade pip
pip install admesh-python
```

### Proxy Configuration

If you're behind a corporate proxy:

```bash
pip install --proxy http://user:password@proxy.server:port admesh-python
```

Or set environment variables:

```bash
export HTTP_PROXY=http://proxy.server:port
export HTTPS_PROXY=https://proxy.server:port
pip install admesh-python
```

## IDE Setup

### VS Code

For the best development experience with VS Code:

1. Install the Python extension
2. Set up your Python interpreter to use your virtual environment
3. Install these additional extensions:
   - Python Docstring Generator
   - Python Type Hint
   - autoDocstring

### PyCharm

PyCharm provides excellent support out of the box:

1. Create a new project with your virtual environment
2. Enable type checking in Settings → Editor → Inspections → Python
3. Configure code style to use Black formatting

### Type Checking

The SDK includes full type annotations. Enable type checking:

```bash
# Install mypy
pip install mypy

# Run type checking
mypy your_script.py
```

## Next Steps

After completing Python SDK installation:

1. **[Getting Started](/getting-started/overview)** - Core concepts and setup
2. **[API Reference](/api/authentication)** - Complete API documentation
3. **[Examples](/examples/ai-assistant)** - Implementation examples
4. **[TypeScript SDK](/typescript-sdk/installation)** - Node.js SDK alternative

## Support Resources

For installation assistance:

- **GitHub Issues**: [Report issues](https://github.com/GouniManikumar12/admesh-python/issues)
- **Support**: [support@useadmesh.com](mailto:support@useadmesh.com)
- **Documentation**: Complete technical documentation
