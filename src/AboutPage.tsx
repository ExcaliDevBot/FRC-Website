import React, {useEffect} from 'react';
import { Award, BookOpen, Target, Users } from 'lucide-react';

function AboutPage() {
    useEffect(() => {
        document.title = "About | Excalibur FRC";

    }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-team-blue overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-team-blue to-blue-900 opacity-90"></div>
<div className="absolute inset-0 bg-[url('img/prizes.jpeg')] bg-cover bg-center mix-blend-overlay"></div>        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold text-white mb-6">
                About Team
                <span className="text-team-gold block mt-4">Excalibur #6738</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Founded in 2017, we are a passionate FIRST Robotics Competition team from Israel,
                dedicated to inspiring the next generation of engineers and innovators.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-team-blue mb-8">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We strive to inspire and nurture the next generation of STEM leaders
                through robotics innovation, collaborative problem-solving, and community engagement.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe in fostering an environment where creativity meets technical excellence,
                where every team member has the opportunity to grow and contribute to our shared success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Target className="h-8 w-8 text-team-gold" />,
                  title: "Excellence",
                  desc: "Striving for the highest standards in everything we do"
                },
                {
                  icon: <Users className="h-8 w-8 text-team-gold" />,
                  title: "Teamwork",
                  desc: "Collaborating to achieve our shared goals"
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-team-gold" />,
                  title: "Learning",
                  desc: "Continuous growth and knowledge sharing"
                },
                {
                  icon: <Award className="h-8 w-8 text-team-gold" />,
                  title: "Innovation",
                  desc: "Pushing boundaries in robotics and engineering"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-team-blue mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* History & Achievements */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-team-blue mb-6">Our Journey</h2>
            <p className="text-gray-600 text-lg">
              Since our founding, we've grown from a small group of enthusiastic students
              into a accomplished team with multiple regional awards and achievements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-team-gold/20"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-team-gold rounded-full border-4 border-white"></div>
                <h3 className="text-xl font-semibold text-team-blue mb-2">2017</h3>
                <p className="text-gray-600">Team founded with 15 dedicated members</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-team-gold/20"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-team-gold rounded-full border-4 border-white"></div>
                <h3 className="text-xl font-semibold text-team-blue mb-2">2023</h3>
                <p className="text-gray-600">First District Competition Win as Alliance Captian</p>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-team-gold rounded-full border-4 border-white"></div>
                <h3 className="text-xl font-semibold text-team-blue mb-2">2025</h3>
                <p className="text-gray-600">Won Engeering Inspiration Award at ISCMP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-team-blue rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                  Beyond robotics competitions, we're committed to making a difference in our community.
                  Through outreach programs, workshops, and mentoring initiatives, we inspire young minds
                  to explore STEM fields and pursue their passions in science and technology.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-team-gold mb-2">300+</div>
                    <div className="text-white">Students Reached</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-team-gold mb-2">32+</div>
                    <div className="text-white">Community Events and Projects</div>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img
                  src="/img/team-image.jpg"
                  alt="Team Impact"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;