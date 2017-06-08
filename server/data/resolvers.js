import { Channel, FortuneCookie } from './connectors';

const resolvers = {
    Query: {
        author(root, args) {
            return {id: 1, firstName: 'Hello', lastName: 'World'};
        },
        channels(_, args) {
            return Channel.findAll({where: args});
        },
        getFortuneCookie(root, args) {
            return FortuneCookie.getOne();
        },
        // channels(root, args) {
        //     return [
        //         { id: 1, name: 'Hello' },
        //         { id: 2, name: 'World' },
        //     ]
        // }
    },
    Author: {
        posts(author) {
            return [
                {
                    id: 1,
                    title: 'A post',
                    text: 'Some text',
                    views: 2
                }, {
                    id: 2,
                    title: 'Another post',
                    text: 'Some other text',
                    views: 200
                }
            ];
        }
    },
    Post: {
        author(post) {
            return { id: 1, firstName: 'Hello', lastName: 'World' };
        }
    }
};

export default resolvers;
