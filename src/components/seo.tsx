import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
    title?: string;
    description?: string;
    pathname?: string;
    image?: string;
    article?: boolean;
    children?: React.ReactNode;
}

export const SEO = ({ title, description, pathname, image, article, children }: SEOProps) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl
          defaultImage: image
        }
      }
    }
  `);

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
    } = data.site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || ""}`,
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            <meta property="og:title" content={seo.title} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:type" content={article ? "article" : "website"} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />

            {/* Altri tag personalizzati passabili come children */}
            {children}
        </>
    );
};
