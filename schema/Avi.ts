import { text, relationship,select, integer, float, decimal, } from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

export default {
  access: allowAll,
  fields: {
    note: decimal({ validation: { isRequired: true } }),
    reste: decimal({ validation: { isRequired: true } }),
    user: relationship({ref: 'User', many: false}),
    trajet: relationship({ref: 'Trajet', many: false}), 
  },
};