# Shortly_URL_Shortener

Shortly is a modern URL shortener web application built with Next.js and Tailwind CSS. It allows users to quickly shorten long URLs and manage them efficiently. The project is designed with a responsive UI to work seamlessly on both mobile and desktop devices.

## Features

- **URL Shortening:** Quickly shorten long URLs to a manageable format.
- **Responsive Design:** Optimized for both mobile and desktop devices.
- **Copy to Clipboard:** Easily copy the shortened URL with one click.
- **Local Storage:** Persist your shortened URLs across sessions.
- **Clean UI:** A minimal and intuitive interface powered by Tailwind CSS.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks (useState, useEffect)
- **Deployment:** Compatible with platforms like Vercel and Netlify

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/ABHAYjr404/Shortly_URL_Shortener.git
   cd Shortly_URL_Shortener

2. Install dependencies:

   ```sh
   npm install

3. Run the development server:

   ```sh
   npm run dev

4. Open http://localhost:3000 in your browser to see the app in action.

## Usage
Shorten a URL: Enter a long URL into the provided input field and click the "Shorten" button.
Copy URL: Click the "Copy" button to copy the shortened URL to your clipboard.
Responsive UI: The interface adjusts automatically based on your device's screen size.

## Project Structure
   ```
   Shortly_URL_Shortener/
   ├── public/                # Static assets (images, icons, etc.)
   ├── components/            # Reusable React components
   │   ├── Button.tsx         # Custom button component
   │   ├── Hero.tsx           # Hero section component
   │   ├── ShortenedLink.tsx  # Component for an individual shortened URL
   │   └── ShortenedLinksList.tsx  # Component to list all shortened URLs
   ├── pages/                 # Next.js pages
   │   ├── index.tsx          # Main homepage
   │   └── _app.tsx           # Custom App component
   ├── styles/                # Global CSS and Tailwind configurations
   ├── package.json           # Project dependencies and scripts
   ├── tsconfig.json          # TypeScript configuration
   └── README.md              # Project documentation (this file)
   ```

## Screenshot

![](design/desktop-design.jpg)

Made with ❤️ by ABHAYjr404
