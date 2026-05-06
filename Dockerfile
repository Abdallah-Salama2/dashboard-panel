# 1. بنقول لدوكر استخدم نسخة Node خفيفة
FROM node:20-alpine
# 2. بنحدد الفولدر اللي هنشتغل جواه جوه الكرتونة
WORKDIR /app

# 3. بننقل ملفات الـ package عشان نسطب المكتبات
COPY package*.json ./

# 4. بنسطب المكتبات
RUN npm install

# 5. بننقل باقي ملفات المشروع كلها
COPY . .

# 6. بنفتح بورت 5173 (البورت بتاع Vite)
EXPOSE 5173

# 7. الأمر اللي بيشغل المشروع
CMD ["npx", "json-server", "--watch", "db.json", "--port", "5000", "--host", "0.0.0.0", "--cors"]