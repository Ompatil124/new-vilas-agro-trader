
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-32 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-accent/20">
                V
              </div>
              <span className="text-xl font-extrabold tracking-tight text-primary">
                VILAS AGRO
              </span>
            </div>
            <p className="text-slate-500 font-medium">
              A legacy of quality and trust in the heart of Nandurbar. Partnering with farmers to feed the world.
            </p>
            <div className="flex gap-4">
              <a href="tel:9673931801" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              {/* Add other social placeholders as desired */}
            </div>
          </div>

          <div>
            <h4 className="text-primary font-bold text-lg mb-6 uppercase tracking-widest">Products</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#" className="hover:text-accent transition-colors">Cotton Seeds</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Organic Fertilizers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Crop Protectants</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Micro-nutrients</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-lg mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#" className="hover:text-accent transition-colors">About Our Shop</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Farmer Success Stories</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Consultation Service</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-lg mb-6 uppercase tracking-widest">Quick Inquiry</h4>
            <p className="text-slate-500 mb-6 font-medium">Have a question? Send us a quick message and we'll get back to you!</p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name') as string;
                const phone = formData.get('phone') as string;
                const message = formData.get('message') as string;

                try {
                  await fetch('https://discordapp.com/api/webhooks/1467929548942479392/CN7DxLZ-aNhWNFQcrBB_Scc3Nm4iJSvdgWj9cXMH9LEglrGQQRAuPrOw9UuDa8i2Dchy', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      embeds: [{
                        title: '🌾 New Inquiry from Vilas Agro Website',
                        color: 0x15803D,
                        fields: [
                          { name: '👤 Name', value: name || 'Not provided', inline: true },
                          { name: '📞 Phone', value: phone || 'Not provided', inline: true },
                          { name: '💬 Message', value: message || 'No message', inline: false }
                        ],
                        timestamp: new Date().toISOString()
                      }]
                    })
                  });
                  alert('✅ Inquiry sent! We\'ll contact you soon.');
                  e.currentTarget.reset();
                } catch (error) {
                  alert('❌ Failed to send. Please call us directly.');
                }
              }}
              className="space-y-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number (10 digits)"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                inputMode="numeric"
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                title="Please enter exactly 10 digits"
                className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />
              <textarea
                name="message"
                placeholder="Your message (optional)"
                rows={2}
                className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-xl hover:bg-cta transition-colors font-bold flex items-center justify-center gap-2"
              >
                Send Inquiry
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-slate-400">
          <div>© 2024 Vilas Agro. All Rights Reserved.</div>
          <div className="flex gap-8 uppercase tracking-widest">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
