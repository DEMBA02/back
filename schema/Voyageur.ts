import { text, relationship, select } from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';
import User from "./User";

export default {
  access: allowAll,
  fields: {
    ...User.fields,
    reservations: relationship({ref: 'Reservation', many: true}),
    
  },
};