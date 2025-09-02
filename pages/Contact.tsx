
import React from 'react';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({ icon, title, content }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-primary text-white rounded-full">
            {icon}
        </div>
        <div className="ml-4">
            <h3 className="text-lg font-semibold text-secondary">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </div>
    </div>
);

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you shortly.");
        // Here you would typically handle form submission, e.g., send data to a server
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-light-gray py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">Get In Touch</h1>
                    <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Have questions? We'd love to hear from you. Reach out and we'll get back to you shortly.</p>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-light-gray p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-dark transition-colors duration-300">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                             <ContactInfoItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                                title="Our Address"
                                content="123 Vroom Street, Bike City, 10101"
                            />
                            <ContactInfoItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                                title="Email Us"
                                content="contact@vroomrentals.com"
                            />
                            <ContactInfoItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                                title="Call Us"
                                content="(123) 456-7890"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
