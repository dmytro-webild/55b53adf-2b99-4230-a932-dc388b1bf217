"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBase from '@/components/sections/footer/FooterBase';
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
      brandName="CITY SALON"
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
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1E0t8mxuGpZ0qBVz2J2MtoVjT/uploaded-1775575263554-kt3ffkmn.jpg",          alt: "Kunde"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1E0t8mxuGpZ0qBVz2J2MtoVjT/uploaded-1775576362014-fy3zcaoy.jpg",          alt: "Kunde"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1E0t8mxuGpZ0qBVz2J2MtoVjT/uploaded-1775576366454-tfr25swc.jpg",          alt: "Kunde"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1E0t8mxuGpZ0qBVz2J2MtoVjT/uploaded-1775576405427-7arhr190.jpg",          alt: "Kunde"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1E0t8mxuGpZ0qBVz2J2MtoVjT/uploaded-1775576410294-9oxi02hu.jpg",          alt: "Kunde"},
      ]}
      avatarText="Betroet af vores loyale stamkunder i over 6 år"
      buttons={[
        {
          text: "Find vej til salonen",          href: "https://www.google.com/maps/place/Fris%C3%B8r+i+Herning+%7C+City+Salon/@56.1362696,8.9678637,14z/data=!4m6!3m5!1s0x464bbbe5433dad53:0xcdf148b4e94181cc!8m2!3d56.1363651!4d8.9676575!16s%2Fg%2F11xgh0m52!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"},
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
      marqueeClassName="scale-150"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="En tradition for håndværk og fællesskab"
      description="Hos City Salon tror vi på, at en god klipning handler om mere end bare frisuren – det handler om tillid. Vi har opbygget et ry for konsekvent kvalitet, der bringer vores kunder tilbage igen og igen. Når du træder ind ad døren, bliver du mødt af kendte ansigter og barberer, der virkelig lytter. Uanset om du er ny i kvarteret eller en af vores faste kunder, fortjener du en klipning, der afspejler din stil, og en oplevelse, der værdsætter din tid."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1E0t8mxuGpZ0qBVz2J2MtoVjT/uploaded-1775575263554-kt3ffkmn.jpg"
      imageAlt="Professionelt salonmiljø"
      buttons={[
        { text: "Book din tid", href: "#contact" }
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        {
          title: "Præcisionsarbejde",          description: "Ekspertteknikker der sikrer ensartede resultater af høj kvalitet ved hvert besøg.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1E0t8mxuGpZ0qBVz2J2MtoVjT/uploaded-1775574107514-mjup70k8.jpg?_wi=1",          imageAlt: "Præcisionsværktøj"},
        {
          title: "Imødekommende atmosfære",          description: "Et afslappet og professionelt miljø, hvor alle bliver behandlet som individer.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1E0t8mxuGpZ0qBVz2J2MtoVjT/uploaded-1775574107514-mjup70k8.jpg?_wi=2",          imageAlt: "Salonstation"},
        {
          title: "Personlig tilgang",          description: "Vi tager os tid til at lære din stil, dine præferencer og din hårtype at kende.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1E0t8mxuGpZ0qBVz2J2MtoVjT/uploaded-1775573986291-ctps74sb.jpg",          imageAlt: "Stylingsession"},
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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1E0t8mxuGpZ0qBVz2J2MtoVjT/uploaded-1775575324066-esvj066y.jpg"
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
      description="Ingen tidsbestilling nødvendig. Vi har åbent mandag-lørdag kl. 09-18 på Østergade 12, så bare mød op, så gør vi dig klar til at se bedst ud."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1E0t8mxuGpZ0qBVz2J2MtoVjT/uploaded-1775575361403-xt5li2mn.jpg"
      imageAlt="Salonindgang"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      logoText="CITY SALON"
      copyrightText="© 2025 City Salon | Alle rettigheder forbeholdes"
      columns={[
        {
          title: "Social",          items: [
            { label: "Instagram", href: "https://www.instagram.com/frisoer.citysalon.herning?fbclid=IwY2xjawRCAklleHRuA2FlbQIxMABicmlkETFLRmM2QnJadE9pMW5zUDVVc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgZgmYcfYol4947-d1bG25MSA2PNmbH6JJS94ahoCVnWSzesWyzegTvtJjzi_aem_jAMcC-9yHvPciNKLmtvSZw" },
            { label: "Facebook", href: "https://www.facebook.com/cityhair.salon/" }
          ]
        },
        {
          title: "Kontakt",          items: [
            { label: "City Salon", href: "#" },
            { label: "citysalon2003@outlook.dk", href: "mailto:citysalon2003@outlook.dk" }
          ]
        }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}