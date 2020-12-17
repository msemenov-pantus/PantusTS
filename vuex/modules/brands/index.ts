import {
  Module,
  VuexModule,
  VuexMutation,
} from 'nuxt-property-decorator'
import  {TypeBrandVuex} from "@/vuex/modules/brands/type"
@Module({
  name: '/brands',
  namespaced: true,
  stateFactory: true,
})
export default class Brand extends VuexModule{
  brand: TypeBrandVuex[] = [];
  @VuexMutation
  SetBrand(data:TypeBrandVuex[]){
    this.brand = data;
  }
}
