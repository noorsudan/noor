import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
export default defineConfig({name:'noor-studio',title:'لوحة تحكم متجر نور',projectId:process.env.SANITY_STUDIO_PROJECT_ID || '75hfac4o',dataset:'production',plugins:[structureTool(),visionTool()],schema:{types:schemaTypes}})
