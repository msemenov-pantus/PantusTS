import {TypeCategoriesFilterVuex} from "~/store/categories/categories-type";
export function CategoriesCheckedTrue(store: any) {

  const CategoriesCheckedTrue = (data:TypeCategoriesFilterVuex, arrTrue: number[]= []) =>{
    if(data.checkedType || data.indeterminate){
      if(data.checkedType){
        arrTrue.push(data.id);
      }
      data.children.forEach( element => {
        if (element.children.length !== 0) {
          CategoriesCheckedTrue(element, arrTrue);
        }
      })
    }
  }

  return { CategoriesCheckedTrue};
}
