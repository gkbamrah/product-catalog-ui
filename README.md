
# Product Catalog — Frontend

A React + TypeScript frontend for browsing, searching, and filtering a product catalog. Built to consume the [Product Catalog API](https://product-catalog-5fux.onrender.com/).

**Live site:** https://product-catalog-ui-six.vercel.app

## Tech Stack
React, TypeScript, Vite, Tailwind CSS, shadcn/ui

## Features
- Browse products in a responsive grid layout
- Search products by name
- Filter products by category
- Handles loading and error states, including backend cold-start delays (see note below)

> Note: The backend is hosted on Render's free tier, which spins down after inactivity. The first load may take 30-60 seconds while the server wakes up.

## How to run locally

Clone and enter repo:
```
git clone https://github.com/gkbamrah/product-catalog-ui.git  
cd product-catalog-ui
```
Install dependencies:
```
npm install
```
Create a `.env` file with:
```
VITE_API_URL=http://localhost:8000
```
(This assumes the backend is running locally on its default port. Adjust if you've configured Django to run on a different port, or point this at the deployed backend URL instead.)

Run the dev server:
```
npm run dev
```

## AI Usage
AI was used in the following ways:
- Suggestions for component structure, TypeScript typing patterns, and Tailwind/shadcn styling
- Debugging assistance for deployment configuration (CORS, environment variables, build errors)
- Populating the gitignore and readme files

**No code was copied directly from AI sources. All suggestions made by AI tools were thoroughly researched and understood before including them.**