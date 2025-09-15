// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

// interface ContactSectionProps {
//   className?: string;
// }

// const ContactSection = ({ className }: ContactSectionProps) => {
//   const contactInfo = [
//     // {
//     //   type: "Phone",
//     //   value: "+91 8519995263",
//     //   icon: "📱",
//     //   link: "tel:+918519995263"
//     // },
//     {
//       type: "Email",
//       value: "sriramadithya9618@gmail.com",
//       icon: "✉️",
//       link: "mailto:sriramadithya9618@gmail.com"
//     },
//     {
//       type: "Location",
//       value: "Hyderabad, India",
//       icon: "📍",
//       link: "#"
//     }
//   ];

//   return (
//     <section id="contact" className={cn("py-20 bg-background", className)}>
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Ready to collaborate on exciting projects or discuss opportunities in tech and innovation
//           </p>
//         </div>
        
//         <div className="max-w-4xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//             {contactInfo.map((contact, index) => (
//               <Card key={index} className="card-gradient shadow-medium transition-smooth hover:shadow-large hover:scale-105 group">
//                 <CardContent className="p-6 text-center">
//                   <div className="text-4xl mb-4">{contact.icon}</div>
//                   <h3 className="text-lg font-bold text-foreground mb-2">
//                     {contact.type}
//                   </h3>
//                   <p className="text-muted-foreground mb-4">
//                     {contact.value}
//                   </p>
//                   {contact.link !== "#" && (
//                     <Button
//                       size="sm"
//                       variant="outline"
//                       className="transition-smooth group-hover:border-primary group-hover:text-primary"
//                       onClick={() => window.open(contact.link, '_blank')}
//                     >
//                       Connect
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
          
//           <Card className="hero-gradient shadow-large">
//             <CardContent className="p-8 text-center text-white">
//               <h3 className="text-2xl font-bold mb-4">
//                 Let's Build Something Amazing Together
//               </h3>
//               <p className="text-white/90 mb-6 max-w-2xl mx-auto">
//                 Whether you're looking for a passionate developer for your team, have a project idea, 
//                 or want to discuss the latest in web development and AI, I'd love to hear from you.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button 
//                   size="lg"
//                   className="bg-white text-primary hover:bg-white/90 transition-smooth"
//                   onClick={() => window.open('mailto:sriramadithya9618@gmail.com', '_blank')}
//                 >
//                   Send Email
//                 </Button>
//                 <Button 
//                   size="lg"
//                   variant="outline"
//                   className="border-white text-white hover:bg-white hover:text-primary transition-smooth"
//                   onClick={() => window.open('tel:+918519995263', '_blank')}
//                 >
//                   Call Now
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;









import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className }: ContactSectionProps) => {
  const contactInfo = [
    {
      type: "Email",
      value: "sriramadithya9618@gmail.com",
      icon: "✉️"
    },
    {
      type: "Location",
      value: "Hyderabad, India",
      icon: "📍"
    }
  ];

  return (
    <section id="contact" className={cn("py-20 bg-background", className)}>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in tech and innovation
          </p>
        </div>

        {/* Contact Boxes (Centered) */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="card-gradient shadow-medium transition-smooth hover:shadow-large hover:scale-105 group w-72"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{contact.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {contact.type}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {contact.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Call-to-Action Card */}
        <Card className="hero-gradient shadow-large max-w-3xl mx-auto">
          <CardContent className="p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you're looking for a passionate developer for your team, have a project idea, 
              or want to discuss the latest in web development and AI, I'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button
                className="bg-white text-primary px-6 py-3 text-lg font-semibold rounded-lg hover:bg-white/90 transition-smooth"
                onClick={() => window.open("mailto:sriramadithya9618@gmail.com", "_blank")}
              >
                Send Email
              </button>
              <button
                className="border-white text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-white hover:text-primary transition-smooth"
                onClick={() => window.open("tel:+918519995263", "_blank")}
              >
                Call Now
              </button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
