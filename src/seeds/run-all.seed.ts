import { createAdminSeed } from "./admin.seed";
import { createProductsSeed } from "./products.seed";


async function runSeeds() {
  try {
    await createAdminSeed();
    await createProductsSeed();
    console.log('Seeding completed.');
  } catch (error) {
    console.error('Error running seeds:', error);
    process.exit(1);
  }
}

void runSeeds();