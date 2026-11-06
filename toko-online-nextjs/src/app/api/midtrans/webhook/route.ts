import { NextResponse } from "next/server";
import Midtrans from "midtrans-client";

// TODO: verifikasi signature_key dengan Midtrans dan update status Order di database.
// Jangan pernah mengubah status pesanan berdasarkan callback browser saja.
export async function POST(request: Request) {
  try {
    const notification = await request.json();
    const core = new Midtrans.CoreApi({
      isProduction: process.env.MIDTRANS_IS_PRODUCTION === "true",
      serverKey: process.env.MIDTRANS_SERVER_KEY || "",
      clientKey: process.env.MIDTRANS_CLIENT_KEY || ""
    });
    const status = await core.transaction.notification(notification);
    return NextResponse.json({ received: true, transaction_status: status.transaction_status });
  } catch {
    return NextResponse.json({ error: "Notifikasi tidak valid." }, { status: 400 });
  }
}
