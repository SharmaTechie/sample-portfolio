export default function Footer() {
  return (
    <footer className="py-8 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Sarah Williams. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Made with ❤️ using Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}

