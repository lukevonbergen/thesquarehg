// config/siteConfig.js
export const siteConfig = {
  siteName: 'The Square',
  logo: {
    src: '/logo/thesquarehg_logo.png',
    alt: 'The Square Logo',
    height: 25,
  },
  metadata: {
    base: {
      title: 'The Square – Your Local Café in Holmer Green',
      description:
        'The Square is a family-run café in Holmer Green offering freshly cooked breakfast, lunch, cakes, pastries and more.',
      icons: { icon: '/favicon.ico' },
    },
    menu: {
      title: 'Menus | The Square Holmer Green',
      description: 'Explore our brunch, lunch and takeaway menus. Freshly made, locally loved.',
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
    cta: { label: 'View Menu', href: '/menu' },
  },

  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Menu', href: '/menu' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  footer: {
    copyright: 'The Square',
    nav: [
      { label: 'About', href: '/about' },
      { label: 'Menu', href: '/menu' },
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
        label: 'Full English',
        image: 'https://static.wixstatic.com/media/18ed9c_ba7e424343b441b391af155a2e160f1e~mv2.jpg/v1/fill/w_667,h_500,al_c,q_80,enc_avif,quality_auto/18ed9c_ba7e424343b441b391af155a2e160f1e~mv2.jpg',
      },
      {
        label: 'Brunch',
        image: 'https://static.wixstatic.com/media/f8c600_ff75acea6b0346db948bca37d6e8f890~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f8c600_ff75acea6b0346db948bca37d6e8f890~mv2.jpg',
      },
      {
        label: 'Evenings',
        image: 'https://static.wixstatic.com/media/18ed9c_05ab8ba71f75493680220678f0042386~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/18ed9c_05ab8ba71f75493680220678f0042386~mv2.jpg',
      },
      {
        label: 'Cosy Local',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/5b/f7/1e/the-square.jpg?w=800&h=-1&s=1',
      },
    ],
    cta: { label: 'View Menu', href: '/menu' },
  },

  contact: {
    intro: {
      heading: 'Get in Touch',
      blurb:
        'Questions or group bookings? Send us a message or call—walk-ins always welcome!',
      backgroundImage: {
        src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/fd/e5/6d/caption.jpg?w=1100&h=-1&s=1',
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
        src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/5b/f7/9e/the-square.jpg?w=800&h=-1&s=1',
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

  menu: {
  intro: {
    heading: 'Menus',
    subheading: 'Please see our Day Menu and Sunday Brunch Menu',
  },
  menus: [
    {
      title: 'Sunday Brunch Menu',
      sections: [
        {
          title: 'Cooked Breakfasts',
          items: [
            {
              name: 'The Square Big Breakfast',
              price: '£14.50',
              description:
                'Cumberland sausages, back bacon, black pudding, hash browns, mushrooms, tomato, baked beans and 2 eggs (served with toast & butter)',
            },
            {
              name: 'The Square Big Veggie Breakfast',
              price: '£13.50',
              description:
                '‘Symplicity’ sausages, halloumi, hash browns, mushrooms, spinach, tomato, baked beans and eggs (served with toast & butter)',
            },
            {
              name: 'Your Breakfast Your Way',
              price: '£11.50',
              description:
                'Choose 5 of the following: sausage, bacon, black pudding, hash brown (vg), mushrooms (vg), baked beans (vg), halloumi (v), spinach (v), tomato (vg) or egg (v) (served with toast & butter)',
            },
          ],
        },
        {
          title: 'Breakfast Sandwich & Bagels',
          items: [
            {
              name: 'Breakfast Sandwich',
              price: 'From £7.00',
              description:
                'Choose 1 (£7), 2 (£7.50), or 3 (£8.50) items: sausage, bacon, black pudding, hash brown, mushrooms, baked beans, halloumi, spinach, tomato, egg',
            },
            {
              name: 'Breakfast Bagels',
              price: 'From £8.00',
              description:
                'Various options incl. Sausage, Bacon, Cheese & Egg (£9), Smoked Salmon & Avocado (£11), and more',
            },
          ],
        },
        {
          title: 'On Sourdough',
          items: [
            { name: 'Chorizo Baked Beans & Red Leicester', price: '£8.50' },
            { name: 'Smoked Salmon & Scrambled Eggs', price: '£12.50' },
            { name: 'Smashed Avocado & Poached Eggs (vg)', price: '£9.00' },
            { name: 'Creamy Marmite Mushrooms (vg)', price: '£8.50' },
            { name: 'Just Eggs (v)', price: '£5.00' },
            {
              name: 'Heirloom Tomatoes, Plant N’Duja & Avocado',
              price: '£8.50',
            },
          ],
        },
        {
          title: 'Toast and Grains',
          items: [
            { name: 'Buttered Toast', price: '£2.00' },
            { name: 'Toasted Sourdough Crumpets', price: '£3.00' },
            {
              name: 'Porridge (vg, vga)',
              price: '£5.00',
              description: 'Choice of: berry compote, jam, honey or golden syrup',
            },
            {
              name: 'Granola with Yoghurt & Blueberries',
              price: '£5.00',
              description: 'Almond & raisin granola with honeyed yoghurt',
            },
            {
              name: 'Extras',
              price: '£0.75',
              description: 'Add jam, marmalade, Nutella or Marmite',
            },
          ],
        },
        {
          title: 'Eggs on Muffins',
          items: [
            { name: 'Eggs Benedict', price: '£11.00' },
            { name: 'Eggs Royale', price: '£12.50' },
            { name: 'Eggs Florentine', price: '£10.00' },
            { name: 'Eggs Boudin Noir', price: '£10.50' },
          ],
        },
      ],
    },
    {
      title: 'All Day Breakfast Menu',
      sections: [
        // Same as Sunday Brunch above, reuse if needed
      ],
    },
    {
      title: 'Lunch Menu',
      subtitle: 'From 12pm',
      sections: [
        {
          title: 'Classic Sandwiches',
          items: [
            { name: 'BLT', price: '£7.00' },
            { name: 'Egg Mayo (v)', price: '£6.00' },
            { name: 'Ham & Coleslaw', price: '£7.00' },
            { name: 'Tuna Mayo', price: '£6.50' },
            { name: 'Ham & Piccalilli', price: '£7.00' },
          ],
        },
        {
          title: 'Premium Sandwiches',
          items: [
            {
              name: 'Tuna Mayo, Avocado, Sriracha & Red Onion',
              price: '£8.00',
            },
            {
              name: 'Smoked Salmon, Cucumber & Dill Cream Cheese',
              price: '£8.50',
            },
            {
              name: 'Chicken, Bacon, Avocado & Ranch',
              price: '£7.50',
            },
            {
              name: 'Smoked Coronation Tofu & Chickpeas (vg)',
              price: '£7.50',
            },
          ],
        },
        {
          title: 'Sourdough Toasties',
          items: [
            { name: 'Classic Cheese', price: '£6.00' },
            { name: 'Ham & Mature Cheddar', price: '£7.00' },
            { name: 'Bacon, Brie & Cranberry', price: '£7.50' },
            { name: 'Tuna Melt', price: '£7.00' },
          ],
        },
        {
          title: 'Snacks and Light Bites',
          items: [
            {
              name: 'Soup of the Day',
              price: '£7.00',
              description: 'Served with chunky bread (v)',
            },
            { name: 'Chips', price: '£4.00' },
          ],
        },
      ],
    },
    {
      title: 'Takeaway Menu',
      sections: [
        // Same as Lunch Menu
      ],
    },
    {
      title: 'Pancake Stacks',
      sections: [
        {
          title: 'Sweet Pancakes',
          items: [
            { name: 'Just Syrup', price: '£6.75' },
            {
              name: 'Streaky Bacon, Maple Syrup & Butter',
              price: '£7.50',
            },
            {
              name: 'Blueberries, Honeyed Yoghurt & Granola',
              price: '£8.00',
            },
          ],
        },
      ],
    },
  ],
},
menu: {
  intro: {
    heading: 'Menus',
    subheading: 'Please see our Day Menu and Sunday Brunch Menu',
  },
  menus: [
    {
      title: 'Sunday Brunch Menu',
      sections: [
        {
          title: 'Cooked Breakfasts',
          items: [
            {
              name: 'The Square Big Breakfast',
              price: '£14.50',
              description:
                'Cumberland sausages, back bacon, black pudding, hash browns, mushrooms, tomato, baked beans and 2 eggs (served with toast & butter)',
            },
            {
              name: 'The Square Big Veggie Breakfast',
              price: '£13.50',
              description:
                '‘Symplicity’ sausages, halloumi, hash browns, mushrooms, spinach, tomato, baked beans and eggs (served with toast & butter)',
            },
            {
              name: 'Your Breakfast Your Way',
              price: '£11.50',
              description:
                'Choose 5 of the following: sausage, bacon, black pudding, hash brown (vg), mushrooms (vg), baked beans (vg), halloumi (v), spinach (v), tomato (vg) or egg (v) (served with toast & butter)',
            },
          ],
        },
        {
          title: 'Breakfast Sandwich & Bagels',
          items: [
            {
              name: 'Breakfast Sandwich',
              price: 'From £7.00',
              description:
                'Choose 1 (£7), 2 (£7.50), or 3 (£8.50) items: sausage, bacon, black pudding, hash brown, mushrooms, baked beans, halloumi, spinach, tomato, egg',
            },
            {
              name: 'Breakfast Bagels',
              price: 'From £8.00',
              description:
                'Sausage, Bacon, Cheese & Fried Egg (£9.00), Smoked Salmon & Smashed Avocado (£11.00), Streaky Bacon, Cheese, Hollandaise & Fried Egg (£8.50), Flat Mushrooms, Cheese, Hollandaise & Fried Egg (£8.00)',
            },
          ],
        },
        {
          title: 'On Sourdough',
          items: [
            { name: 'Chorizo Baked Beans & Red Leicester', price: '£8.50' },
            { name: 'Smoked Salmon & Scrambled Eggs', price: '£12.50' },
            { name: 'Smashed Avocado & Poached Eggs (vg)', price: '£9.00' },
            { name: 'Creamy Marmite Mushrooms (vg)', price: '£8.50' },
            { name: 'Just Eggs (v)', price: '£5.00' },
            {
              name: 'Heirloom Tomatoes, Plant N’Duja & Avocado',
              price: '£8.50',
            },
          ],
        },
        {
          title: 'Toast and Grains',
          items: [
            { name: 'Buttered Toast', price: '£2.00' },
            { name: 'Toasted Sourdough Crumpets', price: '£3.00' },
            {
              name: 'Porridge (vg, vga)',
              price: '£5.00',
              description:
                'Choice of: berry compote, jam, honey or golden syrup',
            },
            {
              name: 'Granola with Yoghurt & Blueberries',
              price: '£5.00',
              description: 'Almond & raisin granola with honeyed yoghurt',
            },
            {
              name: 'Extras',
              price: '£0.75',
              description: 'Add jam, marmalade, Nutella or Marmite',
            },
          ],
        },
        {
          title: 'Eggs on Muffins',
          items: [
            { name: 'Eggs Benedict', price: '£11.00' },
            { name: 'Eggs Royale', price: '£12.50' },
            { name: 'Eggs Florentine', price: '£10.00' },
            { name: 'Eggs Boudin Noir', price: '£10.50' },
          ],
        },
      ],
    },
    {
      title: 'All Day Breakfast Menu',
      sections: [], // Will be filled with Sunday Brunch structure below
    },
    {
      title: 'Lunch Menu',
      subtitle: 'From 12pm',
      sections: [
        {
          title: 'Classic Sandwiches',
          items: [
            { name: 'BLT', price: '£7.00' },
            { name: 'Egg Mayo (v)', price: '£6.00' },
            { name: 'Ham & Coleslaw', price: '£7.00' },
            { name: 'Tuna Mayo', price: '£6.50' },
            { name: 'Ham & Piccalilli', price: '£7.00' },
          ],
        },
        {
          title: 'Premium Sandwiches',
          items: [
            {
              name: 'Tuna Mayo, Avocado, Sriracha & Red Onion',
              price: '£8.00',
            },
            {
              name: 'Smoked Salmon, Cucumber & Dill Cream Cheese',
              price: '£8.50',
            },
            {
              name: 'Chicken, Bacon, Avocado & Ranch',
              price: '£7.50',
            },
            {
              name: 'Smoked Coronation Tofu & Chickpeas (vg)',
              price: '£7.50',
            },
          ],
        },
        {
          title: 'Sourdough Toasties',
          items: [
            { name: 'Classic Cheese', price: '£6.00' },
            { name: 'Ham & Mature Cheddar', price: '£7.00' },
            { name: 'Streaky Bacon, Brie & Cranberry', price: '£7.50' },
            { name: 'Tuna Melt', price: '£7.00' },
          ],
        },
        {
          title: 'Snacks and Light Bites',
          items: [
            {
              name: 'Soup of the Day',
              price: '£7.00',
              description: 'Served with chunky bread (v)',
            },
            { name: 'Chips', price: '£4.00' },
          ],
        },
      ],
    },
    {
      title: 'Takeaway Menu',
      sections: [], // Will be filled with Lunch structure below
    },
    {
      title: 'Pancake Stacks',
      sections: [
        {
          title: 'Sweet Pancakes',
          items: [
            { name: 'Just Syrup', price: '£6.75' },
            {
              name: 'Streaky Bacon, Maple Syrup & Butter',
              price: '£7.50',
            },
            {
              name: 'Blueberries, Honeyed Yoghurt & Granola',
              price: '£8.00',
            },
          ],
        },
      ],
    },
  ],
},
};