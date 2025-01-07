# InvestiLearn - The Duolingo of Investing and Stocks

## Overview

InvestiLearn is a financial data filtering application that allows users to analyze and learn about Apple Inc.'s financial performance. Inspired by Duolingo's user-friendly approach to learning, InvestiLearn provides an intuitive interface for filtering and sorting key financial metrics.

## Features

- **Fetch & Display**: Retrieve annual income statements for Apple Inc. and display them in a comprehensive table.
- **Filtering**: Filter data based on date range, revenue range, and net income range.
- **Sorting**: Sort data by date, revenue, or net income in ascending or descending order.
- **Responsive Design**: Mobile-friendly interface for seamless use across devices.
- **Theme Toggle**: Switch between light and dark modes.

## Technologies Used

- **Frontend**: React, TailwindCSS, Framer Motion
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Routing**: Single Page Application
- **Deployment**: [Your Preferred Service]

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A free API key from [Financial Modeling Prep](https://financialmodelingprep.com/).

### Installation

1. **Clone the Repository**

    ```bash
    git clone git@github.com:Gamikaru/Financial-Data-Filtering-App.git
    cd Financial-Data-Filtering-App
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the root directory and add your Financial Modeling Prep API key:

    ```
    REACT_APP_API_KEY=your_fmp_api_key
    ```

4. **Run the Application Locally**

    ```bash
    npm start
    ```

    The app will run on `http://localhost:3000`.

## Deployment

Deploy the application using your preferred service such as Vercel, Netlify, or GitHub Pages. Ensure the `.env` variables are properly set in the deployment environment.
