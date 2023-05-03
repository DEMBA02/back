import { text, relationship,select, integer, } from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

export default {
  access: allowAll,
  fields: {
    libelle: text({ validation: { isRequired: true } }),
    chemins: relationship({ref: 'Chemin', many: true}),

  },
};