/* eslint-disable @typescript-eslint/ban-ts-comment */
"use server";

import { TPropertyDetails2 } from "@/types";
import { GoogleGenerativeAI } from "@google/generative-ai";

// interface IPropertyData {
//   propertyOption:
//     | "Whole property"
//     | "Individual rooms"
//     | "Either whole property or individual rooms";
//   propertyDetails: TPropertyDetails;
// }

const generateDescription = async (
  propertyData: Partial<TPropertyDetails2>
): Promise<string> => {
  const prompt = `Generate a compelling property description based on the following details:
    - Postcode: ${propertyData.postcode}
    - Address: ${propertyData.address}
    - Address Line 2: ${propertyData.address2 || "N/A"}
    - Property Type: ${propertyData.propertyType}
    - Bedrooms: ${propertyData.bedrooms}
    - Bathrooms: ${propertyData.bathrooms}
    - Furnishing Options: ${propertyData.furnishingOptions}
    - Town: ${propertyData.town}
  `;

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  //   @ts-ignore
  const result = await model.generateContentStream({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  let responseString = "";

  for await (const res of result.stream) {
    responseString += res.text();
  }

  return responseString;
};

export default generateDescription;
