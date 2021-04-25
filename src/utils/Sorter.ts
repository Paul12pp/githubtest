const Sorter = (arry: any[], key: string,type:string)=> {
    console.log('sort aqui',type)
    return arry.sort(function (a, b) {
        // if(type=="sort-up"){
            return 0;
        // }else{
            // return 1;
        // }
        // if (a[key] < b[key]) {
        //     return 1;
        // }
        // if (a[key] > b[key]) {
        //     return -1;
        // }
        // return 0;
    });

}
export default Sorter;