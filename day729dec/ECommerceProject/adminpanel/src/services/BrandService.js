import packageJson from '../../package.json';
class BrandService
{
    getBrands = ()=>{
        return fetch(`${packageJson.server}/api/brand/list`)
    }

    saveBrand= (data)=>{
        return fetch(`${packageJson.server}/api/brand/save`,{
            method : "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
    }

}
var obj = new BrandService()
export default obj;