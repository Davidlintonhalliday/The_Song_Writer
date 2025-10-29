// netlify/functions/visitor-counter.js

export async function onRequest(context) {
  const kv = await context.env.VISITOR_KV.get("count");
  let count = kv ? parseInt(kv) + 1 : 1;
  await context.env.VISITOR_KV.put("count", count);
  return new Response(JSON.stringify({ count }), {
    headers: { "Content-Type": "application/json" },
  });
}
