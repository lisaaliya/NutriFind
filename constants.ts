import { Recipe } from './types';

export const INGREDIENT_OPTIONS = {
  hewan: [
    { value: "telur", label: "Telur" },
    { value: "ayam", label: "Dada Ayam" },
    { value: "sarden", label: "Ikan Sarden" },
    { value: "ikan", label: "Ikan Tongkol" },
    { value: "sapi", label: "Daging Sapi/Kornet" },
    { value: "udang", label: "Udang" },
    { value: "sosis", label: "Sosis/Bakso" }
  ],
  nabati: [
    { value: "tempe", label: "Tempe" },
    { value: "tahu", label: "Tahu" },
    { value: "kacang", label: "Kacang Hijau/Merah" },
    { value: "jamur", label: "Jamur Tiram/Kancing" }
  ],
  sayur: [
    { value: "bayam", label: "Bayam" },
    { value: "wortel", label: "Wortel" },
    { value: "brokoli", label: "Brokoli" },
    { value: "kol", label: "Kol/Kubis" },
    { value: "tomat", label: "Tomat" },
    { value: "kangkung", label: "Kangkung" },
    { value: "buncis", label: "Buncis" },
    { value: "sawi", label: "Sawi Hijau" },
    { value: "terong", label: "Terong" }
  ],
  karbo: [
    { value: "nasi", label: "Nasi Putih" },
    { value: "kentang", label: "Kentang" },
    { value: "oat", label: "Oatmeal" },
    { value: "mie", label: "Mie Instan" },
    { value: "pasta", label: "Pasta/Spaghetti" },
    { value: "roti", label: "Roti Tawar" },
    { value: "bihun", label: "Bihun/Soun" }
  ]
};

