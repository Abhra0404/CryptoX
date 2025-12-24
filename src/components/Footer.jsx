// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} CryptoX. All rights reserved.</p>
        <p className="mt-2">
          <a href="https://github.com/your-repo/cryptox" className="hover:underline">
            Open‑source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
