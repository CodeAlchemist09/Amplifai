import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';
import { portfolioItems, testimonials } from '@/data/portfolio';

// We need to fetch the URLs and upload them to Sanity as assets
async function uploadImageFromUrl(client: any, url: string) {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      filename: url.split('/').pop() || 'image.jpg',
    });
    return {
      _type: 'image',
      asset: {
        _type: "reference",
        _ref: asset._id
      }
    };
  } catch (error) {
    console.error('Failed to upload image:', url, error);
    return null;
  }
}

export async function GET() {
  const client = createClient({
    projectId: 'umdzlb31',
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: 'skftTbpYYHzZhAMB1XIpMm672Bs0BzLr9wFjYY4aNs64S5zivK6v2TscQsnJl6nquBKafPDASfVvJuvQgXnYmbSdXlzVoxuicEeE7YD6a2hL70PvxAVhdJyh7O4MAuSQSzyZRtkcpKlVFexnL3i34vZiCuUMrxUIOSECiJBkvPPQ7nWi5bIM',
    useCdn: false,
  });

  try {
    // 1. Seed Site Settings
    await client.create({
      _type: 'siteSettings',
      title: 'Amplifai',
      description: 'Boutique AI studio building high-converting websites and ad creatives for small businesses.',
      contactEmail: 'hello@amplifai.com',
      footerText: '© 2024 Amplifai Studio. All rights reserved.',
    });

    // 2. Seed Homepage
    await client.create({
      _type: 'homePage',
      heroEyebrow: 'AI-Powered Website & Ad Studio for SMBs',
      heroHeadline: "Websites and ad creatives that make your business look like it belongs on the internet's front page.",
      heroSubheadline: "Amplifai is a boutique AI studio building high-converting websites and scroll-stopping ad creative for salons, clinics, contractors, showrooms, and online stores — at a price small businesses can actually afford.",
      trustStats: [
        { _key: '1', value: '6+', label: 'Industries served' },
        { _key: '2', value: '10+', label: 'Projects delivered' },
        { _key: '3', value: '24h', label: 'Response time' },
        { _key: '4', value: '100%', label: 'Client satisfaction' },
      ],
      processSteps: [
        { _key: '1', step: '01', title: 'Discover', desc: 'A quick conversation about your business, your customers, and what "success" looks like for this project.' },
        { _key: '2', step: '02', title: 'Design & Build', desc: 'We design and build using AI-accelerated tools, with a real human reviewing and refining every decision — nothing goes live half-baked.' },
        { _key: '3', step: '03', title: 'Launch', desc: 'Your website goes live, or your ad creative ships ready to run — fast, polished, and tested.' },
        { _key: '4', step: '04', title: 'Grow', desc: 'We check in on results and help you decide what to build or test next.' },
      ],
      whyUs: [
        { _key: '1', icon: 'Zap', title: 'Boutique attention, AI-level speed', desc: 'You get senior-level design thinking, delivered in days, not months.' },
        { _key: '2', icon: 'DollarSign', title: 'Priced for small business', desc: 'No bloated retainers or agency overhead. Just the work, priced fairly.' },
        { _key: '3', icon: 'Palette', title: 'One studio, one voice', desc: 'Your website and ad creative are built to match, so your brand looks consistent everywhere.' },
        { _key: '4', icon: 'BarChart3', title: 'Data-backed creative', desc: 'Every ad and every page is built with a specific outcome in mind — not just to look nice.' },
      ]
    });

    // 3. Seed Services
    const services = [
      { title: 'Websites Built to Convert, Not Just Look Nice', icon: 'Globe', color: 'indigo', body: "Your website is often the first real impression a customer has of your business — and most small business websites lose that impression in the first five seconds. We design and build fast, mobile-first, conversion-focused websites using AI-accelerated workflows, refined by hand, so every page is built around one question: does this make someone want to book, call, or buy?", bestFor: ['Salons & med spas booking appointments', 'Contractors generating quote requests', 'Furniture & retail showrooms driving in-store visits', 'E-commerce brands selling online'], includes: ['Custom design (not a generic template)', 'Mobile optimization', 'Fast load times', 'Clear calls-to-action', 'Basic on-page SEO setup', 'A site you can actually update'] },
      { title: 'Ad Creative Built to Stop the Scroll', icon: 'Play', color: 'coral', body: "Great targeting can't save a bad ad. We build video ad creative — educational explainers, UGC-style testimonial-style ads, and platform-native formats — designed and produced with AI, then refined for the hook, pacing, and call-to-action that actually earns a click.", bestFor: ['Businesses running (or planning to run) Meta or TikTok ad campaigns', 'Brands that need fresh creative regularly without an in-house video team'], includes: ['Concept & scripting', 'AI-assisted production', 'Platform-correct formatting (9:16 vertical, captions, hook-first structure)', 'Revisions to get it right'] },
      { title: 'Your Website and Your Ads, Built as One Brand', icon: 'Layers', color: 'lime', body: "Most businesses end up with a website from one freelancer and ads from another — and it shows. We build both together, so your site and your ad creative share the same visual language, message, and momentum from the first click to the final sale.", bestFor: ['Businesses launching or relaunching their online presence from scratch', 'Brands that want consistency across every touchpoint'], includes: ['Everything in Website + Ad Creative', 'Unified brand direction', 'Coordinated launch timeline', 'Bundle pricing advantage'] }
    ];
    for (let i = 0; i < services.length; i++) {
      await client.create({ _type: 'service', order: i, ...services[i] });
    }

    // 4. Seed FAQs
    const faqs = [
      { q: 'How much does a website or ad creative cost?', a: 'It depends on the scope of your project, so we quote every job individually rather than using fixed packages. Most small business projects are priced to be significantly more affordable than a traditional agency — tell us about your business and we\'ll give you a real number within 24 hours.' },
      { q: 'How long does a project take?', a: 'Most websites are built and ready to launch within 7 to 14 business days, and ad creatives typically turn around within 3–7 days, depending on scope and revisions. We\'ll give you an exact timeline once we understand your project.' },
      { q: 'Do you work with businesses outside your home country?', a: 'Yes — we work with SMBs internationally and are set up to collaborate fully remotely, including calls at time zones that work for you.' },
      { q: 'Can I see examples in my specific industry?', a: 'Likely, yes — check out our Work page, which is filterable by industry. If we don\'t have an example in your exact niche yet, we\'re happy to show comparable work and walk you through our approach.' },
      { q: "I'm not sure if I need a website, ad creative, or both — can you help me figure that out?", a: 'Absolutely — that\'s exactly what the first conversation is for. Tell us where your business is today and where you want it to go, and we\'ll recommend what will actually move the needle rather than upselling everything.' },
      { q: 'What makes Amplifai different from a freelancer or a big agency?', a: 'You get agency-level design thinking and AI-accelerated speed, without freelancer inconsistency or big-agency pricing and bureaucracy — one studio, directly accountable for the result.' }
    ];
    for (let i = 0; i < faqs.length; i++) {
      await client.create({ _type: 'faq', order: i, question: faqs[i].q, answer: faqs[i].a });
    }

    // 5. Seed Testimonials
    for (const t of testimonials) {
      await client.create({
        _type: 'testimonial',
        clientName: t.clientName,
        industry: t.industry,
        quote: t.quote,
        rating: t.rating,
        published: t.published,
      });
    }

    // 6. Seed Portfolio Projects (This is heavy due to image uploads)
    for (const item of portfolioItems) {
      const coverImageObj = await uploadImageFromUrl(client, item.coverImage);
      const galleryObjs = [];
      for (const url of item.gallery) {
        const imgObj = await uploadImageFromUrl(client, url);
        if (imgObj) {
          // Add random keys which Sanity arrays require
          galleryObjs.push({ ...imgObj, _key: Math.random().toString(36).substring(7) });
        }
      }

      await client.create({
        _type: 'portfolio',
        title: item.title,
        slug: { _type: 'slug', current: item.slug },
        type: item.type,
        clientNameVisible: item.clientNameVisible,
        clientName: item.clientName,
        industry: item.industry,
        country: item.country,
        serviceType: item.serviceType,
        platform: item.platform,
        format: item.format,
        challenge: item.challenge,
        approach: item.approach,
        result: item.result,
        metrics: item.metrics?.map(m => ({ ...m, _key: Math.random().toString(36).substring(7) })) || [],
        liveUrl: item.liveUrl,
        // videoUrl removed, we will allow uploading videos manually later
        featured: item.featured,
        published: item.published,
        order: item.order,
        coverImage: coverImageObj,
        gallery: galleryObjs,
      });
    }

    return NextResponse.json({ success: true, message: 'Sanity database seeded successfully!' });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
