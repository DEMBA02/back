import { text, relationship,select, integer, timestamp, float, } from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

export default {
  access: allowAll,
  fields: {
    duree: timestamp({ validation: { isRequired: true } }),
    peage: text({ validation: { isRequired: true } }),
    estimation_prix: float({ validation: { isRequired: true } }),
    trajets: relationship({ref: 'Trajet', many: true}),
    autoroutes: relationship({ref: 'Autoroute', many: true}),
  },
};