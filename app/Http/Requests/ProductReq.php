<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductReq extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'product_name' => 'required|max:255',
            'product_code' => 'required|unique:products|max:255',
            'category_id' => 'required',
            'supplier_id' => 'required',
            'buying_price' => 'required',
            'selling_price' => 'required',
            'buying_date' => 'required',
            'product_quantity' => 'required',
        ];
    }

    public function messages()
    {
        return[
          'product_name.required' =>   'this part is required man',
            'product_code.required' => 'this code is also required',
            'product_code.unique' => 'this value should be unique also ',
            'product_code.max' => 'please do not exceed this limit of char',
            'category_id.required' => 'this code is also required',
            'supplier_id.required' => 'this code is also required',
            'buying_price.required' => 'this code is also required',
            'product_quantity.required' => 'this code is also required',
            'selling_price.required' => 'this code is also required',
            'buying_date.required' => 'this code is also required',
        ];
    }
}
