'use client';

import { siteConfig } from '@/config/siteConfig';

export default function MenuDisplay() {
  const { intro, menus } = siteConfig.menu;

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">{intro.heading}</h2>
          <p className="text-lg text-gray-600">{intro.subheading}</p>
        </div>

        <div className="space-y-32">
          {menus.map((menu) => (
            <div
              key={menu.title}
              className="grid md:grid-cols-4 gap-8 items-start relative"
            >
              {/* Sticky Left Title */}
              <div className="md:col-span-1 sticky top-24">
                <h3 className="text-2xl font-semibold text-gray-900">{menu.title}</h3>
                {menu.subtitle && (
                  <p className="text-sm text-gray-500 mt-1">{menu.subtitle}</p>
                )}
              </div>

              {/* Menu Content */}
              <div className="md:col-span-3 space-y-12">
                {menu.sections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex justify-between items-start text-gray-700"
                        >
                          <div className="pr-4 max-w-[70%]">{item.name}</div>
                          <div className="text-right font-medium whitespace-nowrap">{item.price}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}