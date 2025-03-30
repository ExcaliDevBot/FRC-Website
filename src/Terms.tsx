import React from 'react';
import { Shield, Book, Scale } from 'lucide-react';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-team-blue py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 text-white">
            <Scale className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="prose max-w-none">
            <div className="flex items-center space-x-3 mb-8">
              <Shield className="h-6 w-6 text-team-gold" />
              <h2 className="text-2xl font-bold text-team-blue m-0">Agreement to Terms</h2>
            </div>

            <p className="text-gray-600 mb-8">
              By accessing and using the Team Excalibur website, you agree to be bound by these Terms of Service.
              If you disagree with any part of these terms, you may not access our website.
            </p>

            <div className="flex items-center space-x-3 mb-8">
              <Book className="h-6 w-6 text-team-gold" />
              <h2 className="text-2xl font-bold text-team-blue m-0">Intellectual Property</h2>
            </div>

            <p className="text-gray-600 mb-4">
              The content on this website, including but not limited to text, graphics, logos, images, and software,
              is the property of Team Excalibur and is protected by applicable copyright and trademark law.
            </p>

            <h3 className="text-xl font-semibold text-team-blue mt-8 mb-4">Use License</h3>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of the materials on Team Excalibur's website
              for personal, non-commercial transitory viewing only.
            </p>

            <h3 className="text-xl font-semibold text-team-blue mt-8 mb-4">Disclaimer</h3>
            <p className="text-gray-600 mb-4">
              The materials on Team Excalibur's website are provided on an 'as is' basis. Team Excalibur makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for a particular
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h3 className="text-xl font-semibold text-team-blue mt-8 mb-4">Limitations</h3>
            <p className="text-gray-600 mb-4">
              In no event shall Team Excalibur or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the
              use or inability to use the materials on Team Excalibur's website.
            </p>

            <h3 className="text-xl font-semibold text-team-blue mt-8 mb-4">Governing Law</h3>
            <p className="text-gray-600 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of Israel,
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;