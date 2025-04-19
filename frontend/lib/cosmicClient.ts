import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  bucketSlug: process.env.NEXT_PUBLIC_BUCKET_SLUG || "",
  readKey: process.env.NEXT_PUBLIC_BUCKET_READ_KEY || "",
});

console.log('BUCKET_SLUG:', process.env.NEXT_PUBLIC_BUCKET_SLUG || 'Not Found');


export async function getMoonImage() {
  try {
    const response = await cosmic.objects
      .findOne({ slug: 'moon-image' }) // optional: remove type for debugging
      .props(['title', 'slug', 'metadata']);

    return response.object;
  } catch (error) {
    console.error('Error fetching moon image:', error);
    return null;
  }
}