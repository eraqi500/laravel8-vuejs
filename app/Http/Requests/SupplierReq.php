<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SupplierReq extends FormRequest
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
            'name' => 'required|unique:suppliers|max:255',
            'email' => 'required',
            'phone' => 'required|unique:suppliers'
        ];
    }

    public function messages()
    {
        return[
            'name.required'=> 'please enter your right name',
            'name.max' =>  'please dont exceed the limit',
            'email.required' => 'We need your email address also',
            'phone.required'=> 'please leave some number to call You Idiot',
        ];
    }
}
