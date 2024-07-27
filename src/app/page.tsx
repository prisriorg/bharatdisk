


export default function Home() {
  return (
    <main className="">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <a href="/" className="text-2xl font-bold text-blue-600">BharatDisk</a>
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-blue-600 hover:underline">Features</a></li>
            <li><a href="#how-it-works" className="text-blue-600 hover:underline">How It Works</a></li>
            <li><a href="#contact" className="text-blue-600 hover:underline">Contact</a></li>
          </ul>
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</a>
        </nav>
        <section className="hero bg-blue-600 text-white text-center py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">Welcome to BharatDisk</h1>
            <p className="text-lg mb-8">Your premier file storage platform. Store, view, and earn rewards while sharing your files.</p>
            <a href="/signup" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 text-lg">Get Started</a>
          </div>
        </section>
      </header>

      <main>
        <section id="features" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Secure Storage</h3>
                <p>Store your files safely with top-notch security.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Easy Sharing</h3>
                <p>Share files effortlessly with just a few clicks.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Earn Rewards</h3>
                <p>Earn rewards for every view and share of your files.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <ol className="list-decimal list-inside space-y-4 text-left mx-auto max-w-3xl">
              <li>Upload your files to BharatDisk.</li>
              <li>Share your files with others.</li>
              <li>Earn rewards based on the views and shares of your files.</li>
              <li>Manage your files and rewards easily from your dashboard.</li>
            </ol>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="mb-8">If you have any questions or need assistance, feel free to reach out to us.</p>
            <form action="/contact" method="post" className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
              <label htmlFor="name" className="block text-left text-lg font-semibold mb-2">Name:</label>
              <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded mb-4"/>

                <label htmlFor="email" className="block text-left text-lg font-semibold mb-2">Email:</label>
                <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded mb-4"/>

                  <label htmlFor="message" className="block text-left text-lg font-semibold mb-2">Message:</label>
                  <textarea id="message" name="message" required className="w-full p-3 border border-gray-300 rounded mb-4"></textarea>

                  <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Send Message</button>
                </form>
              </div>
            </section>
          </main>

          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              <p>&copy; 2024 BharatDisk. All rights reserved.</p>
              <ul className="flex justify-center space-x-6 mt-4">
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
          </footer>
      </main>
      );
}
