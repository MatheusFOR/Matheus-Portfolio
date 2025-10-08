import Navigation from '../Navigation';

export default function NavigationExample() {
  const sections = [
    { label: 'Projetos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Contato', href: '#contact' },
  ];

  return <Navigation sections={sections} />;
}
