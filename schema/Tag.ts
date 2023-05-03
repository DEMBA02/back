import { text, relationship, password, timestamp, select, integer, } from "@keystone-6/core/fields";
import { allowAll } from '@keystone-6/core/access';

export default {
  access: allowAll,
    ui: {
      isHidden: true,
    },
    fields: {
      name: text(),
      posts: relationship({ ref: 'Post.tags', many: true }),
    },
};