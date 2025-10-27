export const Footer = () => {
  return (
    <footer className="bg-sky-700 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/images/railwaybd.png"
              alt="Bangladesh Railway"
              className="w-10 h-10 mr-3"
            />
            <div>
              <h3 className="text-lg font-bold">বাংলাদেশ রেলওয়ে</h3>
              <p className="text-sm text-sky-200">Bangladesh Railway</p>
            </div>
          </div>

          <div className="text-sm text-sky-200 text-center md:text-right">
            <p>📞 Helpline: 16237 | 📧 info@railway.gov.bd</p>
            <p>⚠️ Carry valid ID | 🕐 Arrive 30 min early</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sky-600 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sky-200">
            <p>© 2024 Bangladesh Railway. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
