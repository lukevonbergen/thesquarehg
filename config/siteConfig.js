// config/siteConfig.js
export const siteConfig = {
  siteName: 'The Square',
  logo: {
    src: '/logo/thesquarehg_logo.png',
    alt: 'The Square Logo',
    height: 40,
  },
  metadata: {
    base: {
      title: 'The Square – Your Local Café in Holmer Green',
      description:
        'The Square is a family-run café in Holmer Green offering freshly cooked breakfast, lunch, cakes, pastries and more.',
      icons: { icon: '/favicon.ico' },
    },
    about: {
      title: 'About | The Square Holmer Green',
      description:
        'Discover The Square – your cozy village café serving homemade breakfast & lunch, Sunday brunch and Friday/Saturday evenings.',
    },
    contact: {
      title: 'Contact Us | The Square Holmer Green',
      description:
        'Get in touch or pop by at 45 Pond Approach, Holmer Green for coffee, food or table bookings (min 8 people in-shop).',
    },
    gallery: {
      title: 'Gallery | The Square Holmer Green',
      description:
        'Sneak a peek inside The Square—cozy seating, fresh food, pastries and community moments.',
    },
  },

  fonts: {
    base: `'Lato', sans-serif`,
    heading: `'Playfair Display', serif`,
    baseClass: 'font-lato',
    headingClass: 'font-playfair',
    google: { base: 'Lato', heading: 'Playfair Display', accent: 'Lato' },
  },

  brand: {
    primary: '[#8B5E3C]',
    secondary: 'bg-[#D9C1A0]', // cream
    accent: 'bg-[#A3722F]',    // golden brown
    textDark: 'text-[#3B2F2F]',
    textLight: 'text-[#F9F4EF]',
    muted: 'text-gray-600',
  },

  styles: {
    bgLight: 'bg-[#F9F4EF]',
    bgPrimary: 'bg-[#D9C1A0]',
    highlightColour: 'text-[#A3722F]',
    textPrimary: 'text-[#3B2F2F]',
    textMuted: 'text-gray-600',
    textSubtle: 'text-[#6B5B5B]',
    borderLight: 'border-gray-200',
    borderDark: 'border-gray-400',
  },

  banner: {
    show: true,
    message: 'Open Tue–Sun for breakfast, lunch & coffee!',
    cta: { label: 'View Menu', href: '/menus' },
  },

  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Menus', href: '/menus' },
      { label: 'More', href: '/more' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  footer: {
    copyright: 'The Square',
    nav: [
      { label: 'Menus', href: '/menus' },
      { label: 'More', href: '/more' },
      { label: 'Contact', href: '/contact' },
    ],
    social: {
      instagram: 'https://www.instagram.com/thesquare_holmergreen/',  // :contentReference[oaicite:3]{index=3}
      facebook: 'https://www.facebook.com/thesquareholmergreen/',
      linkedin: '',
      twitter: '',
      tiktok: '',
      youtube: '',
      tripadvisor: 'https://www.tripadvisor.co.uk/Restaurant_Review-g12959523-d13428330-The_Square.html', // :contentReference[oaicite:4]{index=4}
    },
  },

  hoursLocation: {
    address: '45 Pond Approach, Holmer Green, High Wycombe HP15 6RH, UK',
    email: 'info@thesquarebucks.com',
  },

  hero: {
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/90/0f/60/photo0jpg.jpg?w=1400&h=-1&s=1',
    imageAlt: 'Coffee shop interior at The Square',
    heading: 'YOUR LOCAL',
    highlightWord: 'CAFÉ',
    blurb:
      'Serving freshly cooked breakfast, lunch, cakes & pastries—all in a cozy Holmer Green setting.', // :contentReference[oaicite:5]{index=5}
    hours: {
      weekdays: { label: 'TUE–THU', time: '08:30–15:00' },
      saturday: { label: 'FRI–SAT', time: '08:30–15:00 & 18:00–22:00' },
      sunday: { label: 'SUN', time: '10:00–14:00' },
    },
  },

  about: {
    heading: 'Family-Run Café in Holmer Green',
    subheading:
      'The Square is all about great food & great company. From homemade brunches to evening gatherings—freshly made on site.', // :contentReference[oaicite:6]{index=6}
    features: [
      { title: 'Breakfast & Lunch', text: 'Full menu of homemade dishes, cooked fresh to order.' },
      { title: 'Cakes & Pastries', text: 'Delicious selection baked in-house daily.' },
      { title: 'Evening Dining', text: 'Fridays & Saturdays 6pm–10pm for food & drinks.' },
    ],
  },

  location: {
    heading: 'Find Us in Holmer Green',
    text: 'Located at 45 Pond Approach—pop in for breakfast, lunch or evening meals.', // :contentReference[oaicite:7]{index=7}
    address: ['The Square', '45 Pond Approach, Holmer Green HP15 6RH, UK'],
    openingHours: ['Tue–Thu: 08:30–15:00', 'Fri–Sat: 08:30–15:00 & 18:00–22:00', 'Sun: 10:00–14:00', 'Mon: Closed'],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.740125104473!2d-0.6973943228512547!3d51.664594271849566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766094092f17e9%3A0xc289ebc3fd48445a!2sThe%20Square!5e0!3m2!1sen!2suk!4v1750855972573!5m2!1sen!2suk', // (replace with full embed)
  },

  gallery: {
    hero: {
      heading: 'Our Gallery',
      blurb: 'Sneak a peek inside The Square—cozy vibes, fresh food & community.',
    },
    images: [
      { src: 'https://www.thesquarebucks.com/BP8A2551.jpg', alt: 'Coffee shop interior' },
      { src: 'https://www.thesquarebucks.com/IMG_3654.jpg', alt: 'Assorted pastries' },
      { src: 'https://www.thesquarebucks.com/Shop Shelves.jpg', alt: 'Shop shelves with local products' },
      { src: 'https://www.thesquarebucks.com/Sofas.jpeg', alt: 'Cozy seating area' },
    ],
  },

  testimonials: {
    heading: 'Loved by Our Community',
    subheading: 'Real reviews from our happy guests.',
    entries: [
      {
        quote: 'Fantastic coffee and friendly service every time!',
        name: 'John D.',
        title: 'TripAdvisor',
      },
      {
        quote: 'Lovely spot for brunch—food was delicious and staff so welcoming.',
        name: 'Emily W.',
        title: 'Google Reviews',
      },
      {
        quote: 'Great evening menu and cozy atmosphere on Fridays & Saturdays.',
        name: 'Mark S.',
        title: 'Facebook Review',
      },
    ],
  },

  intro: {
    title: 'Your Village Café, Elevated',
    description:
      'From handcrafted coffee to homemade pastries and evening dining, The Square brings people together over great food & drink.',
    features: [
      { title: 'Freshly Cooked', text: 'Breakfast & lunch made to order daily.' },
      { title: 'Warm Atmosphere', text: 'Cozy seating, friendly staff, community vibe.' },
      { title: 'Versatile Dining', text: 'Sunday brunch & evening menu Fridays & Saturdays.' },
    ],
  },

  menuHighlights: {
    title: 'What We’re Known For',
    items: [
      {
        label: 'Avocado Toast',
        image: 'https://www.thesquarebucks.com/IMG_3654.jpg',
      },
      {
        label: 'Full English',
        image: 'https://www.thesquarebucks.com/BP8A2551.jpg',
      },
      {
        label: 'Artisan Pastries',
        image: 'https://www.thesquarebucks.com/Shop Shelves.jpg',
      },
      {
        label: 'Sunday Brunch',
        image: 'https://www.thesquarebucks.com/Sofas.jpeg',
      },
    ],
    cta: { label: 'View Menu', href: '/menus' },
  },

  contact: {
    intro: {
      heading: 'Get in Touch',
      blurb:
        'Questions or group bookings? Send us a message or call—walk-ins always welcome!',
      backgroundImage: {
        src: 'https://www.thesquarebucks.com/Shop View.jpg',
        alt: 'Exterior view of The Square',
      },
    },
    details: {
      description:
        'Table bookings for 8+ can be made in-shop—feel free to pop in!', // :contentReference[oaicite:8]{index=8}
      address: '45 Pond Approach, Holmer Green HP15 6RH',
      phone: '+441494716596',
      phoneDisplay: '01494 716596',
      email: 'info@thesquarebucks.com',
      image: {
        src: 'https://www.thesquarebucks.com/IMG_3654.jpg',
        alt: 'Pastries display',
      },
      hours: {
        monThu: 'Tue–Thu: 08:30–15:00',
        friSat: 'Fri–Sat: 08:30–15:00 & 18:00–22:00',
        sun: 'Sun: 10:00–14:00',
        mon: 'Mon: Closed',
      },
    },
    formspreeId: 'YOUR_FORMSPREE_ID',
    form: {
      heading: 'Send Us a Message',
      fields: {
        name: { label: 'Name', placeholder: 'Your name' },
        email: { label: 'Email', placeholder: 'you@example.com' },
        message: { label: 'Message', placeholder: 'Your message here' },
      },
      button: 'Send Message',
    },
    layout: {
      backgroundColor: '#F9F4EF',
      cardBackground: '#FFFFFF',
      border: 'border-gray-200',
      accent: '#A3722F',
      accentHover: '#8B5A1F',
    },
  },

  theme: {
    variable: '#000000', // fallback value
  },
};