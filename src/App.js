import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HeroSection = lazy(() => import('./components/HeroSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const EducationSection = lazy(() => import('./components/EducationSection'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const AchievementsSection = lazy(() => import('./components/AchievementsSection'));
const CertificationsSection = lazy(() => import('./components/CertificationsSection'));
const ProfilesSection = lazy(() => import('./components/ProfilesSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navigation />
      
      <main className="flex-1">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <CertificationsSection />
          <ProfilesSection />
          <ContactSection />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;