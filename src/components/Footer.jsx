export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <p>© {new Date().getFullYear()} company. All rights reserved.</p>
      </div>
    </footer>
  );
}
