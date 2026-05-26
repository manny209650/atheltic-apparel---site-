/**
 * Tagline Food Scan — Cloudflare Worker Proxy
 *
 * SETUP (takes ~5 minutes, totally free):
 * 1. Go to cloudflare.com → sign up free
 * 2. Dashboard → Workers & Pages → Create Application → Create Worker
 * 3. Paste this entire file into the editor → Save & Deploy
 * 4. Go to Settings → Variables → Add variable:
 *      Name:  ANTHROPIC_API_KEY
 *      Value: your Anthropic API key (from console.anthropic.com)
 *      ✅ Check "Encrypt" to keep it secret
 * 5. Copy your Worker URL (looks like: https://food-scan.YOUR-NAME.workers.dev)
 * 6. Open food-scale.html, find SCAN_ENDPOINT and replace 'YOUR_WORKER_URL_HERE'
 *    with your Worker URL
 * Done! Photo analysis is now live.
 *
 * COST: Cloudflare Workers free tier = 100,000 requests/day (more than enough)
 *       Anthropic API: ~$0.001 per photo scan (very cheap)
 */

export default {
  async fetch(request, env) {

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    if (!env.ANTHROPIC_API_KEY) {
      return jsonResponse({ error: { message: 'API key not configured on server.' } }, 500);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: { message: 'Invalid JSON body.' } }, 400);
    }

    try {
      const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await anthropicRes.json();
      return jsonResponse(data, anthropicRes.status);

    } catch (err) {
      return jsonResponse({ error: { message: 'Worker error: ' + err.message } }, 500);
    }
  },
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
