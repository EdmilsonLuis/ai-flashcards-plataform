"use server";

import { generateTermDefinitions } from "./ai";
import { prisma } from "./db";
import puppeteer from 'puppeteer';
import { CreateSetFormType } from "./validation";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function generatePdfFromHtml(htmlContent: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  // Generate the PDF
  const pdfBuff = await page.pdf({
    format: 'A4',
    printBackground: true
  });

  await browser.close();

  return pdfBuff.toString("base64")
}

export async function deleteSet(setId: string) {
  try {
    await prisma.set.delete({ where: { id: setId } })
    return true
  } catch (error: any) {
    console.log(error.message)
    return false
  }
}

export async function saveSet({ title, content, userId }: CreateSetFormType) {
  const response = await generateTermDefinitions(content);
  const termsDefinitions = JSON.parse(response || "{'terms':[],'definitions':[]}") as {
    terms: string[],
    definitions: string[]
  };

  try {
    const cards = termsDefinitions.terms.map((term, index) => ({
      term,
      definition: termsDefinitions.definitions[index]
    }));

    const savedSet = await prisma.set.create({
      data: {
        cards,
        content,
        title,
        userId
      }
    })
    return savedSet;

  } catch (error) {
    console.log(error);
    return false
  }
}