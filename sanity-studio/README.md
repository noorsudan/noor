# لوحة تحكم متجر نور (Sanity Studio)

هذه لوحة منفصلة لا تظهر للزبائن. المالك يدخل إليها بحساب Sanity ويعدل الفروع والمنتجات ورقم واتساب.

## التشغيل
```bash
cd sanity-studio
npm install
export SANITY_STUDIO_PROJECT_ID="معرف مشروع Sanity"
npm run dev
```
ثم افتح الرابط الذي يظهر (غالباً http://localhost:3333).

## النشر للمالك
```bash
npm run deploy
```
اختر اسم نطاق مثل `noor-store`، ثم شارك رابط Sanity Studio مع صاحب المتجر. أضف حسابه من Sanity Manage > Members.
