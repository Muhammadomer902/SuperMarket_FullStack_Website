import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";


// GET SINGLE PRODUCT
export const GET = async (req: NextRequest,{ params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      }
    });
    return new NextResponse(JSON.stringify(product),{ status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// DELETE SINGLE PRODUCT
export const DELETE = async (req: NextRequest,{ params }: { params: { id: string } }) => {
  const { id } = params;
  const session = await getAuthSession(); 

  if(session?.user.isAdmin){
    try {
      await prisma.product.delete({
        where: {
          id: id,
        }
      });
      return new NextResponse(JSON.stringify("Product has been Deleted"),{ status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  }
  return new NextResponse(
    JSON.stringify({ message: "You are not Allowed" }),
    { status: 403 }
  );
};
//FEATURE SINGLE PRODUCT
export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;

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