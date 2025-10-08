import ContactForm from '../ContactForm';

export default function ContactFormExample() {
  return (
    <div className="max-w-md p-6">
      <ContactForm
        onSubmit={(data) => console.log('Form submitted:', data)}
      />
    </div>
  );
}
