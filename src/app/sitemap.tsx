import { MetadataRoute } from "next";
   
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const defaultPages = [
      {
        url: "https://dminhvu.com",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1
      },
      {
        url: "https://dminhvu.com/questions",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.95
      },
      {
        url: "https://dminhvu.com/policy",
        lastModified: new Date(),
        changeFrequency: "never",
        priority: 0.9
      },
      {
        url: "https://dminhvu.com/terms",
        lastModified: new Date(),
        changeFrequency: "never",
        priority: 0.9
      }
    ];  
   
    const sitemap = [
      ...defaultPages,
    ]
   
    return sitemap;
}