import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

// WebSocket connections store (in production, use Redis or similar)
const connections = new Set<ReadableStreamDefaultController>();

export async function GET(req: NextRequest) {
  // Create a ReadableStream for Server-Sent Events
  const stream = new ReadableStream({
    start(controller) {
      connections.add(controller);
      
      // Send welcome message
      controller.enqueue(`data: ${JSON.stringify({
        text: 'Welcome to WebSocket Echo Server!',
        senderId: 'system',
        timestamp: new Date().toISOString(),
      })}\n\n`);

      // Remove connection when client disconnects
      req.signal.addEventListener('abort', () => {
        connections.delete(controller);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { text, senderId } = await req.json();
    
    const message = {
      text: `Echo: ${text}`,
      senderId: 'system',
      timestamp: new Date().toISOString(),
    };

    // Broadcast to all connected clients
    connections.forEach((controller) => {
      try {
        controller.enqueue(`data: ${JSON.stringify(message)}\n\n`);
      } catch (error) {
        // Remove dead connections
        connections.delete(controller);
      }
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }
}
