import factory from '/js/Utils/ComponentFactory.js';
import mixin from '/js/store/people/mixin.js';

export default factory({
    name: 'home',
    path: '/js/Components/People/Edit.html',
    vue: {
        props: {
            id:{
                type: String,
                required: false
            }
        },
        mixins: [mixin],
        data() {
            return {
                loading: true,
                person: null,
                submitting: false,
            };
        },
        computed: {
            hasErrors () {
                return this.errors.any();
            },
            canSave () {
                return !this.hasErrors && !this.submitting && this.isFormDirty;
            }
        },
        methods:{
            save(){
                this.validateAll().then(() => {
                    this.mergeEntity(this.person).then(() => this.$router.go(-1))
                });
            }
        },
        mounted() {
            if(!this.id){
                this.person = {};
                this.loading = false;
                return;
            }

            this.loading = true;

            this.getById(this.id)
                .then(x => {
                    this.person = x;
                    this.loading = false;
                });
        }
    }
});
