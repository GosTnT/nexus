import { HeroSection } from './HeroSection';
import { NavigationMenuDemo } from './NavigationMenuDemo'
import './output.css'
import { createRoot } from 'react-dom/client';
import { Botaozin } from '@libs/components';
const app = document.getElementById('root')!;
const root = createRoot(app);

root.render(
  <div>
    <Botaozin />
    <NavigationMenuDemo />
    <HeroSection />
  </div>
);
