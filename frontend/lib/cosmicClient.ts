import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG || "",
  readKey: process.env.BUCKET_READ_KEY || "",
});


export async function getMoonImage() {
    try {
      const response = await cosmic.objects
        .findOne({ slug: 'moon-image', type: 'moon-image' })
        .props(['title', 'slug', 'metadata'])
        .depth(1);
      
      return response.object;
    } catch (error) {
      console.error('Error fetching moon image:', error);
      return null;
    }
  }