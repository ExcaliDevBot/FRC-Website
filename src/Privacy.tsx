import React, {useEffect} from 'react';
import { Lock, Shield, Eye, Database } from 'lucide-react';

function PrivacyPolicy() {
    useEffect(() => {
        document.title = "Privacy Policy | Excalibur FRC";
    }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-team-blue py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 text-white">
            <Lock className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="prose max-w-none">
            <div className="flex items-center space-x-3 mb-8">
              <Shield className="h-6 w-6 text-team-gold" />
              <h2 className="text-2xl font-bold text-team-blue m-0">Your Privacy Matters</h2>
            </div>

            <p className="text-gray-600 mb-8">
              Team Excalibur is committed to protecting your privacy and ensuring the security of any personal
              information you provide to us. This privacy policy explains how we collect, use, and safeguard your data.
            </p>

            <div className="flex items-center space-x-3 mb-8">
              <Eye className="h-6 w-6 text-team-gold" />
              <h2 className="text-2xl font-bold text-team-blue m-0">Information We Collect</h2>
            </div>

            <p className="text-gray-600 mb-4">
              We may collect the following types of information:
            </p>

            <ul className="list-disc pl-6 mb-8 text-gray-600">
              <li>Name and contact information when you reach out to us</li>
              <li>Technical information about your device and how you use our website</li>
              <li>Information you provide when applying to join our team</li>
              <li>Photos and videos from our events (with consent)</li>
            </ul>

            <div className="flex items-center space-x-3 mb-8">
              <Database className="h-6 w-6 text-team-gold" />
              <h2 className="text-2xl font-bold text-team-blue m-0">How We Use Your Information</h2>
            </div>

            <p className="text-gray-600 mb-4">
              We use the collected information for:
            </p>

            <ul className="list-disc pl-6 mb-8 text-gray-600">
              <li>Communicating with team members and supporters</li>
              <li>Processing team applications</li>
              <li>Improving our website and services</li>
              <li>Documenting our activities and achievements</li>
            </ul>

            <h3 className="text-xl font-semibold text-team-blue mt-8 mb-4">Data Security</h3>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="text-xl font-semibold text-team-blue mt-8 mb-4">Your Rights</h3>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-600">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw your consent at any time</li>
            </ul>

            <h3 className="text-xl font-semibold text-team-blue mt-8 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: excaliburfrc@gmail.com
              <br />
              Address: Reuven 4, Modi'in, Israel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;