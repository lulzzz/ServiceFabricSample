﻿export default function (opts)
{
    return Vue.component(opts.name,
        (resolve, reject) => {
            axios.get(opts.path)
                .then(x => {
                    const component = {
                        template: x.data
                    };

                    resolve(Object.assign({}, component, opts.vue));
                })
                .catch(e => {
                    console.error(e);
                    reject(e);
                });
        });
}