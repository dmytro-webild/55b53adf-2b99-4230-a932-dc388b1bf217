"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Clock, Droplet, Scissors, Star, UserCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Experience",
          id: "about",
        },
        {
          name: "Precision",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Visit",
          id: "contact",
        },
      ]}
      brandName="City Salon"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Precision cuts. Real people. No booking needed."
      description="You're not just a customer—you're remembered. Walk in anytime and get the same perfect cut that keeps clients coming back for years."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/business-man-phone-park_23-2148018595.jpg",
          alt: "Client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/lady-summer-cafe-woman-sitting-table-famale-with-cute-dog_1157-41816.jpg",
          alt: "Client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9654.jpg",
          alt: "Client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pleased-slavic-middle-aged-male-barber-uniform-holding-barber-tools-isolated-purple-wall_141793-91610.jpg",
          alt: "Client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/this-is-so-cute-portrait-attractive-unshaven-young-male-with-muscular-tattoo-body-crossing-arms-his-chest-smiling-being-touched-by-something-expressing-distrust-suspicion-doubt_343059-1710.jpg",
          alt: "Client",
        },
      ]}
      avatarText="Trusted by our loyal regulars for over 6 years"
      buttons={[
        {
          text: "Drop In Today",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Walk-ins Welcome",
          icon: Clock,
        },
        {
          type: "text-icon",
          text: "Precision Fades",
          icon: Scissors,
        },
        {
          type: "text-icon",
          text: "Premium Products",
          icon: Droplet,
        },
        {
          type: "text-icon",
          text: "Expert Barbers",
          icon: UserCheck,
        },
        {
          type: "text-icon",
          text: "Modern Studio",
          icon: Star,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="A Tradition of Craft & Connection"
      description="At City Salon, we believe a great haircut is about more than just the trim—it’s about the trust. We’ve built a reputation for consistency that brings our clients back time and time again. When you walk through our doors, you’re greeted by familiar faces and barbers who truly listen. Whether you’re new to the neighborhood or a long-time regular, you deserve a haircut that reflects your style and an experience that values your time."
      imageSrc="http://img.b2bpic.net/free-photo/man-getting-his-beard-shaved-with-razor_107420-94799.jpg"
      imageAlt="Professional salon environment"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        {
          title: "Precision Work",
          description: "Expert techniques ensuring consistent, high-quality results every single visit.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-neodymium-magnet-phenomenon_23-2148253601.jpg",
          imageAlt: "Precision tools",
        },
        {
          title: "Welcoming Atmosphere",
          description: "Relaxed and professional environment where everyone is treated like an individual.",
          imageSrc: "http://img.b2bpic.net/free-photo/mustache-guy-barbershop_140725-7723.jpg",
          imageAlt: "Salon station",
        },
        {
          title: "Personalized Approach",
          description: "We take the time to learn your style, preferences, and hair type perfectly.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-man-getting-haircut_23-2148506326.jpg",
          imageAlt: "Styling session",
        },
      ]}
      title="The City Salon Difference"
      description="Premium quality without the pretense. Every cut is treated as an art form."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="City Salon is the only place I trust. I've been coming here for 5 years and I'm always remembered. It's the perfect mix of professionalism and personal connection."
      rating={5}
      author="Mark R."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/business-man-phone-park_23-2148018595.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/lady-summer-cafe-woman-sitting-table-famale-with-cute-dog_1157-41816.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9654.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pleased-slavic-middle-aged-male-barber-uniform-holding-barber-tools-isolated-purple-wall_141793-91610.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/this-is-so-cute-portrait-attractive-unshaven-young-male-with-muscular-tattoo-body-crossing-arms-his-chest-smiling-being-touched-by-something-expressing-distrust-suspicion-doubt_343059-1710.jpg",
          alt: "Client 5",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Do I need an appointment?",
          content: "No, we are proudly a walk-in only salon. We believe in providing equal access and spontaneous, quality service.",
        },
        {
          id: "2",
          title: "How long is the wait?",
          content: "Wait times vary by demand, but we pride ourselves on efficiency. Most of our regulars find it very quick.",
        },
        {
          id: "3",
          title: "Do you serve all hair types?",
          content: "Yes, our expert barbers are trained to deliver precision work for all hair textures.",
        },
        {
          id: "4",
          title: "Where are you located?",
          content: "We are centrally located in the heart of downtown, easily accessible by public transport.",
        },
      ]}
      title="Questions Answered"
      description="Common inquiries about our walk-in service and shop values."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/man-getting-his-beard-shaved-with-razor_107420-94799.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Stop In Whenever You’re Ready"
      description="No booking necessary. Just walk in and we’ll be ready to get you looking your best."
      imageSrc="http://img.b2bpic.net/free-photo/happy-businesswoman-with-mobile-phone-entrance-hall_23-2147605019.jpg"
      imageAlt="Salon entrance"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="CITY SALON"
      copyrightText="© 2025 City Salon | All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
