// src/components/SEOHead.tsx
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({ 
  title = "The Goat Store - Camisetas de Fútbol Retro y Actuales",
  description = "Comprá las mejores camisetas de fútbol de Argentina, Brasil, Francia y más. Ediciones especiales, retro y actuales. Pedí por WhatsApp y recibilo en tu casa.",
  image = "/img/logo.png",
  url = "https://thegoatstore.com"
}: SEOHeadProps) => {
  return (
    <Head>
      {/* Meta Tags Básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/img/logo.png" />
      <link rel="apple-touch-icon" href="/img/logo.png" />
      
      {/* Open Graph (Facebook, WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="The Goat Store" />
      <meta property="og:locale" content="es_AR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* WhatsApp específico */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="The Goat Store - Camisetas de Fútbol" />
      
      {/* Otros */}
      <meta name="theme-color" content="#FFD700" />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEOHead;