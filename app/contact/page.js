import Image from 'next/image';
import FindUs from '@/components/findus/FindUs_1';
import { siteConfig } from '@/config/siteConfig';

export const metadata = siteConfig.metadata.contact;

export default function ContactPage() {
  const { contact } = siteConfig;
  const { intro, details, form, formspreeId, layout } = contact;

  return (
    <main>
      {/* Hero Section with Background */}
      <section
        className="relative py-24 px-6 md:px-12"
        style={{
          backgroundImage: `url(${intro.backgroundImage?.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: `${layout.backgroundColor}CC` }}></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5E3023] mb-6">
            {intro.heading}
          </h1>
          <p className="text-lg text-[#362415] max-w-2xl mx-auto">
            {intro.blurb}
          </p>
        </div>
      </section>

      {/* Contact Info + Image */}
      <section className={`py-16 px-6 md:px-12 bg-white border-y ${layout.border}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold text-[#5E3023] mb-6">Where to Find Us</h2>
            <p className="text-md text-[#362415] mb-4">{details.description}</p>
            <p className="text-md text-gray-700 mb-4">
              <strong>Address:</strong><br />
              {details.address}
            </p>
            <p className="text-md text-gray-700 mb-4">
              <strong>Phone:</strong><br />
              <a href={`tel:${details.phone}`} className="text-[#5E3023] hover:underline">
                {details.phoneDisplay}
              </a>
            </p>
            <p className="text-md text-gray-700">
              <strong>Email:</strong><br />
              <a href={`mailto:${details.email}`} className="text-[#5E3023] hover:underline">
                {details.email}
              </a>
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={details.image.src}
              alt={details.image.alt}
              fill
              sizes="(min-width: 768px) 100vw, 100vw"
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: layout.backgroundColor }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#5E3023] mb-8">
            {form.heading}
          </h2>
          <form
            action={`https://formspree.io/f/${formspreeId}`}
            method="POST"
            className="grid gap-6"
          >
            <div>
              <label className="block mb-2 text-[#362415] font-medium">
                {form.fields.name.label}
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder={form.fields.name.placeholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#362415] font-medium">
                {form.fields.email.label}
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder={form.fields.email.placeholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#362415] font-medium">
                {form.fields.message.label}
              </label>
              <textarea
                name="message"
                rows="6"
                required
                placeholder={form.fields.message.placeholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <button
              type="submit"
              className="text-white py-3 px-6 rounded-md transition duration-200 font-semibold hover:opacity-90"
              style={{ backgroundColor: layout.accent }}
            >
              {form.button}
            </button>
          </form>
        </div>
      </section>

      <FindUs />
    </main>
  );
}