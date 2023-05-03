import { image, select, text, relationship,file} from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';
import User from "./User";


export default{
  access: allowAll,
  fields: {
    ...User.fields,
    permis: text(),
    trajets: relationship({ref: 'Trajet', many: true}),
    posts: relationship({ ref: 'Post.author', many: true }),
  
  },
};
