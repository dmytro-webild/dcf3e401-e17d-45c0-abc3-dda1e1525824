"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Plane, Clock, Shield, Zap, Tag, Sparkles, Heart } from 'lucide-react';

const BL_BENZ_LOGO = "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B0BlUQfgJHUm4r12qIgwy95Rl2/uploaded-1773780595739-ytw3hugk.jpg";
const CLIO_5_IMAGE = "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B0BlUQfgJHUm4r12qIgwy95Rl2/uploaded-1773805629257-rt5qew33.png";
const DACIA_LOGAN_IMAGE = "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B0BlUQfgJHUm4r12qIgwy95Rl2/uploaded-1773808699369-crpbmzcz.jpg";
const NEW_VEHICLE_IMAGE = "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B0BlUQfgJHUm4r12qIgwy95Rl2/uploaded-1773809171408-t9juzaky.jpg";
const GOLF_8_IMAGE = "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B0BlUQfgJHUm4r12qIgwy95Rl2/uploaded-1773809710022-ryiwi8a7.jpg";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSmall"
      background="noise"
      cardStyle="glass-elevated"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Réserver", id: "booking" },
            { name: "Véhicules", id: "vehicles" },
            { name: "À Propos", id: "about" },
            { name: "Avis", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="BL BENZ"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Louez votre voiture à Agadir en toute simplicité"
          description="Service rapide – Voitures propres – Prix imbattables"
          background={{ variant: "plain" }}
          tag="LOCATION DE VOITURES DE LUXE"
          tagAnimation="slide-up"
          tagIcon={Sparkles}
          buttons={[
            { text: "Réserver maintenant", href: "#booking" },
            { text: "Voir nos véhicules", href: "#vehicles" }
          ]}
          buttonAnimation="slide-up"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/port-with-yachts-embankment-sunrise-alicante_1398-4323.jpg", imageAlt: "Luxury car at Agadir beach sunset" },
            { imageSrc: "http://img.b2bpic.net/free-photo/picture-two-young-businessmen-talking-airport-holding-tablet_176420-6252.jpg", imageAlt: "Car rental at Agadir airport" },
            { imageSrc: "http://img.b2bpic.net/free-photo/overhead-shot-people-taking-photo-near-rocky-seashore-sea_181624-54834.jpg", imageAlt: "Luxury car driving on coastal road" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/gear-stick-front-part-brand-new-automobile-modern-black-interior-conception-vehicles_146671-16742.jpg", imageAlt: "Premium car interior dashboard" },
            { imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-holding-suitcase_23-2149901406.jpg", imageAlt: "Car in front of luxury hotel" },
            { imageSrc: "http://img.b2bpic.net/free-photo/fast-movement-traffic-nyc_181624-160.jpg", imageAlt: "Car with city lights reflection" }
          ]}
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84733.jpg", alt: "Customer 1" },
            { src: "http://img.b2bpic.net/free-photo/business-people-working-office-with-digital-tablet_1301-6633.jpg", alt: "Customer 2" },
            { src: "http://img.b2bpic.net/free-photo/handsome-man-outdoors-portrait_158595-3562.jpg", alt: "Customer 3" },
            { src: "http://img.b2bpic.net/free-photo/medium-shot-man-characterizing-painter_23-2149529892.jpg", alt: "Customer 4" }
          ]}
          avatarText="2000+ Clients satisfaits"
          carouselPosition="right"
          ariaLabel="Hero section BL BENZ luxury car rental"
          marqueeItems={[
            { type: "image", src: BL_BENZ_LOGO, alt: "BL BENZ Logo" }
          ]}
          showMarqueeCard={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureHoverPattern
          tag="POURQUOI CHOISIR BL BENZ"
          tagAnimation="slide-up"
          tagIcon={Shield}
          title="Votre partenaire de confiance pour la location de voitures"
          description="Nous offrons une expérience exceptionnelle avec des services de première classe et des véhicules impeccables."
          features={[
            { icon: Plane, title: "Livraison à l'aéroport", description: "Service express à l'aéroport d'Agadir – prêt à partir en quelques minutes" },
            { icon: Clock, title: "Service 24/7", description: "Support client disponible jour et nuit pour vos besoins de location" },
            { icon: Shield, title: "Voitures assurées", description: "Tous nos véhicules sont entièrement assurés et régulièrement entretenus" },
            { icon: Zap, title: "Réservation rapide", description: "Processus de réservation simple et rapide en ligne en quelques clics" },
            { icon: Tag, title: "Prix compétitifs", description: "Les meilleurs tarifs de location à Agadir sans frais cachés" },
            { icon: Sparkles, title: "Voitures impeccables", description: "Flotte moderne et propre – chaque voiture nettoyée après chaque location" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="vehicles" data-section="vehicles">
        <ProductCardTwo
          title="Notre flotte de véhicules"
          description="Découvrez notre sélection de voitures modernes et confortables adaptées à tous les budgets."
          tag="VÉHICULES DISPONIBLES"
          tagAnimation="slide-up"
          tagIcon={Sparkles}
          products={[
            { id: "dacia", brand: "Dacia", name: "Dacia Logan", price: "350 DH/jour", rating: 5, reviewCount: "95", imageSrc: DACIA_LOGAN_IMAGE, imageAlt: "Dacia Logan sedan" },
            { id: "duster", brand: "Dacia", name: "Dacia Duster SUV", price: "450 DH/jour", rating: 5, reviewCount: "95", imageSrc: "https://images.unsplash.com/photo-1605559424843-9e4c3ca4628d?w=500&h=500&fit=crop", imageAlt: "Dacia Duster SUV" },
            { id: "golf", brand: "Volkswagen", name: "Volkswagen Golf", price: "420 DH/jour", rating: 5, reviewCount: "102", imageSrc: GOLF_8_IMAGE, imageAlt: "Volkswagen Golf hatchback" },
            { id: "peugeot", brand: "Peugeot", name: "Peugeot 208", price: "380 DH/jour", rating: 5, reviewCount: "110", imageSrc: "https://images.unsplash.com/photo-1552519507-da3effeff00f?w=500&h=500&fit=crop&_wi=1", imageAlt: "Peugeot 208 compact car" },
            { id: "clio", brand: "Renault", name: "Clio Compact", price: "350 DH/jour", rating: 5, reviewCount: "120", imageSrc: CLIO_5_IMAGE, imageAlt: "Renault Clio 5 compact car" },
            { id: "mercedes", brand: "Mercedes", name: "Mercedes C-Class", price: "800 DH/jour", rating: 5, reviewCount: "85", imageSrc: "https://images.unsplash.com/photo-1606611013016-969c19d4a42f?w=500&h=500&fit=crop", imageAlt: "Mercedes C-Class luxury sedan" },
            { id: "bmw", brand: "BMW", name: "BMW 3 Series", price: "900 DH/jour", rating: 5, reviewCount: "78", imageSrc: "https://images.unsplash.com/photo-1552519507-da3effeff00f?w=500&h=500&fit=crop&_wi=2", imageAlt: "BMW 3 Series premium sedan" },
            { id: "new-vehicle", brand: "Premium Motors", name: "New Premium Model", price: "750 DH/jour", rating: 5, reviewCount: "45", imageSrc: NEW_VEHICLE_IMAGE, imageAlt: "New Premium Model vehicle" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Réserver maintenant", href: "#booking" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="BL BENZ en chiffres"
          tag="NOS RÉALISATIONS"
          tagAnimation="slide-up"
          metrics={[
            { id: "clients", value: "2000+", description: "Clients satisfaits" },
            { id: "vehicles", value: "150+", description: "Véhicules disponibles" },
            { id: "locations", value: "5000+", description: "Locations complétées" },
            { id: "rating", value: "4.9★", description: "Note moyenne" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Avis de nos clients"
          description="Découvrez ce que nos clients disent de leur expérience avec BL BENZ."
          tag="TÉMOIGNAGES"
          tagAnimation="slide-up"
          tagIcon={Heart}
          testimonials={[
            { id: "1", name: "Sarah Johnson", handle: "@sarahjtravel", testimonial: "Service professionnel et rapide. La voiture était impeccable et l'équipe très accueillante. Recommandé!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-with-hat-carrying-backpack-while-traveling-alone_23-2148648689.jpg", imageAlt: "Sarah Johnson" },
            { id: "2", name: "Mohammed Bennani", handle: "@m.bennani", testimonial: "Meilleure agence de location à Agadir. Tarifs justes, voitures propres et service excellent.", rating: 5, imageSrc: "http://img.b2bpic.net/free-vector/set-call-center-avatars_23-2147945811.jpg", imageAlt: "Mohammed Bennani" },
            { id: "3", name: "Emma Rodriguez", handle: "@emmarod_tours", testimonial: "Voiture propre et équipe très sympa. Tout était facile et rapide. Merci beaucoup!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/casual-smile-street-style-background-spring_1139-777.jpg", imageAlt: "Emma Rodriguez" },
            { id: "4", name: "David Kim", handle: "@davidkim_travels", testimonial: "Excellent service de livraison à l'aéroport. Pas d'attente, pas de stress. À recommander!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/funny-african-man-with-bushy-curly-hair-blinking-his-eye-having-warm-broad-smile_273609-14063.jpg", imageAlt: "David Kim" },
            { id: "5", name: "Fatima El Mansouri", handle: "@fatima_em", testimonial: "Service 24/7 vraiment disponible. J'ai eu un problème et ils ont tout réglé en minutes.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/blonde-lady-showing-double-thumbs-up-red-shirt-looking-merry_176474-39631.jpg", imageAlt: "Fatima El Mansouri" },
            { id: "6", name: "James Anderson", handle: "@jamesando", testimonial: "Prix incroyable pour la qualité des véhicules. Revenez à Agadir et recommencerai chez BL BENZ!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/pleased-handsome-male-customer-show-thumb-up-approval_176420-17945.jpg", imageAlt: "James Anderson" }
          ]}
          showRating={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="À PROPOS DE BL BENZ"
          tagAnimation="slide-up"
          title="Votre agence de confiance depuis des années"
          description="BL BENZ est une agence de location de voitures basée à Agadir, spécialisée dans la fourniture de véhicules modernes, confortables et parfaitement entretenus pour les touristes et professionnels."
          subdescription="Notre objectif est d'offrir une expérience simple, rapide et fiable. Nous comprenons l'importance de pouvoir explorer Agadir et ses environs sans tracas, c'est pourquoi nous nous engageons à fournir le meilleur service de location de voitures de la région."
          icon={Heart}
          imageSrc={BL_BENZ_LOGO}
          imageAlt="BL BENZ Logo"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Questions fréquemment posées"
          description="Trouvez les réponses à vos questions concernant la location de voitures chez BL BENZ."
          tag="FAQ"
          tagAnimation="slide-up"
          tagIcon={Sparkles}
          faqs={[
            { id: "1", title: "Quel âge minimum pour louer une voiture?", content: "L'âge minimum pour louer une voiture chez BL BENZ est de 21 ans. Une copie de votre permis de conduire valide et une pièce d'identité sont requises." },
            { id: "2", title: "Quels documents sont nécessaires?", content: "Vous aurez besoin d'un permis de conduire valide depuis au moins 2 ans, d'une pièce d'identité (passeport ou carte d'identité) et d'une carte de crédit pour la caution." },
            { id: "3", title: "Les voitures incluent-elles l'assurance?", content: "Oui, toutes nos voitures incluent une assurance tous risques. Vous pouvez également ajouter une couverture supplémentaire si souhaité." },
            { id: "4", title: "Y a-t-il des frais de déplacement?", content: "La livraison à l'aéroport d'Agadir est gratuite. Pour d'autres destinations, nous proposons une livraison moyennant des frais minimes." },
            { id: "5", title: "Pouvez-vous modifier ma réservation?", content: "Oui, vous pouvez modifier votre réservation jusqu'à 24 heures avant la date. Contactez-nous par téléphone ou WhatsApp." },
            { id: "6", title: "Avez-vous un service d'assistance 24/7?", content: "Absolument! Notre équipe est disponible 24 heures sur 24, 7 jours sur 7 pour vous aider en cas d'urgence ou de problème." }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Contactez-nous"
          description="Avez-vous des questions? Réservez votre voiture dès aujourd'hui ou contactez-nous pour plus d'informations."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Votre nom complet", required: true },
            { name: "email", type: "email", placeholder: "Votre email", required: true },
            { name: "phone", type: "tel", placeholder: "Votre téléphone", required: true },
            { name: "pickupDate", type: "date", placeholder: "Date de prise en charge", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Votre message ou détails de réservation...", rows: 4 }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-vector/realistic-car-rental-landing-page-template_23-2149228032.jpg"
          imageAlt="BL BENZ contact"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Envoyer demande"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="BL BENZ"
          columns={[
            {
              title: "Services",              items: [
                { label: "Réserver", href: "#booking" },
                { label: "Nos véhicules", href: "#vehicles" },
                { label: "Tarifs", href: "#vehicles" },
                { label: "À Propos", href: "#about" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "GARAGE BLOC C N°379 HAY, Agadir", href: "https://maps.google.com/?q=GARAGE+BLOC+C+N379+HAY+Agadir" },
                { label: "06 71 54 82 78", href: "tel:+212671548278" },
                { label: "WhatsApp", href: "https://wa.me/212671548278" },
                { label: "Email", href: "mailto:contact@blbenz.ma" }
              ]
            },
            {
              title: "Légal",              items: [
                { label: "Conditions d'utilisation", href: "#" },
                { label: "Politique de confidentialité", href: "#" },
                { label: "Politique de cookie", href: "#" },
                { label: "Mentions légales", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 BL BENZ - Location de voitures à Agadir. Tous droits réservés."
        />
      </div>
    </ThemeProvider>
  );
}