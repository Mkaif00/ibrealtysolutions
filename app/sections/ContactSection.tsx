import ContactForm from '../components/ContactForm'
import { MapPin, Phone, Mail } from 'lucide-react'

const ContactItem = ({ Icon, title, content }: { Icon: any, title: string, content: string | JSX.Element }) => (
    <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 flex items-center justify-center bg-card-bg rounded-full text-gold text-xl shadow-lg flex-shrink-0">
            <Icon size={20} />
        </div>
        <div>
            <h4 className="text-xl font-semibold text-text-light mb-1">{title}</h4>
            <p className="text-text-gray">{content}</p>
        </div>
    </div>
)

export default function ContactSection() {
    return (
        <section id="contact" className="bg-dark-bg py-20 relative overflow-hidden">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                <div className="contact-info">
                    <h3 className="text-4xl font-heading mb-8 relative pb-4">
                        Get In Touch
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-gold"></span>
                    </h3>
                    <p className="text-lg text-text-gray mb-10">
                        Ready to secure your ideal plot? Contact us today for a personalized consultation with one of our land and plot specialists.
                    </p>
                    
                    <div className="contact-details">
                        <ContactItem 
                            Icon={MapPin}
                            title="Address"
                            content={
                                <>
                                    Shop No-3 Basement Abul Fazal Enclave Part-2,<br/>Jamia nagar, Okhla, New Delhi -110025
                                </>
                            }
                        />
                        <ContactItem 
                            Icon={Phone}
                            title="Phone"
                            content="(+91) 98765 43210"
                        />
                        <ContactItem 
                            Icon={Mail}
                            title="Email"
                            content="ibrealtysolution@gmail.com"
                        />
                    </div>
                </div>
                
                <div className="bg-card-bg rounded-2xl p-10 shadow-2xl">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}