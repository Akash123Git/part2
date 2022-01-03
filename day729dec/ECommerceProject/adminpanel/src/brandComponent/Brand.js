import React from 'react'
import { connect } from 'react-redux'
import { ACTION_ADD_BRAND } from '../appredux/actions/BrandAction'
import store from '../appredux/store'
import brandService from '../services/BrandService'
var mapStateToProps = state => {
    return { brands : state.brands}
}

class Brand extends React.Component
{
    constructor(){
        super()
    }

    save = (event)=>{
        var ob = {
            brand_name : this.namebox.value
        }
        brandService.saveBrand(ob)
        .then(response=>response.json())
        .then(data=>{
            if(data.status){
                    store.dispatch({...ACTION_ADD_BRAND,payload:{
                        brand : data.brand
                    }})
                }
        })
        this.namebox.value=''
        event.preventDefault()
    }


    render() 
    {
    return <>
        <h1>Brand Page</h1>
        <hr className="col-12"/>      
        <form onSubmit={this.save}>
        <div className='row'>
            <div className='col-lg-5'>
                <input type="text" ref={c=>this.namebox=c} className="form-control" placeholder="Brand Name" required/>
            </div>
            <div className='col-lg-3'>
                <button type="submit" className="btn btn-success">Save Brand</button>
            </div>
            <div className='col-lg-4'>
                <b className="text-danger"></b>
            </div>
        </div>
        </form>
        <hr className="col-12"/>  

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Brand Name</th>
                </tr>
            </thead>
            <tbody>
                {this.props.brands.map((ob,index)=>{
                    return <tr key={index}>
                           <th>{index+1}</th> 
                           <th>{ob.brand_name}</th>
                    </tr>
                })}
            </tbody>
        </table>
    </>
    }
}

export default connect(mapStateToProps)(Brand)