# Smartphone E-Commerce App

A modern e-commerce application built with React, TypeScript, Tailwind CSS, and React Query. This app allows users to browse smartphones, filter by storage capacity and manufacturer, and view detailed product information.

## Live Demo

<video autoplay loop muted playsinline>
  <source src="./public/Screen Recording 2025-03-01 at 13.09.30.mov" type="video/quicktime">
  Your browser does not support the video tag.
</video>

## Features

- **Product Listing**: Display a grid of smartphones with details like name, price, manufacturer, memory, and storage.
- **Filtering**: Filter smartphones by storage capacity (64GB, 128GB, 256GB) and manufacturer (Apple, Samsung).
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop screens.
- **Loading States**: Skeleton loading states for a smooth user experience.
- **Error Handling**: Graceful error handling for failed API requests.
- **Simulated API Delay**: Uses `json-server` with a delay to simulate real-world network conditions.

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
  - Tailwind CSS
  - React Query (for data fetching and caching)
- **Backend**:
  - `json-server` (mock REST API)
- **Development Tools**:
  - Vite (for fast development builds)
  - ESLint & Prettier (for code linting and formatting)
