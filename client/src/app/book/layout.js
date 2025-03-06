// app/layout.js (or app/layout.tsx)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Bookstore</title>
        {/* Add other head tags as needed */}
      </head>
      <body>
        {/* You can include any global components like a header or footer here */}
        {children}
      </body>
    </html>
  );
}
