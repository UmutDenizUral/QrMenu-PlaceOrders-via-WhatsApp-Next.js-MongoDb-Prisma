// Firebase config dosyası itemleri .env içinde neden kullanamıyorum


/*
Önce useCart.tsx oluşturuldu
Global olarak useCart a ulaşmak için bir context oluşturuldu.
Sonra tüm bir CartProvider.tsx oluşturuldu.
Sarmalama yapmak için layout içersine eklendi.




*/


/*Diğer örnek model
model Restaurant {
    id      String    @id @default(auto()) @map("_id") @db.ObjectId
    name    String
    submenu Submenu[]
}

model Submenu {
    id           String     @id @default(auto()) @map("_id") @db.ObjectId
    name         String
    restaurant   Restaurant @relation(fields: [restaurantId], references: [id])
    restaurantId String
    category     Category[]
}

model Category {
    id        String    @id @default(auto()) @map("_id") @db.ObjectId
    name      String
    submenu   Submenu   @relation(fields: [submenuId], references: [id])
    submenuId String
    products  Product[]
}

model Product {
    id          String   @id @default(auto()) @map("_id") @db.ObjectId
    name        String
    description String
    price       Float
    image       String
    category    Category @relation(fields: [categoryId], references: [id])
    categoryId  String
}

*/