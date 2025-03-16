# Weather App

A modern, responsive weather application built with React that works as a Progressive Web App. Get real-time weather information for any city worldwide, with the ability to work offline.

![Weather App Screenshot](./public/images/logo.png)

## Features

- 🌍 Real-time weather data from OpenWeatherMap API
- 📱 Progressive Web App (PWA) functionality
- 🔄 Offline support with service workers
- 📍 Search weather by city name
- 🌡️ Temperature in Celsius
- 🖼️ Weather condition icons
- 💨 Weather description
- 🌍 Country information
- 📱 Fully responsive design


## Technologies Used

- React.js
- Axios for API requests
- Progressive Web App (PWA) features
- Service Workers for offline functionality
- OpenWeatherMap API
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (free tier available)

### Installation

1. Clone the repository
```bash
git clone https://github.com/{username}/weather-app.git
cd weather-app
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```env
REACT_APP_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

### Building for Production

To create a production build:
```bash
npm run build
```


## Usage

1. Enter a city name in the search bar
2. Press Enter or click the search button
3. View the current weather information for the specified city
4. The app will work offline for previously searched cities


This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from OpenWeatherMap's weather icons collection
