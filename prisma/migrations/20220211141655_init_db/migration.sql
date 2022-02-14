-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nik` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(13) NOT NULL,
    `role` ENUM('User', 'Admin', 'Dokter', 'Apoteker') NOT NULL DEFAULT 'User',

    UNIQUE INDEX `User_nik_key`(`nik`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Penyakit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Penyakit_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Obat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    UNIQUE INDEX `Obat_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cat_Medis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('Lanjut', 'Sembuh') NOT NULL DEFAULT 'Lanjut',
    `tgl` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `catatan` TEXT NOT NULL,
    `pasienId` INTEGER NOT NULL,
    `dokterId` INTEGER NOT NULL,
    `penyakitId` INTEGER NOT NULL,
    `obatId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cat_Beli_Obat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jumlah` TINYINT NOT NULL,
    `total` INTEGER NOT NULL,
    `pasienId` INTEGER NOT NULL,
    `obatId` INTEGER NOT NULL,
    `catMedId` INTEGER NOT NULL,

    UNIQUE INDEX `Cat_Beli_Obat_catMedId_key`(`catMedId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cat_Medis` ADD CONSTRAINT `Cat_Medis_pasienId_fkey` FOREIGN KEY (`pasienId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cat_Medis` ADD CONSTRAINT `Cat_Medis_dokterId_fkey` FOREIGN KEY (`dokterId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cat_Medis` ADD CONSTRAINT `Cat_Medis_penyakitId_fkey` FOREIGN KEY (`penyakitId`) REFERENCES `Penyakit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cat_Medis` ADD CONSTRAINT `Cat_Medis_obatId_fkey` FOREIGN KEY (`obatId`) REFERENCES `Obat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cat_Beli_Obat` ADD CONSTRAINT `Cat_Beli_Obat_pasienId_fkey` FOREIGN KEY (`pasienId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cat_Beli_Obat` ADD CONSTRAINT `Cat_Beli_Obat_obatId_fkey` FOREIGN KEY (`obatId`) REFERENCES `Obat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cat_Beli_Obat` ADD CONSTRAINT `Cat_Beli_Obat_catMedId_fkey` FOREIGN KEY (`catMedId`) REFERENCES `Cat_Medis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
