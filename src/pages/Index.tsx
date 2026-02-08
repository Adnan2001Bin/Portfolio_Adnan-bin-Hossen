import { useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import SocialBar from '@/components/SocialBar';
import Hero from '@/components/Hero';
import BottomDrawer from '@/components/BottomDrawer';
import AboutContent from '@/components/AboutContent';
import WorksContent from '@/components/WorksContent';
import ContactContent from '@/components/ContactContent';

type DrawerType = 'about' | 'works' | 'contact' | null;

const Index = () => {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);

  const openDrawer = (drawer: DrawerType) => setActiveDrawer(drawer);
  const closeDrawer = () => setActiveDrawer(null);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation
        onAboutClick={() => openDrawer('about')}
        onWorksClick={() => openDrawer('works')}
        onContactClick={() => openDrawer('contact')}
      />

      {/* Social Bar */}
      <SocialBar />

      {/* Hero Section */}
      <Hero onWorksClick={() => openDrawer('works')} />

      {/* Bottom Drawers */}
      <BottomDrawer
        isOpen={activeDrawer === 'about'}
        onClose={closeDrawer}
        title="About Me"
      >
        <AboutContent />
      </BottomDrawer>

      <BottomDrawer
        isOpen={activeDrawer === 'works'}
        onClose={closeDrawer}
        title="Selected Works"
      >
        <WorksContent />
      </BottomDrawer>

      <BottomDrawer
        isOpen={activeDrawer === 'contact'}
        onClose={closeDrawer}
        title="Let's Connect"
      >
        <ContactContent />
      </BottomDrawer>
    </div>
  );
};

export default Index;
