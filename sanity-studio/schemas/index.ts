import {type SchemaTypeDefinition} from 'sanity'
import storeSettings from './storeSettings'
import branch from './branch'
import product from './product'
export const schemaTypes: SchemaTypeDefinition[] = [storeSettings, branch, product]
