import { DataSource } from "typeorm";
import * as bcrypt from "bcrypt";
import { AppDataSource } from "src/config/data-source";
import { UserEntity } from "src/modules/users/entities/user.entity";
import { UserRole } from "src/common/enums/role.enum";

export async function createAdminSeed() {
  await AppDataSource.initialize();
  const userRepository = AppDataSource.getRepository(UserEntity);

  const password = process.env.ADMIN_PASSWORD!;
  const username = process.env.ADMIN_USERNAME!;

  const adminExists = await userRepository.findOne({ where: { role: UserRole.ADMIN } });

  if (!adminExists) {
    const passwordHash = await bcrypt.hash(password, 10);

    const adminUser = userRepository.create({
      username: username,
      password: passwordHash,
      role: UserRole.ADMIN,
    });

    await userRepository.save(adminUser);
    console.log("Admin user created successfully.");
  }
}
