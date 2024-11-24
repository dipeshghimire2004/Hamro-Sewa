import React from 'react'
import {useForm, SubmitHandler, useFieldArray} from 'react-hook-form'
import { Input,Button } from '../components';
import toast,{Toaster} from 'react-hot-toast';
import axios from 'axios';
import Cookies from 'js-cookie';


interface ProductItems{
    name:string;
    description:string;
    rating:number;
    price:number;
    stock_quantity:number;
    discount:number;
    discounted_price:number;
    category:string;
    style:string;
    type:string;
    size:{value:string}[];
    // shop_co_image:string;
    shop_co_image:FileList;
}

const Product:React.FC = () => {
    const {register,handleSubmit, formState:{errors},control, setValue }=useForm<ProductItems>({
      defaultValues: {
        name: "",
        description: "",
        size: [{ value: "" }], // Initialize with an empty size object
      },
    });
   
    const { fields, append, remove } = useFieldArray({
      control,
      name: "size",
      
    });

    const onSubmit: SubmitHandler<ProductItems>=async (data)=>{
      const formData = new FormData();
      formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("rating", String(data.rating));
    formData.append("price", String(data.price));
    formData.append("stock_quantity", String(data.stock_quantity));
    formData.append("discount", String(data.discount));
    formData.append("discounted_price", String(data.discounted_price));
    formData.append("category", data.category);
    formData.append("style", data.style);
    formData.append("type", data.type);
    data.size.forEach((size, index) => {
      formData.append(`size[${index}]`, size.value); // Append each size
    });
    formData.append("shop_co_image", data.shop_co_image[0]); // Append file

        try {
          const token=Cookies.get('access')
          console.log(token)
            const response= await axios.post("https://shop-co-backend-nine.vercel.app/api/product",
                formData,
                {headers:{
                    'Content-Type':'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }},
                // withcredentials:true,
            )
            console.log(response.data)
            console.log(data.shop_co_image[0]); // Should log the uploaded file object
console.log(formData.get("shop_co_image")); // Should l
        } catch (error) {
            toast.error("Failed to create product");
        }
        
    }

    
  return (
    <div className='bg-black'>

      <div className="p-6 max-w-lg mx-auto bg-gray-500 text-black shadow-lg rounded-lg">
        <Toaster/>
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">Product Name</label>
          <Input 
            id="name" 
            {...register('name', { required: 'Product name is required' })} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-semibold">Description</label>
          <Input 
            id="description" 
            {...register('description', { required: 'Description is required' })} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-semibold">Rating</label>
          <Input 
            id="rating" 
            type="number" 
            step="0.1" 
            min="0" 
            max="5" 
            {...register('rating', { required: 'Rating is required' })} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.rating && <span className="text-red-500 text-sm">{errors.rating.message}</span>}
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-semibold">Price</label>
          <Input 
            id="price" 
            type="number" 
            {...register('price', { required: 'Price is required' })} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
        </div>

        <div>
          <label htmlFor="stock_quantity" className="block text-sm font-semibold">Stock Quantity</label>
          <Input 
            id="stock_quantity" 
            type="number" 
            {...register('stock_quantity', { required: 'Stock quantity is required' })} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.stock_quantity && <span className="text-red-500 text-sm">{errors.stock_quantity.message}</span>}
        </div>

        <div>
          <label htmlFor="discount" className="block text-sm font-semibold">Discount</label>
          <Input 
            id="discount" 
            type="number" 
            {...register('discount', { required: 'Discount is required' })} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.discount && <span className="text-red-500 text-sm">{errors.discount.message}</span>}
        </div>

        <div>
          <label htmlFor="discounted_price" className="block text-sm font-semibold">Discounted Price</label>
          <Input 
            id="discounted_price" 
            type="number" 
            {...register('discounted_price', { required: 'Discounted price is required' })} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.discounted_price && <span className="text-red-500 text-sm">{errors.discounted_price.message}</span>}
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-semibold">Category</label>
          <Input 
            id="category" 
            {...register('category', { required: 'Category is required' })} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
        </div>

        <div>
          <label htmlFor="style" className="block text-sm font-semibold">Style</label>
          <Input 
            id="style" 
            {...register('style', { required: 'Style is required' })} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.style && <span className="text-red-500 text-sm">{errors.style.message}</span>}
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-semibold">Type</label>
          <Input 
            id="type" 
            {...register('type', { required: 'Type is required' })} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.type && <span className="text-red-500 text-sm">{errors.type.message}</span>}
        </div>

        <div>
          <div className='flex items-center justify-between mb-2'>
            <label htmlFor="size" className="block text-sm font-semibold">Size</label>
            <Button 
            className='text-sm'
              type='button'
              onClick={()=> append({value:""})}
            >
              Add
            </Button>
          </div>
          {fields.map((field, index)=>(
            <div key={field.id} className='flex space-x-2 mb-2'>
              <Input 
                id={`size-${index}`}
                placeholder={`size ${index + 1}`}
                {...register(`size.${index}.value`, { required: 'Size is required' })} 
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.size?.[index]?.value && <span className="text-red-500 text-sm">{errors.size?.[index]?.value.message}</span>}
              <Button 
                type='button'
                onClick={()=>remove(index)}
                className=' hover:underline text-sm'
              >
                Remove
              </Button>
            </div>
          ))}
          
        </div>

        <div>
          <label htmlFor="shop_co_image" className="block text-sm font-semibold">Shop Co Image</label>
          <Input 
          onChange={(e) => setValue("shop_co_image", e.target.files!)}
            id="shop_co_image" 
            type='file'
            {...register('shop_co_image', { required: 'Shop image URL is required' })} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.shop_co_image && <span className="text-red-500 text-sm">{errors.shop_co_image.message}</span>}
        </div>

        <Button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
          Add Product
        </Button>
      </form>
      </div>
    </div>
  )
}

export default Product