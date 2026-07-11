import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-podipoint-cream py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-podipoint-green hover:text-podipoint-orange transition-colors mb-8">
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-podipoint-green mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p>
              This page is maintained by Podi Point to explain how we handle information collected through our website. By using our website, you agree to the practices described below.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-podipoint-green mb-3">1. Information We Collect</h2>
              <p>
                Our website is primarily informational. We may collect basic information you voluntarily share with us — such as your name, phone number, or email — when you contact us or make a reservation inquiry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-podipoint-green mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to inquiries, feedback, or reservation requests.</li>
                <li>To improve our menu, service, and customer experience.</li>
                <li>To share updates about Podi Point, only if you have opted in.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-podipoint-green mb-3">3. Cookies & Analytics</h2>
              <p>
                Our website may use basic cookies or third-party analytics tools to understand website traffic. These tools do not collect personally identifiable information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-podipoint-green mb-3">4. Sharing of Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to others. Information is only shared with trusted service providers who help operate our website, and only to the extent necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-podipoint-green mb-3">5. Data Security</h2>
              <p>
                We take reasonable steps to protect any information you share with us. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-podipoint-green mb-3">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party platforms such as Instagram or Google Maps. We are not responsible for the privacy practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-podipoint-green mb-3">7. Your Choices</h2>
              <p>
                You may contact us at any time to request access to, correction of, or deletion of information you have shared with us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-podipoint-green mb-3">8. Contact Us</h2>
              <p>
                For any questions about this Privacy Policy, please reach out:
              </p>
              <p className="mt-3">
                <strong>Podi Point</strong><br />
                Phone: +91 91114 15554<br />
                Email: info@podipoint.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-podipoint-green mb-3">9. Updates to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
