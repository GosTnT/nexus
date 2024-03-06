import { Button, Grid, Heading, Text, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MyCarousel } from './Carousel';
import { HeroSection } from './HeroSection';
import { NavigationMenuDemo } from './NavigationMenuDemo';
import './output.css';


const app = document.getElementById('root') as HTMLElement;
const root = createRoot(app);
function Sidebar() {
  // Define an array of sidebar items
  const sidebarItems = [
    { title: 'Sidebar 1', subtitle: 'Mini subtitle 1' },
    { title: 'Sidebar 2', subtitle: 'Mini subtitle 2' },
    { title: 'Content', subtitle: 'Mini subtitle 3' },
    { title: 'Content', subtitle: 'Mini subtitle 4' },
  ];

  return (
    <div className="flex flex-row">
      <div className="w-44">
        {/* Iterate over the sidebar items array and render each item */}
        {sidebarItems.map((item, index) => (
          <div key={index} className={`bg-gray-200 p-4 ${index === 0 ? 'rounded-tr-2xl' : ''}`}>
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="text-xs">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
root.render(
  <StrictMode>
    <Theme appearance='dark' className='bg-background'>
      <NavigationMenuDemo />
      <HeroSection />
      <MyCarousel />
      <div className='flex justify-center border border-red-800'>

        <div className="border border-white w-9/12 color-semi_black p-6">
          <div className="w-full text-center p-2 mb-3">
            <Heading mb='3' size="8" weight='medium' className=""> Adaptado exclusivamente para você</Heading>
            <Text className="text-subtext" size="3">
              Reconhecemos a singularidade de cada cliente<br />por isso oferecemos um serviço premium.
            </Text>

          </div>

          <div className="flex flex-row w-full border border-white h-fit">
            <Sidebar />
            <div className="w-full border border-green h-100 bg-red-300"></div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center h-full w-full border border-yellow-700 items-end"> */}
        {/*   Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</div> */}

        {/* <div className="flex justify-center border border-red-600 "> */}
        {/*   <h1 className="color-red-300 border border-green-700">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</h1></div> */}
        {/* <div className="bg-red w-fit p-8"> */}
        {/*   Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. */}
        {/* </div> */}
      </div>

    </Theme >
  </StrictMode >
);
