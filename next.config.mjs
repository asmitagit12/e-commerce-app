/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        domains:["firebasestorage.googleapis.com","m.media-amazon.com","lh3.googleusercontent.com"],
        formats:['image/webp']
    }
};

export default nextConfig;