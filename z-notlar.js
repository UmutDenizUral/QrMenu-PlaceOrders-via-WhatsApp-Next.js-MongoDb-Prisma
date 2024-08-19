//yapılacaklar
/*
öncelikliler:
-sepete ekle diyince detail sayfasına gitmesin 
-restrant tel no ve foto  dbye eklendi restrant cart bölümünde gösterilecek wp siparişi restrana göre dinamik gelecek
-admin panli ürünleri yönet kısmında fiyat güncellemesi yapılacak
-kullanıcı progiline  adres bilgileri ve kişisel bilgileri güncelleme gelecek  favori yemekler eklenecek
-rastgele ürün seç gelicek  
-form verilerini resetlenecek ürün yükledikten sonra photo yükleme alanı resetlenecek kategori alanı kontrol edilecek
-searchbox yapılacak
-admin paneli restrant banner foto ekleme 



yapılacak geliştirmeler:

-ingridients filtreleme özelliği gelecek
-google hesabı gerçek mi kontrolü yapılacak
-sepetin altına sideproducts gelicek
-admin paneli menü oluştur gelicek
*/

/*
sorularım: manageClient-createrom kontrolü
*/

// Firebase config dosyası itemleri .env içinde neden kullanamıyorum


/*
Önce useCart.tsx oluşturuldu
Global olarak useCart a ulaşmak için bir context oluşturuldu.
Sonra tüm bir CartProvider.tsx oluşturuldu.
Sarmalama yapmak için layout içersine eklendi.




*/


/*Diğer örnek model
model Restaurant {
  id       String    @id @default(auto()) @map("_id") @db.ObjectId
  name     String
  submenu  Submenu[]
  products Product[]
}

model Submenu {
  id           String     @id @default(auto()) @map("_id") @db.ObjectId
  name         String
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id])
  restaurantId String     @db.ObjectId
  category     Category[]
  products     Product[]
}

model Category {
  id        String    @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  submenu   Submenu   @relation(fields: [submenuId], references: [id])
  submenuId String    @db.ObjectId
  products  Product[]
}

model Product {
  id           String     @id @default(auto()) @map("_id") @db.ObjectId
  name         String
  description  String
  price        Float
  image        String
  category     Category   @relation(fields: [categoryId], references: [id])
  categoryId   String     @db.ObjectId
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id])
  restaurantId String     @db.ObjectId
  submenu      Submenu    @relation(fields: [submenuId], references: [id])
  submenuId    String     @db.ObjectId
  review       Review[]
}

model Review {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  userId      String   @db.ObjectId
  productId   String   @db.ObjectId
  rating      Int
  comment     String
  createdDate DateTime @default(now())
  product     Product  @relation(fields: [productId], references: [id])
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id             String    @id @default(auto()) @map("_id") @db.ObjectId
  name           String?
  email          String?   @unique
  emailVerified  DateTime?
  image          String?
  hashedPassword String?
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
  role           Role      @default(USER)
  accounts       Account[]
  reviews        Review[]
}

model Account {
  id                String  @id @default(auto()) @map("_id") @db.ObjectId
  userId            String  @db.ObjectId
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.String
  access_token      String? @db.String
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.String
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

enum Role {
  USER
  ADMIN
}


*/