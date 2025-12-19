import { HeroSection } from './components/HeroSection';
import { TwoStageSection } from './components/TwoStageSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { CNNSection } from './components/CNNSection';
import { APISection } from './components/APISection';
import { PreviewSection } from './components/PreviewSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TwoStageSection />
      <ArchitectureSection />
      <CNNSection />
      <APISection />
      <PreviewSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
