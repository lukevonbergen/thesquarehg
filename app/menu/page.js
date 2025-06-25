import MenuDisplay from '@/components/servicelist/List_1';
import Location from '@/components/findus/FindUs_1';
import { siteConfig } from '@/config/siteConfig';

export const metadata = siteConfig.metadata.menu;

export default function MenuPage() {
  const { heading, subheading } = siteConfig.menu.intro;

  return (
    <main>
      <section className="py-24 px-6 md:px-12 text-center bg-[#f3e9dc] border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#5E3023]">
            {heading}
          </h1>
          <p className="text-lg text-[#362415] mb-10">
            {subheading}
          </p>
        </div>
      </section>

      <MenuDisplay />
      <Location />
    </main>
  );
}