// MASSIVE DATABASE - 100+ Recipes
export const INITIAL_RECIPES: Recipe[] = [
  // ==================== ANEKA TELUR (20 Resep) ====================
  { 
    id: 1, 
    title: "Tumis Telur Bayam Garlic", 
    hewan: "telur", nabati: "", sayur: "bayam", karbo: "nasi", 
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80", 
    tags: ["Diet Hemat", "Low Carb"], calories: 350, protein_val: 18, fat_val: 15, carbs_val: 35, price: "Rp 12.000", 
    desc: "Menu akhir bulan kaya zat besi. Cepat, murah, dan sehat.", 
    benefit: "Tinggi zat besi & Vitamin K.", ingredients: ["2 butir telur", "1 ikat bayam", "3 bawang putih", "Saus tiram"], 
    cara: ["Tumis bawang.", "Masukkan bayam layu.", "Masukkan telur orak-arik."] 
  },
  {
    id: 15, title: "Orak Arik Telur Kol", hewan: "telur", nabati: "", sayur: "kol", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1612927230555-d41c19b88496?auto=format&fit=crop&w=800&q=80",
    tags: ["Super Hemat", "5 Menit"], calories: 200, protein_val: 12, fat_val: 10, carbs_val: 15, price: "Rp 5.000",
    desc: "Penyelamat tanggal tua.", benefit: "Cukup gizi murah.", ingredients: ["2 telur", "Kol iris", "Bawang putih"],
    cara: ["Tumis bawang.", "Masak telur.", "Masukkan kol."]
  },
  {
    id: 101, title: "Telur Dadar Padang Ekonomis", hewan: "telur", nabati: "", sayur: "kol", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1626507498427-023a1f496150?auto=format&fit=crop&w=800&q=80",
    tags: ["Indonesia", "Gurih"], calories: 300, protein_val: 14, fat_val: 20, carbs_val: 5, price: "Rp 8.000",
    desc: "Telur dadar tebal ala warung Padang.", benefit: "Protein padat.", ingredients: ["2 telur", "Tepung beras", "Daun bawang", "Kol", "Cabai giling"],
    cara: ["Kocok semua bahan.", "Goreng minyak banyak."]
  },
  {
    id: 102, title: "Sandwich Telur Tomat", hewan: "telur", nabati: "", sayur: "tomat", karbo: "roti",
    image: "https://images.unsplash.com/photo-1525351440155-ad29113d5839?auto=format&fit=crop&w=800&q=80",
    tags: ["Sarapan", "Kilat"], calories: 350, protein_val: 18, fat_val: 15, carbs_val: 30, price: "Rp 7.000",
    desc: "Sarapan klasik praktis.", benefit: "Lycopene tomat.", ingredients: ["2 roti", "1 telur", "Tomat", "Saus"],
    cara: ["Panggang roti.", "Goreng telur.", "Susun."]
  },
  {
    id: 103, title: "Fuyunghai Mie Instan", hewan: "telur", nabati: "", sayur: "wortel", karbo: "mie",
    image: "https://images.unsplash.com/photo-1610446736444-6330ce148d42?auto=format&fit=crop&w=800&q=80",
    tags: ["Kenyang", "Anak Kost"], calories: 550, protein_val: 20, fat_val: 25, carbs_val: 60, price: "Rp 10.000",
    desc: "Kreasi mie jadi omelet tebal siram saus.", benefit: "Karbo loading.", ingredients: ["1 mie rebus", "2 telur", "Wortel", "Saus tomat"],
    cara: ["Campur mie & telur, goreng.", "Buat saus tomat kental."]
  },
  {
    id: 201, title: "Telur Ceplok Kecap Pontianak", hewan: "telur", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Viral", "Simpel"], calories: 250, protein_val: 12, fat_val: 15, carbs_val: 10, price: "Rp 6.000",
    desc: "Telur ceplok dengan kuah kecap bawang putih yang wangi.", benefit: "Protein cepat.",
    ingredients: ["2 Telur", "3 Bawang putih cincang", "Kecap asin & manis", "Daun bawang"],
    cara: ["Goreng telur setengah matang.", "Tumis bawang putih dengan minyak sisa telur.", "Masukkan kecap dan air dikit, siram ke telur."]
  },
  {
    id: 202, title: "Telur Balado Merah", hewan: "telur", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    tags: ["Pedas", "Tradisional"], calories: 200, protein_val: 12, fat_val: 12, carbs_val: 8, price: "Rp 8.000",
    desc: "Telur rebus goreng dengan sambal balado.", benefit: "Kenyang protein.",
    ingredients: ["2 Telur rebus", "Cabai merah", "Bawang merah & putih", "Tomat"],
    cara: ["Goreng telur rebus sebentar.", "Tumis bumbu halus balado.", "Campurkan."]
  },
  {
    id: 203, title: "Sup Telur Jagung", hewan: "telur", nabati: "", sayur: "", karbo: "",
    image: "https://images.unsplash.com/photo-1588147690186-07f7b163e9f3?auto=format&fit=crop&w=800&q=80",
    tags: ["Hangat", "Comfort"], calories: 180, protein_val: 10, fat_val: 8, carbs_val: 15, price: "Rp 7.000",
    desc: "Sup kental manis gurih ala restoran.", benefit: "Ringan dicerna.",
    ingredients: ["1 Telur kocok", "1 Jagung manis pipil", "Maizena", "Kaldu ayam"],
    cara: ["Rebus jagung.", "Tuang telur sambil diaduk memutar (serabut).", "Kentalkan dengan maizena."]
  },
  {
    id: 204, title: "Telur Barendo (Crispy)", hewan: "telur", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Crispy", "Padang"], calories: 350, protein_val: 12, fat_val: 25, carbs_val: 5, price: "Rp 6.000",
    desc: "Telur dadar super renyah keriting.", benefit: "Enak banget.",
    ingredients: ["2 Telur", "Minyak banyak", "Garam"],
    cara: ["Kocok telur sampai berbusa.", "Tuang agak tinggi ke minyak sangat panas.", "Goreng sampai kering."]
  },
  {
    id: 205, title: "Telur Pindang Coklat (Tea Egg)", hewan: "telur", nabati: "", sayur: "", karbo: "",
    image: "https://images.unsplash.com/photo-1506806969562-ab163c22da6e?auto=format&fit=crop&w=800&q=80",
    tags: ["Awet", "Meal Prep"], calories: 80, protein_val: 7, fat_val: 5, carbs_val: 1, price: "Rp 5.000",
    desc: "Telur rebus bumbu kecap & teh, awet disimpan.", benefit: "Rendah lemak.",
    ingredients: ["Telur rebus", "Teh celup", "Kecap manis", "Bawang merah putih", "Salam lengkuas"],
    cara: ["Rebus telur matang kupas/retakkan kulit.", "Rebus lagi dengan bumbu dan teh sampai coklat meresap."]
  },
  {
    id: 206, title: "Tumis Sawi Putih Telur", hewan: "telur", nabati: "", sayur: "sawi", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&w=800&q=80",
    tags: ["Sayur", "Harian"], calories: 150, protein_val: 8, fat_val: 10, carbs_val: 10, price: "Rp 8.000",
    desc: "Tumis sayur sederhana dan cepat.", benefit: "Serat tinggi.",
    ingredients: ["Sawi putih", "1 Telur", "Bawang putih", "Cabai"],
    cara: ["Orak arik telur.", "Tumis bawang.", "Masukkan sawi, beri air sedikit."]
  },
  {
    id: 207, title: "Omelet Tahu (Tahu Telur)", hewan: "telur", nabati: "tahu", sayur: "toge", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1604561845607-427d2c3df313?auto=format&fit=crop&w=800&q=80",
    tags: ["Jawa Timur", "Kenyang"], calories: 400, protein_val: 20, fat_val: 22, carbs_val: 25, price: "Rp 12.000",
    desc: "Tahu telur goreng disiram bumbu kacang/kecap.", benefit: "Protein ganda.",
    ingredients: ["2 Tahu potong dadu", "2 Telur", "Toge seduh", "Kecap manis/bumbu pecel"],
    cara: ["Kocok telur dan tahu.", "Goreng dadar.", "Sajikan dengan toge dan bumbu."]
  },
  {
    id: 208, title: "Telur Geprek Sambal Korek", hewan: "telur", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    tags: ["Pedas", "Viral"], calories: 350, protein_val: 12, fat_val: 20, carbs_val: 30, price: "Rp 10.000",
    desc: "Telur goreng tepung digeprek sambal pedas.", benefit: "Membangkitkan selera.",
    ingredients: ["Telur", "Tepung bumbu", "Cabai rawit", "Bawang putih"],
    cara: ["Dadar telur, celup tepung basah & kering, goreng.", "Ulek cabai & bawang, siram minyak panas.", "Geprek telur."]
  },
  {
    id: 209, title: "Semur Telur Tahu", hewan: "telur", nabati: "tahu", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1547470659-c2998a69a239?auto=format&fit=crop&w=800&q=80",
    tags: ["Manis", "Kids Friendly"], calories: 300, protein_val: 18, fat_val: 12, carbs_val: 20, price: "Rp 10.000",
    desc: "Telur dan tahu masak kecap manis.", benefit: "Protein lengkap.",
    ingredients: ["Telur rebus", "Tahu goreng", "Kecap manis", "Pala, cengkeh"],
    cara: ["Tumis bumbu halus.", "Masukkan air, kecap, telur, tahu.", "Masak sampai meresap."]
  },

  // ==================== ANEKA AYAM (20 Resep) ====================
  { 
    id: 5, title: "Sup Ayam Jahe", hewan: "ayam", nabati: "", sayur: "wortel", karbo: "kentang", 
    image: "https://images.unsplash.com/photo-1547592166-23acbe3a624b?auto=format&fit=crop&w=800&q=80", 
    tags: ["Immunity", "Flu Fighter"], calories: 350, protein_val: 30, fat_val: 10, carbs_val: 35, price: "Rp 20.000", 
    desc: "Kuah hangat bening melegakan.", benefit: "Meningkatkan imun.", 
    ingredients: ["Ayam dadu", "Wortel", "Kentang", "Jahe", "Bawang putih"], 
    cara: ["Rebus ayam & jahe.", "Masukkan sayuran.", "Bumbui."] 
  },
  { 
    id: 6, title: "Ayam Goreng Oat", hewan: "ayam", nabati: "", sayur: "tomat", karbo: "oat", 
    image: "https://images.unsplash.com/photo-1627308594248-18e0018d9f1e?auto=format&fit=crop&w=800&q=80", 
    tags: ["Crispy", "Healthy Fry"], calories: 430, protein_val: 35, fat_val: 12, carbs_val: 50, price: "Rp 22.000", 
    desc: "Ayam krispi sehat serat oat.", benefit: "Serat tinggi.", ingredients: ["Dada ayam", "Oatmeal", "Telur", "Bawang bubuk"], 
    cara: ["Balur ayam ke telur lalu oat.", "Goreng/Air Fryer."] 
  },
  {
    id: 17, title: "Soto Ayam Bening", hewan: "ayam", nabati: "", sayur: "kol", karbo: "bihun",
    image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=800&q=80",
    tags: ["Segar", "Traditional"], calories: 380, protein_val: 28, fat_val: 12, carbs_val: 40, price: "Rp 25.000",
    desc: "Soto segar kuah kuning.", benefit: "Anti-inflamasi kunyit.", ingredients: ["Ayam rebus", "Bihun", "Kol", "Bumbu soto"],
    cara: ["Tumis bumbu, buat kuah.", "Sajikan dengan pelengkap."]
  },
  {
    id: 104, title: "Ayam Brokoli Saus Tiram", hewan: "ayam", nabati: "", sayur: "brokoli", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=800&q=80",
    tags: ["Chinese Food", "Sehat"], calories: 400, protein_val: 35, fat_val: 15, carbs_val: 40, price: "Rp 25.000",
    desc: "Menu restoran Chinese versi rumahan.", benefit: "Tinggi protein serat.", ingredients: ["Ayam iris", "Brokoli", "Saus tiram", "Bawang putih"],
    cara: ["Tumis ayam.", "Masukkan brokoli & saus."]
  },
  {
    id: 105, title: "Nasi Tim Ayam Jamur", hewan: "ayam", nabati: "jamur", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1616656722880-928929734994?auto=format&fit=crop&w=800&q=80",
    tags: ["Comfort Food", "Lembut"], calories: 450, protein_val: 25, fat_val: 10, carbs_val: 60, price: "Rp 20.000",
    desc: "Nasi lembut topping ayam jamur.", benefit: "Mudah dicerna.", ingredients: ["Beras", "Ayam cincang", "Jamur", "Kecap manis"],
    cara: ["Masak topping ayam.", "Masak nasi di rice cooker dengan topping di atasnya."]
  },
  {
    id: 210, title: "Ayam Kecap Mentega", hewan: "ayam", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1627308594248-18e0018d9f1e?auto=format&fit=crop&w=800&q=80",
    tags: ["Favorit", "Gurih"], calories: 400, protein_val: 30, fat_val: 20, carbs_val: 20, price: "Rp 20.000",
    desc: "Ayam goreng dengan saus mentega kecap.", benefit: "Kaya rasa.",
    ingredients: ["Ayam potong", "Mentega/Margarin", "Kecap manis & Inggris", "Bawang bombay"],
    cara: ["Goreng ayam.", "Tumis bombay dengan mentega.", "Masukkan ayam dan kecap."]
  },
  {
    id: 211, title: "Ayam Suwir Pedas (Balado)", hewan: "ayam", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1541249969116-37207624921f?auto=format&fit=crop&w=800&q=80",
    tags: ["Pedas", "Meal Prep"], calories: 300, protein_val: 32, fat_val: 10, carbs_val: 5, price: "Rp 20.000",
    desc: "Dada ayam suwir bumbu pedas, awet dikulkas.", benefit: "Protein tinggi rendah lemak.",
    ingredients: ["Dada ayam rebus suwir", "Cabai merah", "Daun jeruk", "Serai"],
    cara: ["Tumis bumbu halus.", "Masukkan ayam suwir & daun jeruk.", "Masak sampai kering."]
  },
  {
    id: 212, title: "Ayam Goreng Lengkuas", hewan: "ayam", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    tags: ["Tradisional", "Wangi"], calories: 450, protein_val: 30, fat_val: 25, carbs_val: 10, price: "Rp 22.000",
    desc: "Ayam goreng dengan remah lengkuas gurih.", benefit: "Aroma menggugah.",
    ingredients: ["Ayam ungkep", "Lengkuas parut banyak", "Kunyit, ketumbar"],
    cara: ["Ungkep ayam dengan bumbu & lengkuas parut.", "Goreng ayam dan bumbunya sampai kering."]
  },
  {
    id: 213, title: "Ayam Popcorn (Camilan/Lauk)", hewan: "ayam", nabati: "", sayur: "", karbo: "kentang",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Snack", "Crispy"], calories: 350, protein_val: 20, fat_val: 18, carbs_val: 25, price: "Rp 18.000",
    desc: "Potongan ayam kecil tepung crispy.", benefit: "Disukai anak-anak.",
    ingredients: ["Dada ayam dadu kecil", "Tepung bumbu", "Minyak"],
    cara: ["Celup ayam ke tepung.", "Goreng deep fry."]
  },
  {
    id: 214, title: "Ayam Rica-Rica Kemangi", hewan: "ayam", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Manado", "Pedas"], calories: 380, protein_val: 30, fat_val: 15, carbs_val: 10, price: "Rp 25.000",
    desc: "Pedas wangi kemangi.", benefit: "Nafsu makan.",
    ingredients: ["Ayam", "Cabai rawit banyak", "Kemangi", "Jahe, kunyit, serai"],
    cara: ["Tumis bumbu pedas.", "Masukkan ayam & air.", "Masak sampai susut, masukkan kemangi."]
  },
  {
    id: 215, title: "Kari Ayam Kentang", hewan: "ayam", nabati: "", sayur: "wortel", karbo: "kentang",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Santan", "Gurih"], calories: 500, protein_val: 28, fat_val: 30, carbs_val: 40, price: "Rp 25.000",
    desc: "Kari ayam kental.", benefit: "Kaya rempah.",
    ingredients: ["Ayam", "Kentang", "Santan instan", "Bumbu kari bubuk/basah"],
    cara: ["Tumis bumbu.", "Masukkan ayam, kentang, santan.", "Masak api kecil."]
  },
  {
    id: 216, title: "Sate Ayam Teflon", hewan: "ayam", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1529193591184-b1d580690dd0?auto=format&fit=crop&w=800&q=80",
    tags: ["Grill", "No Smoke"], calories: 350, protein_val: 35, fat_val: 15, carbs_val: 10, price: "Rp 20.000",
    desc: "Sate tanpa asap arang.", benefit: "Protein tinggi.",
    ingredients: ["Dada ayam dadu", "Kecap manis", "Bawang putih", "Ketumbar"],
    cara: ["Marinasi ayam.", "Tusuk sate.", "Bakar di teflon oles kecap."]
  },
  {
    id: 217, title: "Tumis Usus Ayam Pedas", hewan: "ayam", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Jeroan", "Murah"], calories: 300, protein_val: 15, fat_val: 20, carbs_val: 5, price: "Rp 15.000",
    desc: "Olahan usus bumbu kuning pedas.", benefit: "Murah meriah.",
    ingredients: ["Usus ayam rebus", "Kunyit, jahe, cabai", "Daun jeruk"],
    cara: ["Tumis bumbu halus.", "Masukkan usus.", "Masak kering."]
  },
  {
    id: 218, title: "Ayam Teriyaki Simple", hewan: "ayam", nabati: "", sayur: "wortel", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1547496502-ffa76f30d088?auto=format&fit=crop&w=800&q=80",
    tags: ["Jepang", "Manis"], calories: 400, protein_val: 30, fat_val: 15, carbs_val: 30, price: "Rp 22.000",
    desc: "Ayam saus manis ala Jepang.", benefit: "Disukai semua.",
    ingredients: ["Ayam fillet", "Saus Teriyaki/Tiram+Kecap", "Bawang bombay", "Wortel"],
    cara: ["Marinasi ayam.", "Tumis ayam dan bombay.", "Masukkan sisa saus."]
  },
  {
    id: 219, title: "Pepes Ayam Kemangi", hewan: "ayam", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1541249969116-37207624921f?auto=format&fit=crop&w=800&q=80",
    tags: ["Kukus", "Sehat"], calories: 350, protein_val: 35, fat_val: 10, carbs_val: 5, price: "Rp 20.000",
    desc: "Ayam kukus bumbu rempah.", benefit: "Tanpa minyak.",
    ingredients: ["Ayam", "Kemangi", "Bumbu halus kuning", "Daun pisang (opsional)"],
    cara: ["Campur ayam bumbu.", "Bungkus/taruh wadah.", "Kukus matang."]
  },

  // ==================== ANEKA IKAN & SEAFOOD (15 Resep) ====================
  { 
    id: 2, title: "Nasi Gila Sarden", hewan: "sarden", nabati: "", sayur: "kol", karbo: "nasi", 
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80", 
    tags: ["Anak Kost", "One Pot"], calories: 480, protein_val: 22, fat_val: 20, carbs_val: 50, price: "Rp 15.000", 
    desc: "Sarden masak nasi.", benefit: "Omega-3.", ingredients: ["Sarden", "Kol", "Bawang", "Nasi"], 
    cara: ["Tumis bumbu & sarden.", "Campur nasi."] 
  },
  { 
    id: 7, title: "Mie Nyemek Tongkol", hewan: "ikan", nabati: "", sayur: "sawi", karbo: "mie", 
    image: "https://images.unsplash.com/photo-1541249969116-37207624921f?auto=format&fit=crop&w=800&q=80", 
    tags: ["Pedas", "Hack"], calories: 520, protein_val: 28, fat_val: 22, carbs_val: 55, price: "Rp 18.000", 
    desc: "Mie kuah kental ikan.", benefit: "Protein otot.", ingredients: ["Mie instan", "Tongkol suwir", "Sawi", "Telur"], 
    cara: ["Masak mie.", "Campur tongkol & telur."] 
  },
  { 
    id: 10, title: "Roti Bakar Tuna Melt", hewan: "ikan", nabati: "", sayur: "tomat", karbo: "roti", 
    image: "https://images.unsplash.com/photo-1619623067140-5e5d3269a840?auto=format&fit=crop&w=800&q=80", 
    tags: ["Western", "Portable"], calories: 340, protein_val: 25, fat_val: 18, carbs_val: 20, price: "Rp 16.000", 
    desc: "Sandwich tuna creamy.", benefit: "Protein.", ingredients: ["Roti", "Tuna kaleng", "Mayo", "Tomat"], 
    cara: ["Campur tuna mayo.", "Isi roti.", "Panggang."] 
  },
  {
    id: 106, title: "Sarden Tumis Kangkung", hewan: "sarden", nabati: "", sayur: "kangkung", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Zat Besi", "Cepat"], calories: 300, protein_val: 18, fat_val: 12, carbs_val: 35, price: "Rp 15.000",
    desc: "Sarden campur kangkung.", benefit: "Zat besi.", ingredients: ["Sarden", "Kangkung", "Bawang"],
    cara: ["Tumis bumbu.", "Masak sarden.", "Layukan kangkung."]
  },
  {
    id: 107, title: "Balado Tongkol Terong", hewan: "ikan", nabati: "", sayur: "terong", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1551326844-f81f4a9bb6b5?auto=format&fit=crop&w=800&q=80",
    tags: ["Padang", "Pedas"], calories: 400, protein_val: 20, fat_val: 18, carbs_val: 45, price: "Rp 18.000",
    desc: "Tongkol terong sambal merah.", benefit: "Antioksidan terong.", ingredients: ["Tongkol", "Terong", "Cabai merah"],
    cara: ["Goreng tongkol & terong.", "Tumis sambal.", "Aduk rata."]
  },
  {
    id: 220, title: "Sarden Goreng Tepung (Crispy)", hewan: "sarden", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    tags: ["Unik", "Crispy"], calories: 350, protein_val: 20, fat_val: 20, carbs_val: 25, price: "Rp 15.000",
    desc: "Ikan sarden kaleng digoreng garing.", benefit: "Kalsium (tulang sarden).",
    ingredients: ["Ikan sarden (tiriskan kuah)", "Tepung bumbu"],
    cara: ["Gulingkan ikan ke tepung.", "Goreng garing.", "Sajikan kuahnya sebagai saus cocolan."]
  },
  {
    id: 221, title: "Ikan Goreng Sambal Matah", hewan: "ikan", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1541249969116-37207624921f?auto=format&fit=crop&w=800&q=80",
    tags: ["Bali", "Segar"], calories: 380, protein_val: 25, fat_val: 22, carbs_val: 10, price: "Rp 18.000",
    desc: "Ikan goreng disiram sambal mentah segar.", benefit: "Sehat tanpa santan.",
    ingredients: ["Ikan tongkol/kembung goreng", "Bawang merah iris", "Serai iris", "Cabai rawit", "Minyak panas"],
    cara: ["Campur irisan bumbu.", "Siram minyak panas & jeruk nipis.", "Taruh di atas ikan."]
  },
  {
    id: 222, title: "Udang Goreng Mentega", hewan: "udang", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    tags: ["Chinese Food", "Mewah"], calories: 300, protein_val: 20, fat_val: 15, carbs_val: 5, price: "Rp 25.000",
    desc: "Udang gurih manis.", benefit: "Protein.",
    ingredients: ["Udang", "Mentega", "Kecap manis/Inggris", "Bawang putih"],
    cara: ["Goreng udang sebentar.", "Tumis bumbu mentega.", "Aduk udang."]
  },
  {
    id: 223, title: "Ikan Pesmol Kuning", hewan: "ikan", nabati: "", sayur: "wortel", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=800&q=80",
    tags: ["Sunda", "Asam Segar"], calories: 400, protein_val: 25, fat_val: 18, carbs_val: 15, price: "Rp 20.000",
    desc: "Ikan bumbu kuning acar.", benefit: "Kunyit & cuka.",
    ingredients: ["Ikan goreng", "Bumbu kuning", "Wortel potong korek", "Cuka/Jeruk"],
    cara: ["Tumis bumbu kuning & wortel.", "Beri air & cuka.", "Masukkan ikan."]
  },
  {
    id: 224, title: "Tumis Udang Buncis", hewan: "udang", nabati: "", sayur: "buncis", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1603082260683-149b56f8a379?auto=format&fit=crop&w=800&q=80",
    tags: ["Sehat", "Cepat"], calories: 250, protein_val: 18, fat_val: 10, carbs_val: 10, price: "Rp 22.000",
    desc: "Sayur buncis manis dengan udang.", benefit: "Serat & Protein.",
    ingredients: ["Udang kupas", "Buncis iris serong", "Bawang putih", "Saus tiram"],
    cara: ["Tumis udang berubah warna.", "Masukkan buncis.", "Bumbui."]
  },
  {
    id: 225, title: "Pindang Tongkol Kuah", hewan: "ikan", nabati: "", sayur: "tomat", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1541249969116-37207624921f?auto=format&fit=crop&w=800&q=80",
    tags: ["Segar", "Diet"], calories: 200, protein_val: 25, fat_val: 5, carbs_val: 5, price: "Rp 15.000",
    desc: "Sup ikan asam pedas.", benefit: "Rendah lemak.",
    ingredients: ["Ikan tongkol", "Tomat", "Belimbing wuluh/Asam", "Cabai rawit utuh"],
    cara: ["Rebus air bumbu iris.", "Masukkan ikan & tomat.", "Masak sebentar."]
  },
  {
    id: 226, title: "Otak-Otak Goreng Ikan", hewan: "ikan", nabati: "", sayur: "", karbo: "",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Snack", "Frozen"], calories: 300, protein_val: 12, fat_val: 15, carbs_val: 20, price: "Rp 15.000",
    desc: "Camilan ikan gurih.", benefit: "Jajanan.",
    ingredients: ["Daging ikan/tenggiri", "Tapioka", "Bawang putih", "Putih telur"],
    cara: ["Blender bahan.", "Bentuk lonjong & rebus.", "Goreng saat mau dimakan."]
  },
  {
    id: 227, title: "Sarden Telur Dadar", hewan: "sarden", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    tags: ["Unik", "Hemat"], calories: 350, protein_val: 22, fat_val: 20, carbs_val: 10, price: "Rp 15.000",
    desc: "Daging sarden dicampur telur dadar.", benefit: "Protein padat.",
    ingredients: ["Sarden (hancurkan)", "2 Telur", "Daun bawang"],
    cara: ["Kocok telur & daging sarden.", "Dadar matang.", "Siram kuah sarden panas."]
  },
  {
    id: 228, title: "Udang Tempura (Goreng Tepung)", hewan: "udang", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    tags: ["Jepang", "Crispy"], calories: 350, protein_val: 18, fat_val: 20, carbs_val: 25, price: "Rp 25.000",
    desc: "Udang lurus goreng tepung.", benefit: "Favorit anak.",
    ingredients: ["Udang (kerat perut luruskan)", "Tepung bumbu/roti"],
    cara: ["Celup udang ke tepung.", "Goreng minyak panas."]
  },
  {
    id: 229, title: "Tumis Kerang Pedas", hewan: "ikan", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Seafood", "Pedas"], calories: 200, protein_val: 15, fat_val: 8, carbs_val: 10, price: "Rp 15.000",
    desc: "Kerang dara/kupas bumbu pedas.", benefit: "Zinc tinggi.",
    ingredients: ["Kerang kupas", "Cabai hijau/merah", "Jahe, laos", "Kecap manis"],
    cara: ["Tumis bumbu iris.", "Masukkan kerang.", "Bumbui kecap."]
  },

  // ==================== ANEKA SAPI & SOSIS (15 Resep) ====================
  {
    id: 16, title: "Perkedel Kentang Kornet", hewan: "sapi", nabati: "", sayur: "", karbo: "kentang",
    image: "https://images.unsplash.com/photo-1655610852024-e274a1cb5d37?auto=format&fit=crop&w=800&q=80",
    tags: ["Side Dish", "Kids"], calories: 300, protein_val: 10, fat_val: 18, carbs_val: 35, price: "Rp 15.000",
    desc: "Lauk pendamping soto.", benefit: "Energi.", ingredients: ["Kentang", "Kornet", "Telur"],
    cara: ["Haluskan kentang goreng.", "Campur kornet.", "Celup telur, goreng."]
  },
  {
    id: 108, title: "Tumis Buncis Sapi Cincang", hewan: "sapi", nabati: "", sayur: "buncis", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1603082260683-149b56f8a379?auto=format&fit=crop&w=800&q=80",
    tags: ["Chinese", "Crunchy"], calories: 350, protein_val: 15, fat_val: 20, carbs_val: 30, price: "Rp 20.000",
    desc: "Buncis ala Szechuan.", benefit: "Serat.", ingredients: ["Buncis", "Sapi/Kornet", "Bawang"],
    cara: ["Goreng buncis sebentar.", "Tumis daging.", "Campur."]
  },
  {
    id: 109, title: "Nasi Goreng Sosis", hewan: "sosis", nabati: "", sayur: "sawi", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1603133872878-684f108fd1f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Dinner", "Classic"], calories: 500, protein_val: 15, fat_val: 20, carbs_val: 65, price: "Rp 12.000",
    desc: "Nasi goreng kampung.", benefit: "Kenyang.", ingredients: ["Nasi", "Sosis", "Sawi", "Kecap"],
    cara: ["Tumis bumbu & sosis.", "Masak nasi goreng."]
  },
  {
    id: 110, title: "Sop Sosis Sayuran", hewan: "sosis", nabati: "", sayur: "wortel", karbo: "kentang",
    image: "https://images.unsplash.com/photo-1547592166-23acbe3a624b?auto=format&fit=crop&w=800&q=80",
    tags: ["Harian", "Segar"], calories: 250, protein_val: 10, fat_val: 10, carbs_val: 30, price: "Rp 15.000",
    desc: "Sop rumahan.", benefit: "Hidrasi.", ingredients: ["Sosis", "Wortel", "Kentang"],
    cara: ["Rebus air & sayur.", "Masukkan sosis."]
  },
  {
    id: 230, title: "Tumis Sosis Asam Manis", hewan: "sosis", nabati: "", sayur: "tomat", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1610446736444-6330ce148d42?auto=format&fit=crop&w=800&q=80",
    tags: ["Anak", "Cepat"], calories: 350, protein_val: 12, fat_val: 20, carbs_val: 20, price: "Rp 12.000",
    desc: "Sosis mekar saus tomat.", benefit: "Praktis.",
    ingredients: ["Sosis (kerat)", "Bawang bombay", "Saus tomat & sambal"],
    cara: ["Tumis sosis mekar.", "Masukkan saus & bombay.", "Beri air dikit."]
  },
  {
    id: 231, title: "Bakso Bakar Teflon", hewan: "sosis", nabati: "", sayur: "", karbo: "",
    image: "https://images.unsplash.com/photo-1529193591184-b1d580690dd0?auto=format&fit=crop&w=800&q=80",
    tags: ["Jajanan", "Pedas"], calories: 300, protein_val: 15, fat_val: 15, carbs_val: 20, price: "Rp 15.000",
    desc: "Bakso bumbu rujak bakar.", benefit: "Snack berat.",
    ingredients: ["Bakso sapi/ayam", "Kecap manis", "Saus sambal", "Margarin"],
    cara: ["Tusuk bakso.", "Oles bumbu.", "Bakar di teflon."]
  },
  {
    id: 232, title: "Sosis Gulung Mie", hewan: "sosis", nabati: "", sayur: "", karbo: "mie",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Bento", "Bekal"], calories: 400, protein_val: 12, fat_val: 20, carbs_val: 40, price: "Rp 10.000",
    desc: "Sosis dililit mie goreng.", benefit: "Lucu & enak.",
    ingredients: ["Sosis", "Mie instan rebus", "Minyak"],
    cara: ["Lilitkan mie ke sosis.", "Goreng deep fry."]
  },
  {
    id: 233, title: "Sapi Lada Hitam (Versi Kornet)", hewan: "sapi", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1541249969116-37207624921f?auto=format&fit=crop&w=800&q=80",
    tags: ["Hack", "Mewah"], calories: 350, protein_val: 15, fat_val: 25, carbs_val: 10, price: "Rp 18.000",
    desc: "Kornet dimasak ala blackpepper.", benefit: "Rasa mewah harga murah.",
    ingredients: ["Kornet sapi", "Bawang bombay", "Saus lada hitam", "Paprika/Cabai besar"],
    cara: ["Bentuk kornet bulat, goreng.", "Tumis bombay & saus.", "Campur kornet."]
  },
  {
    id: 234, title: "Kornet Goreng Tepung", hewan: "sapi", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1627308594248-18e0018d9f1e?auto=format&fit=crop&w=800&q=80",
    tags: ["Lauk", "Praktis"], calories: 300, protein_val: 12, fat_val: 20, carbs_val: 15, price: "Rp 12.000",
    desc: "Kornet crispy.", benefit: "Mudah.",
    ingredients: ["Kornet", "Telur", "Tepung bumbu", "Daun bawang"],
    cara: ["Campur semua bahan.", "Sendokkan ke minyak panas.", "Goreng."]
  },
  {
    id: 235, title: "Sup Bakso Tahu", hewan: "sosis", nabati: "tahu", sayur: "sawi", karbo: "",
    image: "https://images.unsplash.com/photo-1547592166-23acbe3a624b?auto=format&fit=crop&w=800&q=80",
    tags: ["Hangat", "Ringan"], calories: 200, protein_val: 15, fat_val: 10, carbs_val: 10, price: "Rp 15.000",
    desc: "Sup bening bakso.", benefit: "Protein.",
    ingredients: ["Bakso", "Tahu putih", "Sawi hijau", "Kaldu"],
    cara: ["Rebus air kaldu.", "Masukkan bakso & tahu.", "Terakhir sawi."]
  },
  {
    id: 236, title: "Tumis Sosis Sayuran (Capcay Sosis)", hewan: "sosis", nabati: "", sayur: "wortel", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1603082260683-149b56f8a379?auto=format&fit=crop&w=800&q=80",
    tags: ["Sehat", "Warna-warni"], calories: 300, protein_val: 10, fat_val: 15, carbs_val: 25, price: "Rp 15.000",
    desc: "Sayur campur sosis.", benefit: "Serat.",
    ingredients: ["Sosis", "Wortel, Buncis, Kol", "Bawang putih"],
    cara: ["Tumis bawang.", "Masak sayur.", "Masukkan sosis."]
  },
  {
    id: 237, title: "Bola Daging (Kornet) Balado", hewan: "sapi", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1541249969116-37207624921f?auto=format&fit=crop&w=800&q=80",
    tags: ["Pedas", "Awet"], calories: 350, protein_val: 15, fat_val: 20, carbs_val: 15, price: "Rp 18.000",
    desc: "Bola kornet sambal merah.", benefit: "Selera makan.",
    ingredients: ["Kornet goreng tepung (bola)", "Bumbu balado merah"],
    cara: ["Buat bola kornet.", "Tumis balado.", "Campur."]
  },
  {
    id: 238, title: "Roti Goreng Sosis (Roti Gulung)", hewan: "sosis", nabati: "", sayur: "", karbo: "roti",
    image: "https://images.unsplash.com/photo-1627308594248-18e0018d9f1e?auto=format&fit=crop&w=800&q=80",
    tags: ["Snack", "Bekal"], calories: 350, protein_val: 10, fat_val: 18, carbs_val: 30, price: "Rp 12.000",
    desc: "Roti tawar pipih isi sosis goreng.", benefit: "Karbo.",
    ingredients: ["Roti tawar (buang pinggir)", "Sosis", "Telur (perekat/celupan)", "Tepung panir"],
    cara: ["Pipihkan roti.", "Isi sosis, gulung.", "Celup telur & panir, goreng."]
  },
  {
    id: 239, title: "Tumis Sawi Bakso", hewan: "sosis", nabati: "", sayur: "sawi", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80",
    tags: ["Sayur", "Cepat"], calories: 200, protein_val: 12, fat_val: 10, carbs_val: 15, price: "Rp 10.000",
    desc: "Sayur sawi hijau tumis bakso.", benefit: "Serat.",
    ingredients: ["Sawi hijau", "Bakso iris", "Bawang putih"],
    cara: ["Tumis bawang.", "Masukkan bakso & sawi.", "Bumbui."]
  },
  {
    id: 240, title: "Corned Beef Hash (Tumis Kentang Kornet)", hewan: "sapi", nabati: "", sayur: "", karbo: "kentang",
    image: "https://images.unsplash.com/photo-1655610852024-e274a1cb5d37?auto=format&fit=crop&w=800&q=80",
    tags: ["Western", "Breakfast"], calories: 400, protein_val: 15, fat_val: 20, carbs_val: 35, price: "Rp 18.000",
    desc: "Tumisan kentang dadu dan kornet kering.", benefit: "Energi sarapan.",
    ingredients: ["Kentang rebus dadu", "Kornet", "Bawang bombay"],
    cara: ["Tumis bombay & kornet sampai kering.", "Masukkan kentang.", "Aduk rata sampai agak gosong dikit."]
  },

  // ==================== ANEKA TAHU TEMPE & NABATI (20 Resep) ====================
  { 
    id: 3, title: "Steak Tempe Blackpepper", hewan: "", nabati: "tempe", sayur: "wortel", karbo: "kentang", 
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegan", "Protein"], calories: 420, protein_val: 25, fat_val: 18, carbs_val: 40, price: "Rp 10.000", 
    desc: "Steak ala resto dari tempe.", benefit: "Rendah kolesterol.", ingredients: ["Tempe", "Kentang", "Wortel", "Saus lada hitam"], 
    cara: ["Panggang patty tempe.", "Siram saus."] 
  },
  { 
    id: 4, title: "Tahu Cabai Garam", hewan: "", nabati: "tahu", sayur: "", karbo: "nasi", 
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80",
    tags: ["Pedas", "Viral"], calories: 380, protein_val: 15, fat_val: 20, carbs_val: 45, price: "Rp 11.000", 
    desc: "Tahu crispy bawang cabai.", benefit: "Kalsium.", ingredients: ["Tahu", "Cabai", "Bawang putih", "Tepung"], 
    cara: ["Goreng tahu tepung.", "Tumis cabai bawang.", "Aduk."] 
  },
  { 
    id: 8, title: "Spaghetti Aglio Olio Tempe", hewan: "", nabati: "tempe", sayur: "brokoli", karbo: "pasta", 
    image: "https://images.unsplash.com/photo-1593361413861-1ac606992d42?auto=format&fit=crop&w=800&q=80", 
    tags: ["Fusion", "Vegetarian"], calories: 400, protein_val: 20, fat_val: 15, carbs_val: 50, price: "Rp 15.000", 
    desc: "Pasta mewah kearifan lokal.", benefit: "Isoflavon.", ingredients: ["Pasta", "Tempe", "Brokoli", "Bawang putih"], 
    cara: ["Rebus pasta.", "Tumis tempe & bumbu.", "Campur."] 
  },
  { 
    id: 11, title: "Bubur Kacang Hijau", hewan: "", nabati: "kacang", sayur: "", karbo: "", 
    image: "https://images.unsplash.com/photo-1587397750137-b6f8498877f8?auto=format&fit=crop&w=800&q=80", 
    tags: ["Dessert", "Fiber"], calories: 280, protein_val: 12, fat_val: 8, carbs_val: 45, price: "Rp 7.000", 
    desc: "Manis alami.", benefit: "Pencernaan.", ingredients: ["Kacang hijau", "Gula merah", "Santan"], 
    cara: ["Rebus kacang empuk.", "Masak santan gula."] 
  },
  { 
    id: 13, title: "Semur Tahu Kentang", hewan: "", nabati: "tahu", sayur: "", karbo: "kentang", 
    image: "https://images.unsplash.com/photo-1547470659-c2998a69a239?auto=format&fit=crop&w=800&q=80", 
    tags: ["Manis", "Tradisional"], calories: 330, protein_val: 16, fat_val: 10, carbs_val: 45, price: "Rp 12.000", 
    desc: "Kuah kecap rempah.", benefit: "Nabati.", ingredients: ["Tahu", "Kentang", "Kecap manis"], 
    cara: ["Tumis bumbu.", "Rebus tahu kentang kecap."] 
  },
  {
    id: 20, title: "Jamur Crispy Asam Manis", hewan: "", nabati: "jamur", sayur: "wortel", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegan", "Chinese"], calories: 320, protein_val: 10, fat_val: 16, carbs_val: 45, price: "Rp 14.000",
    desc: "Jamur goreng saus.", benefit: "Pengganti daging.", ingredients: ["Jamur tiram", "Tepung", "Saus tomat"],
    cara: ["Goreng jamur.", "Siram saus."]
  },
  {
    id: 111, title: "Orek Tempe Basah", hewan: "", nabati: "tempe", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&w=800&q=80",
    tags: ["Warteg", "Awet"], calories: 300, protein_val: 18, fat_val: 12, carbs_val: 40, price: "Rp 6.000",
    desc: "Lauk sejuta umat.", benefit: "Probiotik.", ingredients: ["Tempe", "Kecap", "Cabai"],
    cara: ["Goreng tempe.", "Masak kecap air."]
  },
  {
    id: 112, title: "Tumis Tahu Tauge", hewan: "", nabati: "tahu", sayur: "tomat", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80",
    tags: ["Segar", "Diet"], calories: 200, protein_val: 12, fat_val: 8, carbs_val: 20, price: "Rp 8.000",
    desc: "Tumisan cepat.", benefit: "Rendah kalori.", ingredients: ["Tahu", "Tauge", "Kucai"],
    cara: ["Goreng tahu.", "Tumis tauge cepat."]
  },
  {
    id: 113, title: "Pepes Tahu Jamur", hewan: "telur", nabati: "tahu", sayur: "tomat", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1547470659-c2998a69a239?auto=format&fit=crop&w=800&q=80",
    tags: ["Kukus", "Sehat"], calories: 220, protein_val: 15, fat_val: 8, carbs_val: 20, price: "Rp 10.000",
    desc: "Tahu kukus rempah.", benefit: "Tanpa minyak.", ingredients: ["Tahu", "Jamur", "Telur", "Kemangi"],
    cara: ["Campur semua.", "Kukus."]
  },
  {
    id: 241, title: "Tempe Mendoan", hewan: "", nabati: "tempe", sayur: "", karbo: "",
    image: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&w=800&q=80",
    tags: ["Gorengan", "Snack"], calories: 250, protein_val: 10, fat_val: 15, carbs_val: 20, price: "Rp 5.000",
    desc: "Tempe tepung setengah matang.", benefit: "Enak.",
    ingredients: ["Tempe iris tipis", "Tepung terigu & beras", "Daun bawang", "Bumbu halus ketumbar"],
    cara: ["Celup tempe ke adonan.", "Goreng sebentar (mendo)."]
  },
  {
    id: 242, title: "Sambal Tempe Penyet", hewan: "", nabati: "tempe", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&w=800&q=80",
    tags: ["Pedas", "Lauk"], calories: 300, protein_val: 15, fat_val: 12, carbs_val: 25, price: "Rp 6.000",
    desc: "Tempe goreng dipenyet sambal terasi.", benefit: "Selera makan.",
    ingredients: ["Tempe goreng", "Sambal terasi/bawang"],
    cara: ["Ulek sambal.", "Penyet tempe di cobek."]
  },
  {
    id: 243, title: "Tahu Gejrot", hewan: "", nabati: "tahu", sayur: "", karbo: "",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80",
    tags: ["Cirebon", "Pedas"], calories: 200, protein_val: 10, fat_val: 8, carbs_val: 25, price: "Rp 8.000",
    desc: "Tahu pong kuah asam pedas.", benefit: "Segar.",
    ingredients: ["Tahu pong/sumedang", "Gula merah, asam, kecap", "Cabai rawit, bawang merah"],
    cara: ["Ulek kasar bumbu.", "Siram kuah gula asam.", "Potong tahu."]
  },
  {
    id: 244, title: "Nugget Tempe", hewan: "telur", nabati: "tempe", sayur: "wortel", karbo: "",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Awet", "Bekal"], calories: 280, protein_val: 15, fat_val: 12, carbs_val: 20, price: "Rp 8.000",
    desc: "Tempe giling dibentuk nugget.", benefit: "Protein nabati enak.",
    ingredients: ["Tempe kukus haluskan", "Wortel parut", "Telur", "Tepung panir"],
    cara: ["Campur tempe, wortel, telur, bumbu.", "Kukus di loyang.", "Potong, celup panir, goreng."]
  },
  {
    id: 245, title: "Tumis Jamur Tiram Pedas", hewan: "", nabati: "jamur", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?auto=format&fit=crop&w=800&q=80",
    tags: ["Pedas", "Kenyal"], calories: 150, protein_val: 5, fat_val: 8, carbs_val: 10, price: "Rp 10.000",
    desc: "Jamur suwir tumis cabai.", benefit: "Serat.",
    ingredients: ["Jamur tiram suwir", "Cabai", "Bawang"],
    cara: ["Tumis bumbu.", "Masukkan jamur.", "Masak sampai layu."]
  },
  {
    id: 246, title: "Tahu Walik (Kulit Tahu)", hewan: "ayam", nabati: "tahu", sayur: "", karbo: "",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80",
    tags: ["Jajanan", "Crispy"], calories: 350, protein_val: 15, fat_val: 20, carbs_val: 25, price: "Rp 15.000",
    desc: "Tahu dibalik isi adonan ayam/aci.", benefit: "Crispy.",
    ingredients: ["Tahu pong (balik kulitnya)", "Adonan ayam/tepung kanji"],
    cara: ["Balik tahu.", "Isi adonan.", "Goreng garing."]
  },
  {
    id: 247, title: "Mapo Tofu (Tahu Pedas)", hewan: "sapi", nabati: "tahu", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80",
    tags: ["Chinese", "Pedas"], calories: 380, protein_val: 20, fat_val: 20, carbs_val: 20, price: "Rp 25.000",
    desc: "Tahu sutra masak daging cincang pedas.", benefit: "Lembut.",
    ingredients: ["Tahu sutra/putih", "Daging cincang", "Saus sambal/doubanjiang", "Minyak cabai"],
    cara: ["Tumis daging.", "Masukkan bumbu pedas & air.", "Masukkan tahu pelan-pelan."]
  },
  {
    id: 248, title: "Tempe Orek Kering (Kacang)", hewan: "", nabati: "tempe", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&w=800&q=80",
    tags: ["Awet", "Stok"], calories: 350, protein_val: 15, fat_val: 18, carbs_val: 30, price: "Rp 10.000",
    desc: "Tempe potong korek goreng kering manis.", benefit: "Tahan lama.",
    ingredients: ["Tempe goreng kering", "Kacang tanah goreng", "Gula merah", "Air asam"],
    cara: ["Masak gula merah & bumbu sampai berkaramel (rambut nenek).", "Matikan api, masukkan tempe & kacang.", "Aduk cepat."]
  },
  {
    id: 249, title: "Sate Jamur Tiram", hewan: "", nabati: "jamur", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegan", "Bakar"], calories: 200, protein_val: 8, fat_val: 5, carbs_val: 20, price: "Rp 12.000",
    desc: "Sate dari jamur.", benefit: "Mirip ayam.",
    ingredients: ["Jamur tiram (rebus sebentar peras airnya)", "Bumbu kecap kacang"],
    cara: ["Tusuk jamur.", "Bakar oles kecap.", "Sajikan bumbu kacang."]
  },

  // ==================== ANEKA SAYUR MAYUR (15 Resep) ====================
  { 
    id: 12, title: "Capcay Kuah Telur Puyuh", hewan: "telur", nabati: "jamur", sayur: "wortel", karbo: "", 
    image: "https://images.unsplash.com/photo-1662973747190-6718d055416c?auto=format&fit=crop&w=800&q=80", 
    tags: ["Vitamin", "Family"], calories: 250, protein_val: 14, fat_val: 10, carbs_val: 18, price: "Rp 15.000", 
    desc: "Sayur lengkap kuah kental.", benefit: "Multivitamin.", ingredients: ["Wortel", "Sawi", "Telur puyuh", "Jamur"], 
    cara: ["Tumis bawang.", "Masak sayur.", "Kentalkan."] 
  },
  { 
    id: 14, title: "Oseng Buncis Udang", hewan: "udang", nabati: "tempe", sayur: "buncis", karbo: "nasi", 
    image: "https://images.unsplash.com/photo-1603082260683-149b56f8a379?auto=format&fit=crop&w=800&q=80", 
    tags: ["Seafood", "Fiber"], calories: 310, protein_val: 22, fat_val: 12, carbs_val: 30, price: "Rp 25.000", 
    desc: "Buncis crunchy udang manis.", benefit: "Yodium.", ingredients: ["Udang", "Buncis", "Tempe"], 
    cara: ["Tumis udang.", "Masukkan buncis."] 
  },
  {
    id: 18, title: "Tumis Kangkung Terasi", hewan: "", nabati: "", sayur: "kangkung", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Classic", "Fiber"], calories: 150, protein_val: 5, fat_val: 8, carbs_val: 10, price: "Rp 5.000",
    desc: "Menu wajib warteg.", benefit: "Zat besi.", ingredients: ["Kangkung", "Terasi"],
    cara: ["Tumis terasi.", "Masak kangkung cepat."]
  },
  {
    id: 114, title: "Sayur Bening Bayam", hewan: "", nabati: "", sayur: "bayam", karbo: "",
    image: "https://images.unsplash.com/photo-1576021182211-9ea8dced3690?auto=format&fit=crop&w=800&q=80",
    tags: ["Segar", "Ringan"], calories: 100, protein_val: 4, fat_val: 1, carbs_val: 20, price: "Rp 6.000",
    desc: "Sayur paling segar.", benefit: "Hidrasi.", ingredients: ["Bayam", "Jagung", "Kunci"],
    cara: ["Rebus jagung.", "Masukkan bayam sebentar."]
  },
  {
    id: 115, title: "Terong Balado Teri", hewan: "ikan", nabati: "", sayur: "terong", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1518596647976-574d6d678733?auto=format&fit=crop&w=800&q=80",
    tags: ["Pedas", "Nafsu Makan"], calories: 300, protein_val: 10, fat_val: 20, carbs_val: 25, price: "Rp 12.000",
    desc: "Pedas gurih asin.", benefit: "Kalsium teri.", ingredients: ["Terong", "Teri", "Sambal"],
    cara: ["Goreng terong & teri.", "Tumis sambal."]
  },
  {
    id: 250, title: "Sayur Asem Jakarta", hewan: "", nabati: "kacang", sayur: "labu", karbo: "",
    image: "https://images.unsplash.com/photo-1576021182211-9ea8dced3690?auto=format&fit=crop&w=800&q=80",
    tags: ["Segar", "Betawi"], calories: 150, protein_val: 8, fat_val: 2, carbs_val: 25, price: "Rp 10.000",
    desc: "Kuah asam segar dengan kacang tanah.", benefit: "Vitamin.",
    ingredients: ["Labu siam", "Kacang panjang", "Jagung", "Asam jawa", "Kacang tanah"],
    cara: ["Rebus air bumbu halus.", "Masukkan sayuran keras.", "Terakhir daun melinjo (jika ada)."]
  },
  {
    id: 251, title: "Sayur Lodeh (Santan)", hewan: "", nabati: "tempe", sayur: "terong", karbo: "",
    image: "https://images.unsplash.com/photo-1576021182211-9ea8dced3690?auto=format&fit=crop&w=800&q=80",
    tags: ["Santan", "Gurih"], calories: 250, protein_val: 8, fat_val: 15, carbs_val: 20, price: "Rp 12.000",
    desc: "Sayur kuah santan putih/kuning.", benefit: "Lemak sehat.",
    ingredients: ["Labu siam/pepaya muda", "Terong", "Tempe", "Santan"],
    cara: ["Rebus santan bumbu.", "Masukkan sayuran."]
  },
  {
    id: 252, title: "Pecel Sayur (Bumbu Jadi)", hewan: "telur", nabati: "tahu", sayur: "bayam", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    tags: ["Sehat", "Tradisional"], calories: 400, protein_val: 15, fat_val: 15, carbs_val: 50, price: "Rp 10.000",
    desc: "Salad Jawa dengan bumbu kacang.", benefit: "Serat tinggi.",
    ingredients: ["Bayam rebus", "Tauge rebus", "Kacang panjang", "Bumbu pecel instan"],
    cara: ["Rebus semua sayuran.", "Seduh bumbu pecel.", "Siram."]
  },
  {
    id: 253, title: "Urap Sayur", hewan: "", nabati: "", sayur: "bayam", karbo: "",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    tags: ["Kelapa", "Sehat"], calories: 200, protein_val: 5, fat_val: 10, carbs_val: 20, price: "Rp 8.000",
    desc: "Sayur rebus campur kelapa parut bumbu.", benefit: "Serat.",
    ingredients: ["Bayam", "Tauge", "Kelapa parut", "Bumbu halus (kencur, cabai)"],
    cara: ["Kukus kelapa dengan bumbu.", "Campur ke sayuran rebus."]
  },
  {
    id: 254, title: "Tumis Labu Siam Telur", hewan: "telur", nabati: "", sayur: "labu", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&w=800&q=80",
    tags: ["Diet", "Simpel"], calories: 180, protein_val: 10, fat_val: 10, carbs_val: 15, price: "Rp 8.000",
    desc: "Labu siam potong korek tumis.", benefit: "Rendah kalori.",
    ingredients: ["Labu siam", "Telur", "Bawang putih"],
    cara: ["Tumis bawang.", "Masukkan telur arik.", "Masukkan labu."]
  },
  {
    id: 255, title: "Tumis Pare Teri (Tips Tidak Pahit)", hewan: "ikan", nabati: "", sayur: "pare", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Pahit", "Obat"], calories: 200, protein_val: 12, fat_val: 10, carbs_val: 15, price: "Rp 10.000",
    desc: "Pare tumis teri.", benefit: "Menurunkan gula darah.",
    ingredients: ["Pare (remas garam cuci bersih)", "Teri goreng", "Cabai"],
    cara: ["Tumis bumbu.", "Masukkan pare.", "Terakhir teri."]
  },
  {
    id: 256, title: "Plecing Kangkung", hewan: "", nabati: "", sayur: "kangkung", karbo: "",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Lombok", "Pedas"], calories: 100, protein_val: 3, fat_val: 5, carbs_val: 10, price: "Rp 5.000",
    desc: "Kangkung rebus sambal tomat terasi.", benefit: "Segar.",
    ingredients: ["Kangkung rebus", "Sambal (tomat, terasi, cabai)", "Kacang tanah goreng (toping)"],
    cara: ["Rebus kangkung.", "Taruh sambal di atasnya.", "Tabur kacang."]
  },
  {
    id: 257, title: "Tumis Kacang Panjang Tempe", hewan: "", nabati: "tempe", sayur: "kacang", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1603082260683-149b56f8a379?auto=format&fit=crop&w=800&q=80",
    tags: ["Harian", "Murah"], calories: 250, protein_val: 12, fat_val: 10, carbs_val: 25, price: "Rp 7.000",
    desc: "Sayur rumahan klasik.", benefit: "Serat.",
    ingredients: ["Kacang panjang", "Tempe dadu", "Kecap manis"],
    cara: ["Goreng tempe 1/2 matang.", "Tumis bumbu & kacang panjang.", "Campur tempe & kecap."]
  },
  {
    id: 258, title: "Brokoli Cah Bawang Putih", hewan: "", nabati: "", sayur: "brokoli", karbo: "",
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=800&q=80",
    tags: ["Resto", "Sehat"], calories: 100, protein_val: 5, fat_val: 5, carbs_val: 10, price: "Rp 10.000",
    desc: "Tumis brokoli simpel ala resto.", benefit: "Antioksidan.",
    ingredients: ["Brokoli", "Bawang putih cincang banyak", "Minyak wijen"],
    cara: ["Rebus brokoli sebentar.", "Tumis bawang sampai emas.", "Siram ke brokoli."]
  },
  {
    id: 259, title: "Gado-Gado (Simple)", hewan: "telur", nabati: "tahu", sayur: "bayam", karbo: "kentang",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    tags: ["Salad", "Kenyang"], calories: 450, protein_val: 20, fat_val: 20, carbs_val: 50, price: "Rp 15.000",
    desc: "Sayur rebus, tahu, tempe, telur bumbu kacang.", benefit: "Gizi lengkap.",
    ingredients: ["Sayuran rebus", "Tahu tempe goreng", "Telur rebus", "Bumbu gado-gado blok"],
    cara: ["Tata semua bahan.", "Siram bumbu kacang."]
  },

  // ==================== ANEKA KARBO & LAINNYA (15 Resep) ====================
  { 
    id: 9, title: "Bubur Oatmeal Gurih", hewan: "telur", nabati: "", sayur: "bayam", karbo: "oat", 
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80", 
    tags: ["Breakfast", "Diet"], calories: 320, protein_val: 18, fat_val: 12, carbs_val: 40, price: "Rp 8.000", 
    desc: "Bubur oat asin.", benefit: "Jantung.", ingredients: ["Oatmeal", "Telur", "Bayam", "Kaldu"], 
    cara: ["Seduh oat.", "Topping telur."] 
  },
  {
    id: 19, title: "Bihun Goreng Kampung", hewan: "telur", nabati: "", sayur: "sawi", karbo: "bihun",
    image: "https://images.unsplash.com/photo-1626804475297-411dbe66f076?auto=format&fit=crop&w=800&q=80",
    tags: ["Dinner", "Carbo"], calories: 410, protein_val: 14, fat_val: 15, carbs_val: 60, price: "Rp 12.000",
    desc: "Bihun kecap.", benefit: "Energi.", ingredients: ["Bihun", "Telur", "Sawi", "Kecap"],
    cara: ["Tumis bumbu telur.", "Masukkan bihun."]
  },
  {
    id: 116, title: "Nasi Goreng Kencur", hewan: "telur", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1603133872878-684f108fd1f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Sunda", "Wangi"], calories: 450, protein_val: 12, fat_val: 15, carbs_val: 60, price: "Rp 8.000",
    desc: "Nasgor aroma kencur.", benefit: "Hangat.", ingredients: ["Nasi", "Kencur", "Telur"],
    cara: ["Ulek kencur.", "Masak nasgor."]
  },
  {
    id: 117, title: "Mie Tek-Tek Kuah", hewan: "telur", nabati: "", sayur: "kol", karbo: "mie",
    image: "https://images.unsplash.com/photo-1612530188095-2c8135832711?auto=format&fit=crop&w=800&q=80",
    tags: ["Hujan", "Pedas"], calories: 480, protein_val: 15, fat_val: 18, carbs_val: 55, price: "Rp 10.000",
    desc: "Mie kuah abang-abang.", benefit: "Kenyang.", ingredients: ["Mie", "Telur", "Sayur"],
    cara: ["Tumis bumbu.", "Rebus mie & telur."]
  },
  {
    id: 118, title: "Kentang Goreng Bolognese", hewan: "sapi", nabati: "", sayur: "", karbo: "kentang",
    image: "https://images.unsplash.com/photo-1573080496987-a199f8cd4054?auto=format&fit=crop&w=800&q=80",
    tags: ["Snack", "Western"], calories: 400, protein_val: 12, fat_val: 20, carbs_val: 45, price: "Rp 20.000",
    desc: "Fries saus daging.", benefit: "Snack.", ingredients: ["Kentang", "Saus bolognese"],
    cara: ["Goreng kentang.", "Siram saus."]
  },
  {
    id: 260, title: "Nasi Kuning Rice Cooker", hewan: "", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    tags: ["Sarapan", "Wangi"], calories: 300, protein_val: 5, fat_val: 10, carbs_val: 50, price: "Rp 5.000",
    desc: "Nasi kuning praktis.", benefit: "Karbo enak.",
    ingredients: ["Beras", "Santan instan", "Kunyit bubuk", "Serai daun salam"],
    cara: ["Cuci beras.", "Masukkan semua bahan ke rice cooker.", "Masak seperti nasi biasa."]
  },
  {
    id: 261, title: "Nasi Uduk Rice Cooker", hewan: "", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    tags: ["Sarapan", "Gurih"], calories: 300, protein_val: 5, fat_val: 10, carbs_val: 50, price: "Rp 5.000",
    desc: "Nasi uduk wangi santan.", benefit: "Energi.",
    ingredients: ["Beras", "Santan", "Salam", "Garam"],
    cara: ["Masak di rice cooker."]
  },
  {
    id: 262, title: "Mie Goreng Jawa", hewan: "ayam", nabati: "", sayur: "kol", karbo: "mie",
    image: "https://images.unsplash.com/photo-1612530188095-2c8135832711?auto=format&fit=crop&w=800&q=80",
    tags: ["Manis", "Jawa"], calories: 450, protein_val: 18, fat_val: 15, carbs_val: 60, price: "Rp 15.000",
    desc: "Mie goreng basah manis.", benefit: "Kenyang.",
    ingredients: ["Mie telor basah/kuning", "Ayam suwir", "Kecap manis", "Kol, Sawi"],
    cara: ["Tumis bumbu kemiri.", "Masukkan mie & kecap.", "Beri sedikit air biar nyemek."]
  },
  {
    id: 263, title: "Mie Dok Dok (Burjo)", hewan: "telur", nabati: "", sayur: "sawi", karbo: "mie",
    image: "https://images.unsplash.com/photo-1612530188095-2c8135832711?auto=format&fit=crop&w=800&q=80",
    tags: ["Burjo", "Malam"], calories: 400, protein_val: 12, fat_val: 15, carbs_val: 50, price: "Rp 8.000",
    desc: "Mie kuah kental telur ala warkop.", benefit: "Hangat.",
    ingredients: ["Mie instan", "Telur", "Sawi", "Kecap"],
    cara: ["Tumis bumbu.", "Rebus mie.", "Masukkan telur dikocok biar kuah kental."]
  },
  {
    id: 264, title: "Kwetiau Goreng Telur", hewan: "telur", nabati: "", sayur: "sawi", karbo: "mie",
    image: "https://images.unsplash.com/photo-1612530188095-2c8135832711?auto=format&fit=crop&w=800&q=80",
    tags: ["Chinese", "Cepat"], calories: 420, protein_val: 12, fat_val: 18, carbs_val: 55, price: "Rp 10.000",
    desc: "Kwetiau goreng simpel.", benefit: "Kenyang.",
    ingredients: ["Kwetiau basah", "Telur", "Bawang putih", "Kecap asin manis"],
    cara: ["Orak arik telur.", "Masukkan kwetiau & bumbu.", "Masak api besar."]
  },
  {
    id: 265, title: "Roti Bakar Telur Keju", hewan: "telur", nabati: "", sayur: "", karbo: "roti",
    image: "https://images.unsplash.com/photo-1525351440155-ad29113d5839?auto=format&fit=crop&w=800&q=80",
    tags: ["Sarapan", "Cheesy"], calories: 350, protein_val: 15, fat_val: 18, carbs_val: 30, price: "Rp 10.000",
    desc: "Toast gurih.", benefit: "Kalsium.",
    ingredients: ["Roti tawar", "Telur dadar", "Keju slice/parut"],
    cara: ["Buat sandwich.", "Panggang di teflon dengan mentega."]
  },
  {
    id: 266, title: "Pizza Roti Tawar", hewan: "sosis", nabati: "", sayur: "tomat", karbo: "roti",
    image: "https://images.unsplash.com/photo-1619623067140-5e5d3269a840?auto=format&fit=crop&w=800&q=80",
    tags: ["Snack", "Pizza"], calories: 300, protein_val: 10, fat_val: 12, carbs_val: 35, price: "Rp 12.000",
    desc: "Pizza mini praktis.", benefit: "Seru.",
    ingredients: ["Roti tawar", "Saus tomat/bolognese", "Sosis", "Keju melt"],
    cara: ["Oles saus di roti.", "Tata toping.", "Panggang di teflon tutup sebentar sampai keju leleh."]
  },
  {
    id: 267, title: "Nasi Gila (Sosis Bakso)", hewan: "sosis", nabati: "", sayur: "kol", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1603133872878-684f108fd1f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Jajanan", "Malam"], calories: 500, protein_val: 18, fat_val: 20, carbs_val: 60, price: "Rp 15.000",
    desc: "Tumisan sosis bakso pedas manis dimakan pakai nasi.", benefit: "Kenyang pol.",
    ingredients: ["Nasi putih", "Sosis & Bakso iris", "Telur arik", "Kecap manis pedas"],
    cara: ["Tumis semua bahan isian dengan kecap.", "Sajikan di atas nasi hangat."]
  },
  {
    id: 268, title: "Setup Roti Tawar Keju", hewan: "", nabati: "", sayur: "", karbo: "roti",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    tags: ["Dessert", "Dingin"], calories: 300, protein_val: 8, fat_val: 10, carbs_val: 40, price: "Rp 12.000",
    desc: "Dessert roti kuah susu santan.", benefit: "Manis lembut.",
    ingredients: ["Roti tawar", "Susu cair", "Santan", "Keju parut"],
    cara: ["Masak susu santan gula.", "Siram ke roti.", "Dinginkan di kulkas."]
  },
  {
    id: 269, title: "French Toast", hewan: "telur", nabati: "", sayur: "", karbo: "roti",
    image: "https://images.unsplash.com/photo-1525351440155-ad29113d5839?auto=format&fit=crop&w=800&q=80",
    tags: ["Sweet", "Breakfast"], calories: 300, protein_val: 10, fat_val: 12, carbs_val: 35, price: "Rp 8.000",
    desc: "Roti celup telur susu goreng mentega.", benefit: "Klasik.",
    ingredients: ["Roti tawar", "Telur kocok", "Susu/Air", "Gula kayu manis"],
    cara: ["Celup roti.", "Panggang mentega."]
  },
  {
    id: 270, title: "Bubur Ayam Rice Cooker", hewan: "ayam", nabati: "", sayur: "", karbo: "nasi",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    tags: ["Sarapan", "Sakit"], calories: 300, protein_val: 15, fat_val: 8, carbs_val: 45, price: "Rp 10.000",
    desc: "Bubur ayam tanpa diaduk terus.", benefit: "Mudah.",
    ingredients: ["Beras (cuci bersih)", "Air kaldu/banyak air", "Ayam (rebus bareng)", "Garam jahe"],
    cara: ["Masak di rice cooker dengan air 4-5x lipat beras.", "Tunggu jadi bubur."]
  }
];
