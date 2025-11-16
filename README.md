# AI Smart Planner 🤖📅

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Styling-orange)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![AI Powered](https://img.shields.io/badge/AI-Powered-orange)](https://github.com/yourusername/ai-smart-planner)

An intelligent task management application that combines beautiful design with smart scheduling capabilities. Plan your tasks with precision using time scheduling, priority management, and AI-powered recommendations.

![AI Smart Planner Demo](https://via.placeholder.com/800x400/667eea/ffffff?text=AI+Smart+Planner+Dashboard)

## ✨ Features

### 🎯 Smart Task Management

- **Time-Based Scheduling**: Add start and end times for precise task planning
- **Priority Levels**: Organize tasks with Low, Medium, and High priority
- **Task Categories**: Automatic separation of pending and completed tasks
- **Persistent Storage**: Your tasks are saved locally and persist between sessions

### 🕒 Time Intelligence

- **Duration Calculation**: Automatic calculation of task duration
- **Time Formatting**: Clean 12-hour format display (1:00 PM - 2:00 PM)
- **Date Management**: Easy date selection with calendar interface
- **Smart Validation**: Ensures end times are after start times

### 🎨 Beautiful UI/UX

- **Modern Gradient Design**: Beautiful purple gradient backgrounds
- **Card-Based Layout**: Clean, organized task cards with shadows and borders
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects and transitions for better interaction

### 🤖 AI-Powered Features

- **Smart Prioritization**: AI algorithms help prioritize your tasks
- **Task Recommendations**: Get intelligent suggestions for task management
- **Productivity Insights**: Analytics on your work patterns and habits

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ai-smart-planner.git
   cd ai-smart-planner

   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Start the development server**

   ```bash
   npm start

   ```

4. **Open your browser**
   Navigate to http://localhost:3000 to see the application.

## 📖How to Use

### Adding Tasks

1. Click on the "Add New Task" section
2. Fill in the task title (required)
3. Add an optional description
4. Select a date (defaults to today)
5. Set start and end times (optional)
6. Choose a priority level
7. Click "Add Task" to create

### Managing Tasks

• Complete Tasks: Check the checkbox to mark tasks as done
• Delete Tasks: Use the delete button (🗑️) to remove tasks
• ViewCategories: Tasks are automatically organized into "To Do" and "Completed" sections
• Time Display: View scheduled times and calculated durations

### Time Management

• Tasks with time slots show start and end times in 12-hour format
• Duration is automatically claculated and displayed
• Time validation prevents setting end times before start times

## 🛠️Technology Stack

• Frontend Framework: React 18.2.0
• State Management: React Context API + useState
• Styling: CSS3 with Flexbox and Grid
• Icons: Emoji and Unicode characters
• Storage: Browser localStorage
• Build Tool: Create React App

## 📁 Project Structure

ai-smart-planner/
├── public/
│ ├── index.html
│ └── manifest.json
├── src/
│ ├── components/
│ │ ├── TaskForm.js & TaskForm.css
│ │ ├── TaskList.js & TaskList.css
│ │ └── TaskItem.js & TaskItem.css
│ ├── contexts/
│ │ └── TaskContext.js
│ ├── utils/
│ │ └── aiPrioritizer.js
│ ├── App.js
│ └── index.js
├── package.json
└── README.md

## 🎨 Component Details

### TaskForm Component

• Beautiful gradient background card
• Form validation and time checking
• Date and time pickers
• Priority selection dropdown

### TaskList Component

• Organized task categories
• Task counter badges
• Empty state handling
• Responsive grid layout

### TaskItem Component

• Individual task cards with priority colors
• Time duration display
• Completion toggle
• Delete functionality

## 🔧 Available Scripts

npm start
Runs the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.

npm test
Launches the test runner in interactive watch mode.

npm run build
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time.

## 🌟 Key Features in Depth

### Time Scheduling

• Flexible Time Input: Use native time pickers for easy selection
• Duration Calculation: Automatic time span calculation (e.g., "1h 30m")
• 12-hour Format: Times displayed in user-friendly format (1:00 PM)
• Validation: Prevents scheduling conflicts and logical errors

### Priority System

• Visual Indicators: Color-coded borders for quick recognition
• Smart Organization: High priority tasks stand out
• Flexible Management: Easy to update priorities as needed

### Responsive Design

• Mobile-First: Optimized for smartphone usage
• Tablet Friendly: Adapts to medium screen sizes
• Desktop Optimized: Full-featured experience on larger screens

## 🤝 Contributing

I welcome contributions! Please feel free to submit issues, feature requests, or pull requests.

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you have any questions or run into issues:

1. Check the Issues page
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

## 🙏 Acknowledgements

• Built with Create React App
• Icons from Emoji
• Gradient design inspired by modern UI trends
• AI features powered by custom algorithms

⭐ Star this repo if you find it helpful!
