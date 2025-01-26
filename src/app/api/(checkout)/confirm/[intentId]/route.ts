import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (request: NextRequest) => {

  const { searchParams } = request.nextUrl;
  const intentId = searchParams.get('intentId');

  if (!intentId) {
    return new NextResponse(
      JSON.stringify({ message: "Intent ID is required!" }),
      { status: 400 }
    );
  }

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "Being prepared!" },
    });

    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
