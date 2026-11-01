import "./globals.css";

export const metadata = {
  title: "Country Page JSONL builder",
  description: "Prepare a JSONL file for Country Page content generation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
