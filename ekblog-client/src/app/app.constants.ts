export const EK_SOCIALS: {link: string; icon: string; name: string}[] = [
  {link: 'https://facebook.com/elroykanye', icon: 'bi bi-facebook', name: 'Facebook'},
  {link: 'https://instagram.com/elroykanye2.0', icon: 'bi bi-instagram', name: 'Instagram'},
  {link: 'https://github.com/elroykanye', icon: 'bi bi-github', name: 'GitHub'},
  {link: 'https://linkedin.com/elroykanye', icon: 'bi bi-linkedin', name: 'LinkedIn'},
  {link: 'https://twitter.com/elroykanye', icon: 'bi bi-twitter', name: 'Twitter'},
];

export const EK_SERVICES: {name: string; desc: string; icon: string}[] = [
  {
    name: 'UI/UX Design',
    desc: 'I design and develop user-friendly and intuitive interfaces for web and mobile applications.',
    icon: 'bi bi-pencil-fill',
  },
  {
    name: 'Enterprise Development',
    desc: 'I develop enterprise applications using Java and TypeScript frameworks and libraries.',
    icon: 'bi bi-server',
  },
  {
    name: 'Mobile Development',
    desc: 'I develop mobile applications using Xamarin.Forms and Flutter.',
    icon: 'bi bi-phone-fill',
  },
  {
    name: 'Data Science',
    desc: 'I use Python, and OpenRefine to wrangle and reconcile data.',
    icon: 'bi bi-bar-chart-fill',
  }
];

export const EK_CONTACT: {address: {street: string; location: string}, phone: string; email: string} = {
  address: {
    street: 'Caps Street, Bambili',
    location: 'North West, Cameroon',
  },
  phone: '+237 672 270 627',
  email: 'elroykdev@gmail.com',
}

export const EK_INFO: {image: string; heading: string; extra: string} = {
  image: "assets/img/me.jpg",
  heading: "I am a ",
  extra: ""
}
