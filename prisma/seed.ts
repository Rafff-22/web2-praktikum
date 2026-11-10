import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const categories = [
    {
      name: "Minuman",
      products: [
        { name: "Kopi Toraja", description: "Kopi lokal kemasan 250 gram dengan aroma khas.", price: "85000.00" },
        { name: "Teh Herbal Rempah", description: "Teh seduh dari rempah pilihan, hangat dan menyegarkan.", price: "28000.00" },
      ],
    },
    {
      name: "Makanan",
      products: [
        { name: "Keripik Pisang", description: "Keripik pisang renyah produksi UMKM lokal.", price: "25000.00" },
        { name: "Sambal UMKM", description: "Sambal rumahan dengan cita rasa khas.", price: "30000.00" },
      ],
    },
    {
      name: "Kerajinan",
      products: [
        { name: "Tas Anyaman", description: "Tas buatan tangan dengan desain sederhana.", price: "95000.00" },
        { name: "Keranjang Rotan", description: "Keranjang rotan serbaguna untuk penyimpanan di rumah.", price: "120000.00" },
        { name: "Hiasan Dinding Anyaman", description: "Hiasan dinding anyaman tangan bermotif tradisional.", price: "55000.00" },
      ],
    },
    {
      name: "Aksesori",
      products: [
        { name: "Dompet Kulit", description: "Dompet praktis untuk penggunaan sehari-hari.", price: "65000.00" },
        { name: "Gelang Handmade", description: "Gelang sederhana hasil karya pengrajin lokal.", price: "25000.00" },
      ],
    },
  ];

  for (const item of categories) {
    const category = await prisma.category.upsert({
      where: { name: item.name },
      update: {},
      create: { name: item.name },
    });

    for (const product of item.products) {
      const existing = await prisma.product.findFirst({
        where: { name: product.name, categoryId: category.id },
      });

      if (!existing) {
        await prisma.product.create({
          data: {
            name: product.name,
            description: product.description,
            price: product.price,
            categoryId: category.id,
          },
        });
      }
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
