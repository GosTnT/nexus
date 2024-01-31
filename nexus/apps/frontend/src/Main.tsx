import { HeroSection } from './HeroSection';
import { NavigationMenuDemo } from './NavigationMenuDemo'
import './output.css'
import { createRoot } from 'react-dom/client';
const app = document.getElementById('root') as HTMLElement;
const root = createRoot(app);

root.render(
  <div>
    <NavigationMenuDemo />
    <HeroSection />
  </div>
);
