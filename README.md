# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Behance API Configuration

This application uses the Behance API to fetch user data including work experience, projects, and profile information.

### Environment Setup

1. Copy the example environment file:

   ```bash
   cp .env.development.example .env.development
   ```

2. Edit `.env.development` and replace `your_behance_api_key_here` with your actual Behance API key.

The file should contain:

```
REACT_APP_BEHANCE_API_URL=https://behance.net/v2/users
REACT_APP_BEHANCE_API_KEY=your_actual_api_key_here
```

**⚠️ Important**: Never commit your `.env.development` file to version control as it contains sensitive API keys.

### Troubleshooting API Issues

If you're experiencing JSONP request errors or API failures:

1. **Check API Key Validity**: The Behance API key may be expired or invalid
2. **Rate Limiting**: Behance API has a 150 requests/hour limit
3. **Network Issues**: CORS/JSONP failures may indicate connectivity problems
4. **API Deprecation**: Some endpoints may have been deprecated

### Getting a New API Key

1. Visit [Behance Developer Portal](https://www.behance.net/dev)
2. Register your application
3. Get your API key
4. Update your `.env.development` file

### Fallback Mode

The application includes mock data fallbacks when the API is unavailable, so you can still see the interface and functionality even when the Behance API is down.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
