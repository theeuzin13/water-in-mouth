import { AppDataSource } from "src/config/data-source";
import { ProductEntity } from "src/modules/products/entities/product.entity";

export async function createProductsSeed() {
  await AppDataSource.initialize();

  const productRepository = AppDataSource.getRepository(ProductEntity);

  const exists = await productRepository.count();
  if (exists > 0) return;

  const products = [
    { name: "Salgado", price: 5.00, category: "Salgados" },
    { name: "Coxinha", price: 5.50, category: "Salgados" },
    { name: "Pastel", price: 6.00, category: "Salgados" },
    { name: "Refrigerante", price: 4.00, category: "Bebidas" },
    { name: "Suco Natural", price: 5.00, category: "Bebidas" },
    { name: "Água", price: 2.50, category: "Bebidas" },
    { name: "Café", price: 3.00, category: "Bebidas" },
    { name: "Bolo", price: 4.50, category: "Doces" },
    { name: "Brigadeiro", price: 2.00, category: "Doces" },
    { name: "Sanduíche", price: 8.00, category: "Lanches" },
  ];

  for (const p of products) {
    const product = productRepository.create(p);
    await productRepository.save(product);
  }

  console.log("🌱 Produtos padrão criados com sucesso.");
}
