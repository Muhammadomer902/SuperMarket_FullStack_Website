import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// GET SINGLE PRODUCT
export const GET = async (req: NextRequest) => {
  // Extract 'id' from the URL path
  const { pathname } = req.nextUrl;
  const id = pathname.split('/').pop(); // Extracts the id from the URL

  if (!id) {
    return new NextResponse(
      JSON.stringify({ message: "Product ID is required!" }),
      { status: 400 }
    );
  }

  try {
    const product = await prisma.product.findUnique({
      where: { id: id },
    });

    if (!product) {
      return new NextResponse(
        JSON.stringify({ message: "Product not found!" }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// DELETE SINGLE PRODUCT
export const DELETE = async (req: NextRequest) => {
  // Extract 'id' from the URL path
  const { pathname } = req.nextUrl;
  const id = pathname.split('/').pop(); // Extracts the id from the URL

  if (!id) {
    return new NextResponse(
      JSON.stringify({ message: "Product ID is required!" }),
      { status: 400 }
    );
  }

  const session = await getAuthSession();

  if (session?.user.isAdmin) {
    try {
      await prisma.product.delete({
        where: { id: id },
      });
      return new NextResponse(JSON.stringify("Product has been deleted"), {
        status: 200,
      });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  }

  return new NextResponse(
    JSON.stringify({ message: "You are not allowed" }),
    { status: 403 }
  );
};

// FEATURE SINGLE PRODUCT
export const PATCH = async (req: NextRequest) => {
  // Extract 'id' from the URL path
  const { pathname } = req.nextUrl;
  const id = pathname.split('/').pop(); // Extracts the id from the URL

  if (!id) {
    return new NextResponse(
      JSON.stringify({ message: "Product ID is required!" }),
      { status: 400 }
    );
  }

  try {
    // Find the current product
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return new NextResponse(
        JSON.stringify({ message: "Product not found." }),
        { status: 404 }
      );
    }

    // Toggle the `isFeatured` field
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: { isFeatured: !product.isFeatured },
    });

    return new NextResponse(JSON.stringify(updatedProduct), { status: 200 });
  } catch (err) {
    console.error("Error toggling feature status:", err);
    return new NextResponse(
      JSON.stringify({ message: "Failed to update product." }),
      { status: 500 }
    );
  }
};
