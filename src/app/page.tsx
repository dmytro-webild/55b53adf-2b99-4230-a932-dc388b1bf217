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
          name: "Erfaring",          id: "about"},
        {
          name: "Præcision",          id: "features"},
        {
          name: "Anbefalinger",          id: "testimonials"},
        {
          name: "Besøg os",          id: "contact"},
      ]}
      brandName="City Salon"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars"}}
      title="Præcisionsklipning. Rigtige mennesker. Ingen tidsbestilling."
      description="Du er ikke bare en kunde – du bliver husket. Kom ind, når det passer dig, og få den samme perfekte klipning, som får vores kunder til at vende tilbage år efter år."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/business-man-phone-park_23-2148018595.jpg",          alt: "Kunde"},
        {
          src: "http://img.b2bpic.net/free-photo/lady-summer-cafe-woman-sitting-table-famale-with-cute-dog_1157-41816.jpg",          alt: "Kunde"},
        {
          src: "http://img.b2bpic.net/free-photo/closeup-portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9654.jpg",          alt: "Kunde"},
        {
          src: "http://img.b2bpic.net/free-photo/pleased-slavic-middle-aged-male-barber-uniform-holding-barber-tools-isolated-purple-wall_141793-91610.jpg",          alt: "Kunde"},
        {
          src: "http://img.b2bpic.net/free-photo/this-is-so-cute-portrait-attractive-unshaven-young-male-with-muscular-tattoo-body-crossing-arms-his-chest-smiling-being-touched-by-something-expressing-distrust-suspicion-doubt_343059-1710.jpg",          alt: "Kunde"},
      ]}
      avatarText="Betroet af vores loyale stamkunder i over 6 år"
      buttons={[
        {
          text: "Kom forbi i dag",          href: "#contact"},
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text-icon",          text: "Walk-ins velkomne",          icon: Clock,
        },
        {
          type: "text-icon",          text: "Præcisions-fades",          icon: Scissors,
        },
        {
          type: "text-icon",          text: "Premium produkter",          icon: Droplet,
        },
        {
          type: "text-icon",          text: "Ekspert barberer",          icon: UserCheck,
        },
        {
          type: "text-icon",          text: "Moderne studie",          icon: Star,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="En tradition for håndværk og fællesskab"
      description="Hos City Salon tror vi på, at en god klipning handler om mere end bare frisuren – det handler om tillid. Vi har opbygget et ry for konsekvent kvalitet, der bringer vores kunder tilbage igen og igen. Når du træder ind ad døren, bliver du mødt af kendte ansigter og barberer, der virkelig lytter. Uanset om du er ny i kvarteret eller en af vores faste kunder, fortjener du en klipning, der afspejler din stil, og en oplevelse, der værdsætter din tid."
      imageSrc="http://img.b2bpic.net/free-photo/man-getting-his-beard-shaved-with-razor_107420-94799.jpg?_wi=1"
      imageAlt="Professionelt salonmiljø"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        {
          title: "Præcisionsarbejde",          description: "Ekspertteknikker der sikrer ensartede resultater af høj kvalitet ved hvert besøg.",          imageSrc: "http://img.b2bpic.net/free-photo/black-neodymium-magnet-phenomenon_23-2148253601.jpg",          imageAlt: "Præcisionsværktøj"},
        {
          title: "Imødekommende atmosfære",          description: "Et afslappet og professionelt miljø, hvor alle bliver behandlet som individer.",          imageSrc: "http://img.b2bpic.net/free-photo/mustache-guy-barbershop_140725-7723.jpg",          imageAlt: "Salonstation"},
        {
          title: "Personlig tilgang",          description: "Vi tager os tid til at lære din stil, dine præferencer og din hårtype at kende.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-man-getting-haircut_23-2148506326.jpg",          imageAlt: "Stylingsession"},
      ]}
      title="City Salon-forskellen"
      description="Premium kvalitet uden omsvøb. Hver klipning er en kunstart."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="City Salon er det eneste sted, jeg stoler på. Jeg er kommet her i 5 år, og jeg bliver altid genkendt. Det er den perfekte blanding af professionalisme og personlig kontakt."
      rating={5}
      author="Mark R."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/business-man-phone-park_23-2148018595.jpg",          alt: "Kunde 1"},
        {
          src: "http://img.b2bpic.net/free-photo/lady-summer-cafe-woman-sitting-table-famale-with-cute-dog_1157-41816.jpg",          alt: "Kunde 2"},
        {
          src: "http://img.b2bpic.net/free-photo/closeup-portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9654.jpg",          alt: "Kunde 3"},
        {
          src: "http://img.b2bpic.net/free-photo/pleased-slavic-middle-aged-male-barber-uniform-holding-barber-tools-isolated-purple-wall_141793-91610.jpg",          alt: "Kunde 4"},
        {
          src: "http://img.b2bpic.net/free-photo/this-is-so-cute-portrait-attractive-unshaven-young-male-with-muscular-tattoo-body-crossing-arms-his-chest-smiling-being-touched-by-something-expressing-distrust-suspicion-doubt_343059-1710.jpg",          alt: "Kunde 5"},
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
          id: "1",          title: "Skal jeg bestille tid?",          content: "Nej, vi er en salon for walk-ins. Vi tror på lige adgang og spontan, god service."},
        {
          id: "2",          title: "Hvor lang er ventetiden?",          content: "Ventetiden varierer alt efter travlhed, men vi sætter en ære i effektivitet. De fleste af vores kunder synes, det går meget hurtigt."},
        {
          id: "3",          title: "Klipper I alle hårtyper?",          content: "Ja, vores dygtige barberer er trænet i præcisionsarbejde til alle hårtyper."},
        {
          id: "4",          title: "Hvor ligger I?",          content: "Vi er centralt placeret i hjertet af byen, med let adgang via offentlig transport."},
      ]}
      title="Svar på spørgsmål"
      description="Almindelige spørgsmål om vores walk-in service og værdier."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/man-getting-his-beard-shaved-with-razor_107420-94799.jpg?_wi=2"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Besøg os"
      title="Kom forbi når du er klar"
      description="Ingen tidsbestilling nødvendig. Bare mød op, så gør vi dig klar til at se bedst ud."
      imageSrc="http://img.b2bpic.net/free-photo/happy-businesswoman-with-mobile-phone-entrance-hall_23-2147605019.jpg"
      imageAlt="Salonindgang"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="CITY SALON"
      copyrightText="© 2025 City Salon | Alle rettigheder forbeholdes"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
