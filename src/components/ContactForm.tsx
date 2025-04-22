import { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setStatus('success');
            form.current?.reset();
            setTimeout(() => setStatus('idle'), 3000);
          },
          () => {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
          }
        );
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors ${
              status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <p className="text-green-600 dark:text-green-400 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 dark:text-red-400 text-center">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;