import { NextResponse } from "next/server";
import Midtrans from "midtrans-client";

// Endpoint ini contoh awal. Sebelum dipakai menerima pembayaran sungguhan,
// tambahkan validasi cart, stok, harga dari database, dan simpan order terlebih dahulu.
export async function POST(request: Request) {
  try {
    const { orderId, amount, customer } = await request.json();

    if (!orderId || !Number.isInteger(amount) || amount < 1 || !customer?.name || !customer?.email) {
      return NextResponse.json({ error: "Data pembayaran tidak valid." }, { status: 400 });
    }
    if (!process.env.MIDTRANS_SERVER_KEY) {
      return NextResponse.json({ error: "MIDTRANS_SERVER_KEY belum diatur." }, { status: 503 });
    }

    const snap = new Midtrans.Snap({
      isProduction: process.env.MIDTRANS_IS_PRODUCTION === "true",
      serverKey: process.env.MIDTRANS_SERVER_KEY,
      clientKey: process.env.MIDTRANS_CLIENT_KEY || ""
    });

    const transaction = await snap.createTransaction({
      transaction_details: { order_id: orderId, gross_amount: amount },
      customer_details: { first_name: customer.name, email: customer.email, phone: customer.phone || "" }
    });

    return NextResponse.json({ token: transaction.token, redirect_url: transaction.redirect_url });
  } catch {
    return NextResponse.json({ error: "Gagal membuat transaksi." }, { status: 500 });
  }
}
