import { HeroSection } from './HeroSection';
import { Nexus } from './Nexus';
import { NavigationMenuDemo } from './NavigationMenuDemo'
import './output.css'
import { createRoot } from 'react-dom/client';
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
          <div key={index} className="bg-gray-200 p-4 mb-4">
            <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
            <p className="text-xs">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
root.render(
  <div>
    <NavigationMenuDemo />
    <HeroSection />
    <Nexus />
    <div className=''>

      <div className=" flex justify-center items-center border border-white width_2 color-semi_black p-6">

        <Sidebar />
        <div className="flex justify-center items-center h-full w-full border border-yellow-700 items-end">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</div>

        <div className="flex justify-center border border-red-600 ">
          <h1 className="color-red-300 border border-green-700">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</h1></div>
        <div className="bg-red w-fit p-8">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </div>
      </div>
    </div>
  </div>
);
