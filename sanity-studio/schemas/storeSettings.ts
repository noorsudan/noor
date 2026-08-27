import {defineType,defineField} from 'sanity'
export default defineType({name:'storeSettings',title:'إعدادات المتجر',type:'document',fields:[defineField({name:'storeName',title:'اسم المتجر',type:'string'}),defineField({name:'whatsappNumber',title:'رقم واتساب مع مفتاح الدولة بدون +',type:'string',validation:r=>r.required()})]})
